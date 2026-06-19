'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, GraduationCap, BookOpen, Clock, 
  CalendarCheck, AlertTriangle, CheckCircle2,
  TrendingUp, Activity
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAuth } from '../../context/AuthContext';
import styles from '../super-admin/super-admin.module.css'; // Reusing styles

// Mock data strictly scoped to branch
const branchStats = {
  faculty: 0,
  students: 0,
  activeCourses: 0,
  attendanceRate: 0,
  pendingLectures: 0
};

const activityFeed: any[] = [];

const weeklyAttendanceData: any[] = [];

export default function SubAdminDashboard() {
  const { user } = useAuth();
  const branchName = user?.branch || 'Your';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>{branchName} Branch Overview</h1>
            <p className={styles.pageSubtitle}>Local operations and real-time metrics for {branchName} branch.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(16,185,129,0.1)', color: '#10b981', borderRadius: '2rem', fontWeight: 600, fontSize: '0.85rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
              Branch Active
            </span>
          </div>
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className={styles.statsGrid} style={{ marginBottom: '2rem' }}>
        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '1rem' }}>
              <GraduationCap size={24} />
            </div>
            <TrendingUp size={20} color="#10b981" />
          </div>
          <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500 }}>Total Students</div>
          <div style={{ color: '#111827', fontSize: '1.75rem', fontWeight: 700 }}>{branchStats.students}</div>
        </div>

        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', borderRadius: '1rem' }}>
              <Users size={24} />
            </div>
          </div>
          <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500 }}>Total Faculty</div>
          <div style={{ color: '#111827', fontSize: '1.75rem', fontWeight: 700 }}>{branchStats.faculty}</div>
        </div>

        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(16,185,129,0.1)', color: '#10b981', borderRadius: '1rem' }}>
              <CalendarCheck size={24} />
            </div>
          </div>
          <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500 }}>Today's Attendance</div>
          <div style={{ color: '#111827', fontSize: '1.75rem', fontWeight: 700 }}>{branchStats.attendanceRate}%</div>
        </div>

        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(245,158,11,0.1)', color: '#f59e0b', borderRadius: '1rem' }}>
              <Clock size={24} />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f59e0b', background: 'rgba(245,158,11,0.1)', padding: '0.2rem 0.5rem', borderRadius: '1rem' }}>Action Needed</span>
          </div>
          <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500 }}>Pending Lectures</div>
          <div style={{ color: '#111827', fontSize: '1.75rem', fontWeight: 700 }}>{branchStats.pendingLectures}</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        
        {/* Chart Area */}
        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: 0 }}>Weekly Attendance Trends</h3>
          </div>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="99%" height="100%">
              <AreaChart data={weeklyAttendanceData}>
                <defs>
                  <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(17,24,39,0.05)" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.5)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.5)' }} domain={['dataMin - 2', 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '1rem' }}
                  itemStyle={{ color: '#111827', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed & Alerts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Activity size={20} color="#3b82f6" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: 0 }}>Recent Activity</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {activityFeed.map((activity) => (
                <div key={activity.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    padding: '0.5rem', 
                    borderRadius: '50%', 
                    background: activity.status === 'success' ? 'rgba(16,185,129,0.1)' : 
                                activity.status === 'warning' ? 'rgba(245,158,11,0.1)' : 
                                activity.status === 'error' ? 'rgba(239,68,68,0.1)' : 'rgba(59,130,246,0.1)',
                    color: activity.status === 'success' ? '#10b981' : 
                           activity.status === 'warning' ? '#f59e0b' : 
                           activity.status === 'error' ? '#ef4444' : '#3b82f6'
                  }}>
                    {activity.status === 'success' && <CheckCircle2 size={16} />}
                    {activity.status === 'warning' && <Clock size={16} />}
                    {activity.status === 'error' && <AlertTriangle size={16} />}
                    {activity.status === 'info' && <Users size={16} />}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.9rem', color: '#111827', margin: '0 0 0.25rem 0', fontWeight: 500, lineHeight: 1.4 }}>
                      {activity.message}
                    </p>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(17,24,39,0.5)' }}>{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
