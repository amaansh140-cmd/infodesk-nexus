'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, AlertCircle, Clock, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useDatabase } from '../../../context/DatabaseContext';
import { getDistanceInMeters, BRANCHES, GEOFENCE_RADIUS_METERS } from '../../../utils/geoUtils';
import styles from '../../super-admin/super-admin.module.css';

export default function StudentAttendance() {
  const { user } = useAuth();
  const { studentDailyAttendance, logStudentDailyAttendance, students } = useDatabase();
  
  const [geoStatus, setGeoStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [geoErrorMsg, setGeoErrorMsg] = useState('');
  const [activeBranch, setActiveBranch] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const currentStudent = students.find(s => s.id === user?.id);
  
  const myRecords = studentDailyAttendance.filter(r => r.studentId === user?.id).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const todayString = new Date().toISOString().split('T')[0];
  const todayRecord = myRecords.find(r => r.date === todayString);

  const isClockedIn = !!todayRecord?.clockInTime;
  const isClockedOut = !!todayRecord?.clockOutTime;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const verifyLocation = (callback?: () => void) => {
    if (!navigator.geolocation) {
      setGeoStatus('error');
      setGeoErrorMsg('Geolocation is not supported by your browser.');
      return;
    }

    setGeoStatus('loading');
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const branchName = currentStudent?.branch;
        
        if (!branchName) {
          setGeoStatus('error');
          setGeoErrorMsg('You are not assigned to any branch.');
          return;
        }

        let branchesToCheck = [branchName];
        if (branchName === 'Global') {
          branchesToCheck = Object.keys(BRANCHES);
        }

        let minDistance = Infinity;
        let isWithinGeofence = false;
        let closestBranch: string | null = null;

        for (const bName of branchesToCheck) {
          const coords = BRANCHES[bName as keyof typeof BRANCHES];
          if (coords) {
            const distance = getDistanceInMeters(latitude, longitude, coords.lat, coords.lon);
            if (distance < minDistance) {
              minDistance = distance;
              closestBranch = bName;
            }
            if (distance <= GEOFENCE_RADIUS_METERS) {
              isWithinGeofence = true;
            }
          }
        }

        if (isWithinGeofence && closestBranch) {
          setGeoStatus('success');
          setGeoErrorMsg('');
          setActiveBranch(closestBranch);
          if (callback) callback();
        } else {
          setGeoStatus('error');
          setActiveBranch(null);
          setGeoErrorMsg(`You are ${Math.round(minDistance)} meters away from nearest branch. Must be within ${GEOFENCE_RADIUS_METERS} meters.`);
        }
      },
      (error) => {
        setGeoStatus('error');
        setGeoErrorMsg(error.message || 'Unable to retrieve location. Please grant permissions.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleClockIn = () => {
    if (geoStatus !== 'success') {
      verifyLocation(() => performClockIn());
      return;
    }
    performClockIn();
  };

  const performClockIn = () => {
    if (!user) return;
    const now = new Date();
    logStudentDailyAttendance({
      studentId: user.id,
      date: todayString,
      clockInTime: now.toISOString(),
      clockInBranch: activeBranch || undefined,
      status: 'ongoing'
    });
  };

  const handleClockOut = () => {
    if (geoStatus !== 'success') {
      verifyLocation(() => performClockOut());
      return;
    }
    performClockOut();
  };

  const performClockOut = () => {
    if (!user) return;
    const now = new Date();
    logStudentDailyAttendance({
      studentId: user.id,
      date: todayString,
      clockOutTime: now.toISOString(),
      clockOutBranch: activeBranch || undefined,
      status: 'present'
    });
  };

  const formatTime = (isoString: string | null) => {
    if (!isoString) return '--:--';
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getElapsedTime = () => {
    if (!todayRecord?.clockInTime) return '0h 0m';
    const end = todayRecord.clockOutTime ? new Date(todayRecord.clockOutTime) : currentTime;
    const start = new Date(todayRecord.clockInTime);
    const diffMs = end.getTime() - start.getTime();
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${mins}m`;
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>My Daily Attendance</h1>
          <p className={styles.pageSubtitle}>Clock In & Clock Out at your assigned branch ({currentStudent?.branch})</p>
        </div>
      </header>

      {/* Geofence Status Banner */}
      <div className={`liquid-glass-strong ${styles.tableCard}`} style={{ marginBottom: '1.5rem', background: geoStatus === 'success' ? 'rgba(16, 185, 129, 0.05)' : geoStatus === 'error' ? 'rgba(239, 68, 68, 0.05)' : 'rgba(255, 255, 255, 0.4)', border: geoStatus === 'success' ? '1px solid rgba(16, 185, 129, 0.3)' : geoStatus === 'error' ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(17,24,39,0.05)' }}>
        <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '50%', background: geoStatus === 'success' ? '#10b981' : geoStatus === 'error' ? '#ef4444' : 'rgba(17,24,39,0.05)', color: geoStatus === 'success' || geoStatus === 'error' ? 'white' : '#6b7280' }}>
              {geoStatus === 'error' ? <AlertCircle size={20} /> : <MapPin size={20} />}
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.25rem', fontSize: '1rem', fontWeight: 600, color: '#111827' }}>Location Verification</h3>
              <p style={{ margin: 0, fontSize: '0.875rem', color: geoStatus === 'error' ? '#ef4444' : '#6b7280' }}>
                {geoStatus === 'idle' && 'You must verify your location at your branch to clock in or out.'}
                {geoStatus === 'loading' && 'Checking your location...'}
                {geoStatus === 'success' && 'Location Verified: You are within the branch premises.'}
                {geoStatus === 'error' && geoErrorMsg}
              </p>
            </div>
          </div>
          <button 
            onClick={() => verifyLocation()} 
            disabled={geoStatus === 'loading'}
            className={`liquid-glass ${styles.secondaryBtn} hover-scale`}
            style={{ opacity: geoStatus === 'loading' ? 0.5 : 1, cursor: geoStatus === 'loading' ? 'not-allowed' : 'pointer' }}
          >
            {geoStatus === 'loading' ? 'Verifying...' : 'Verify Location'}
          </button>
        </div>
      </div>

      <div className={styles.grid2Cols} style={{ marginBottom: '2rem' }}>
        
        {/* Clock Actions */}
        <div className={`liquid-glass-strong ${styles.tableCard} hover-scale`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem', color: '#111827' }}>
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            {currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '300px' }}>
            {!isClockedIn ? (
              <button 
                onClick={handleClockIn}
                className={`liquid-glass ${styles.primaryBtn} hover-scale`}
                style={{ flex: 1, padding: '1rem', fontSize: '1.125rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
              >
                <Clock size={20} /> IN
              </button>
            ) : !isClockedOut ? (
              <button 
                onClick={handleClockOut}
                className={`liquid-glass ${styles.primaryBtn} hover-scale`}
                style={{ flex: 1, padding: '1rem', fontSize: '1.125rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', background: '#ef4444' }}
              >
                <CheckCircle2 size={20} /> OUT
              </button>
            ) : (
              <div style={{ flex: 1, padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '1.25rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={20} /> Shift Completed
              </div>
            )}
          </div>

          {isClockedIn && (
            <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.4)', padding: '1rem', borderRadius: '1.25rem', width: '100%', maxWidth: '300px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Clocked In:</span>
                <span style={{ fontWeight: 500, color: '#111827' }}>{formatTime(todayRecord?.clockInTime!)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Elapsed Time:</span>
                <span style={{ fontWeight: 600, color: '#3b82f6' }}>{getElapsedTime()}</span>
              </div>
            </div>
          )}
        </div>

        {/* Attendance Summary */}
        <div className={`liquid-glass-strong ${styles.tableCard} hover-scale`}>
          <div className={styles.tableHeaderRow}>
            <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CalendarIcon size={20} color="#6b7280" /> My Recent Activity
            </h2>
          </div>
          <div>
            {myRecords.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: '#6b7280' }}>
                <p>No attendance records found.</p>
              </div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Clock In</th>
                    <th>Clock Out</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {myRecords.slice(0, 10).map((record, idx) => (
                    <tr key={idx} className={styles.tableRow}>
                      <td style={{ fontWeight: 500 }}>{new Date(record.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span>{formatTime(record.clockInTime)}</span>
                          {record.clockInBranch && <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>@ {record.clockInBranch}</span>}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span>{formatTime(record.clockOutTime)}</span>
                          {record.clockOutBranch && <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>@ {record.clockOutBranch}</span>}
                        </div>
                      </td>
                      <td>
                        <span className={styles.statusBadge} style={{
                          background: record.status === 'present' ? 'rgba(16, 185, 129, 0.1)' : record.status === 'ongoing' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                          color: record.status === 'present' ? '#10b981' : record.status === 'ongoing' ? '#3b82f6' : '#f59e0b'
                        }}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
