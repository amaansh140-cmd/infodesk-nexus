'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, CheckCircle2, XCircle, Clock, 
  Search, Filter, Download, MoreVertical,
  Calendar as CalendarIcon, MapPin
} from 'lucide-react';
import styles from '../super-admin.module.css';

export default function AttendanceManager() {
  const [attendanceData, setAttendanceData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBranch, setFilterBranch] = useState('All');
  const [filterRole, setFilterRole] = useState('All');
  const [startDate, setStartDate] = useState(() => new Date().toLocaleDateString('en-CA'));
  const [endDate, setEndDate] = useState(() => new Date().toLocaleDateString('en-CA'));
  const [isLoading, setIsLoading] = useState(true);
  const [generatingCodeFor, setGeneratingCodeFor] = useState<string | null>(null);

  const fetchAttendance = async () => {
    try {
      const res = await fetch(`/api/staff-attendance?startDate=${startDate}&endDate=${endDate}`, { cache: 'no-store' });
      const data = await res.json();
      if (Array.isArray(data)) {
        setAttendanceData(data);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch attendance', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [startDate, endDate]);

  // Calculate top stats
  const totalRecords = attendanceData.length;
  const presentCount = attendanceData.filter(d => d.status === 'Present' || d.status === 'Late').length;
  const absentCount = attendanceData.filter(d => d.status === 'Absent').length;
  const leaveCount = attendanceData.filter(d => d.status === 'On Leave').length;
  const attendanceRate = totalRecords > 0 ? Math.round((presentCount / totalRecords) * 100) : 0;

  // Filter Data
  const filteredData = attendanceData.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (record.staffId && record.staffId.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesBranch = filterBranch === 'All' || record.branch === filterBranch;
    const matchesRole = filterRole === 'All' || record.role === filterRole;
    return matchesSearch && matchesBranch && matchesRole;
  });

  const exportCSV = () => {
    if (filteredData.length === 0) return;
    
    const headers = ['Date', 'Name', 'Role', 'Branch', 'Status', 'Time', 'Device'];
    const csvRows = [headers.join(',')];

    filteredData.forEach(row => {
      const sessionStr = row.sessions?.map((s: any) => `${s.in} to ${s.out}`).join(' | ') || '';
      const deviceStr = row.sessions?.map((s: any) => s.device || 'Unknown').join(' | ') || 'Unknown';
      const values = [
        row.date,
        `"${row.name}"`,
        row.role,
        row.branch,
        row.status,
        `"${sessionStr}"`,
        `"${deviceStr}"`
      ];
      csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `Attendance_Report_${startDate}_to_${endDate}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStatusChange = async (staffId: string, recordId: string | null, newStatusDisplay: string, date: string) => {
    let dbStatus = 'absent';
    if (newStatusDisplay === 'Present') dbStatus = 'present';
    else if (newStatusDisplay === 'Late') dbStatus = 'late';
    else if (newStatusDisplay === 'On Leave') dbStatus = 'on leave';

    setAttendanceData(prevData => prevData.map(record => {
      if (record.staffId === staffId && record.date === date) {
        return { ...record, status: newStatusDisplay };
      }
      return record;
    }));

    try {
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      await fetch('/api/staff-attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: recordId, 
          staffId,
          date: date,
          status: dbStatus,
          clockInTime: dbStatus === 'present' || dbStatus === 'late' ? timeStr : null,
          clockInBranch: 'Global'
        })
      });
      fetchAttendance();
    } catch (error) {
      console.error('Failed to update status', error);
      alert('Failed to update status. Please try again.');
    }
  };

  const handleGenerateCode = async (staffId: string, role: string) => {
    try {
      setGeneratingCodeFor(staffId);
      const res = await fetch('/api/device-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: staffId, role })
      });
      if (res.ok) {
        await fetchAttendance();
      } else {
        alert('Failed to generate code.');
      }
    } catch (error) {
      console.error('Failed to generate code:', error);
      alert('Failed to generate code.');
    } finally {
      setGeneratingCodeFor(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Present': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#10b981' }}>Present</span>;
      case 'Absent': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#ef4444' }}>Absent</span>;
      case 'Late': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#f59e0b' }}>Late</span>;
      case 'On Leave': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#6b7280' }}>On Leave</span>;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>Attendance Manager</h1>
            <p className={styles.pageSubtitle}>Monitor real-time attendance across all branches</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={exportCSV} disabled={filteredData.length === 0} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', fontWeight: 500, fontSize: '0.9rem', cursor: filteredData.length === 0 ? 'not-allowed' : 'pointer', opacity: filteredData.length === 0 ? 0.6 : 1 }}>
              <Download size={16} /> Export Report
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: 'none', background: '#111827', color: 'white', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}>
              <CheckCircle2 size={16} /> Mark Attendance
            </button>
          </div>
        </div>
      </div>

      {/* Top Stats */}
      <div className={styles.statsGrid} style={{ marginBottom: '2rem' }}>
        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '1rem' }}>
              <Users size={24} />
            </div>
            <div>
              <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500 }}>Overall Rate</div>
              <div style={{ color: '#111827', fontSize: '1.5rem', fontWeight: 700 }}>{attendanceRate}%</div>
            </div>
          </div>
        </div>
        
        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(16,185,129,0.1)', color: '#10b981', borderRadius: '1rem' }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500 }}>Present (Selected)</div>
              <div style={{ color: '#111827', fontSize: '1.5rem', fontWeight: 700 }}>{presentCount}</div>
            </div>
          </div>
        </div>

        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(239,68,68,0.1)', color: '#ef4444', borderRadius: '1rem' }}>
              <XCircle size={24} />
            </div>
            <div>
              <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500 }}>Absent (Selected)</div>
              <div style={{ color: '#111827', fontSize: '1.5rem', fontWeight: 700 }}>{absentCount}</div>
            </div>
          </div>
        </div>

        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(245,158,11,0.1)', color: '#f59e0b', borderRadius: '1rem' }}>
              <Clock size={24} />
            </div>
            <div>
              <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500 }}>On Leave</div>
              <div style={{ color: '#111827', fontSize: '1.5rem', fontWeight: 700 }}>{leaveCount}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="liquid-glass" style={{ borderRadius: '1.25rem', overflow: 'hidden' }}>
        
        {/* Filters Header */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(17,24,39,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1, minWidth: '250px' }}>
            <Search size={18} color="rgba(17,24,39,0.4)" />
            <input 
              type="text" 
              placeholder="Search by name or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1, minWidth: '150px' }}>
              <span style={{fontSize: '0.8rem', color: 'gray'}}>From:</span>
              <input 
                type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', color: '#111827', fontWeight: 500, fontFamily: 'inherit' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1, minWidth: '150px' }}>
              <span style={{fontSize: '0.8rem', color: 'gray'}}>To:</span>
              <input 
                type="date" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', color: '#111827', fontWeight: 500, fontFamily: 'inherit' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1, minWidth: '150px' }}>
              <MapPin size={16} color="rgba(17,24,39,0.5)" />
              <select 
                value={filterBranch}
                onChange={(e) => setFilterBranch(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', color: '#111827', fontWeight: 500, cursor: 'pointer' }}
              >
                <option value="All">All Branches</option>
                <option value="Shashtri Nagar">Shashtri Nagar</option>
                <option value="Jogeshwari">Jogeshwari</option>
                <option value="Jawahar Nagar">Jawahar Nagar</option>
                <option value="Behram Baug">Behram Baug</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1, minWidth: '150px' }}>
              <Filter size={16} color="rgba(17,24,39,0.5)" />
              <select 
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', color: '#111827', fontWeight: 500, cursor: 'pointer' }}
              >
                <option value="All">All Roles</option>
                <option value="Faculty">Faculty</option>
                <option value="Sub Admin">Sub Admin</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(17,24,39,0.05)', color: 'rgba(17,24,39,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Member Info</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Role</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Branch</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Date</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>In Time</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Out Time</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Device</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Device Code</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={9} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(17,24,39,0.4)' }}>
                    Loading attendance data...
                  </td>
                </tr>
              ) : filteredData.length === 0 ? (
                <tr>
                  <td colSpan={9} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(17,24,39,0.4)' }}>
                    No records found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredData.map((record, index) => (
                  <tr key={index} style={{ borderBottom: index === filteredData.length - 1 ? 'none' : '1px solid rgba(17,24,39,0.03)', transition: 'background 0.2s', cursor: 'pointer', transform: 'none' }} className="hover-scale">
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 600, color: '#111827' }}>{record.name}</span>
                        <span style={{ fontSize: '0.8rem', color: '#3b82f6' }}>{record.displayId || record.staffId || record.id}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 500 }}>{record.role}</span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ fontSize: '0.9rem', color: 'rgba(17,24,39,0.7)' }}>{record.branch}</span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span style={{ fontSize: '0.9rem', color: '#111827', fontFamily: 'monospace' }}>{record.date}</span>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {record.sessions?.length > 0 ? record.sessions.map((session: any, idx: number) => {
                          let t = session.in;
                          if (t !== '--:--' && t.includes('T')) {
                            try { t = new Date(t).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }); } catch (e) {}
                          }
                          return (
                            <span key={idx} style={{ fontSize: '0.85rem', color: '#111827', fontFamily: 'monospace', background: 'rgba(17,24,39,0.03)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                              {t}
                            </span>
                          );
                        }) : <span style={{ fontSize: '0.9rem', color: '#111827', fontFamily: 'monospace' }}>--:--</span>}
                      </div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {record.sessions?.length > 0 ? record.sessions.map((session: any, idx: number) => {
                          let t = session.out;
                          if (t !== '--:--' && t.includes('T')) {
                            try { t = new Date(t).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }); } catch (e) {}
                          }
                          return (
                            <span key={idx} style={{ fontSize: '0.85rem', color: '#111827', fontFamily: 'monospace', background: 'rgba(17,24,39,0.03)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                              {t}
                            </span>
                          );
                        }) : <span style={{ fontSize: '0.9rem', color: '#111827', fontFamily: 'monospace' }}>--:--</span>}
                      </div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {record.sessions?.length > 0 ? record.sessions.map((session: any, idx: number) => (
                          <span key={idx} style={{ fontSize: '0.85rem', color: '#6b7280', background: 'rgba(17,24,39,0.03)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                            {session.device || 'Unknown'}
                          </span>
                        )) : <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>--</span>}
                      </div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {record.deviceVerificationCode ? (
                          <span style={{ fontWeight: 600, color: '#10b981', fontFamily: 'monospace', fontSize: '1.1rem', letterSpacing: '0.1em' }}>
                            {record.deviceVerificationCode}
                          </span>
                        ) : (
                          <button
                            onClick={() => handleGenerateCode(record.staffId, record.role)}
                            disabled={generatingCodeFor === record.staffId}
                            className={styles.primaryBtn}
                            style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', background: '#3b82f6', opacity: generatingCodeFor === record.staffId ? 0.7 : 1 }}
                          >
                            {generatingCodeFor === record.staffId ? '...' : 'Generate'}
                          </button>
                        )}
                      </div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <select
                        value={record.status}
                        onChange={(e) => handleStatusChange(record.staffId, record.id, e.target.value)}
                        style={{ 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: '99px', 
                          fontSize: '0.8rem', 
                          fontWeight: 600, 
                          border: '1px solid transparent',
                          outline: 'none',
                          cursor: 'pointer',
                          appearance: 'none',
                          textAlign: 'center',
                          background: record.status === 'Present' ? 'rgba(16,185,129,0.1)' : 
                                      record.status === 'Absent' ? 'rgba(239,68,68,0.1)' : 
                                      record.status === 'Late' ? 'rgba(245,158,11,0.1)' : 'rgba(156,163,175,0.1)',
                          color: record.status === 'Present' ? '#10b981' : 
                                record.status === 'Absent' ? '#ef4444' : 
                                record.status === 'Late' ? '#f59e0b' : '#6b7280'
                        }}
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Late">Late</option>
                        <option value="On Leave">On Leave</option>
                      </select>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(17,24,39,0.4)' }}>
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </motion.div>
  );
}
