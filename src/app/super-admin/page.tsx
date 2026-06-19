'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, GraduationCap, Clock, Activity, TrendingUp, Cpu, Fingerprint, Star, BookOpen, ChevronDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ScatterChart, Scatter, ZAxis, Cell, LineChart, Line, Legend } from 'recharts';
import { useDatabase } from '../../context/DatabaseContext';
import styles from './super-admin.module.css';

export default function SuperAdminDashboard() {
  const [selectedYear, setSelectedYear] = useState('2026');

  const { branches, faculties, students, courses } = useDatabase();
  
  // Empty states for charts to let them populate automatically based on real data
  const [studentTrendsData, setStudentTrendsData] = useState<any[]>([]);
  const [financialData, setFinancialData] = useState<any[]>([]);
  const [nexusData, setNexusData] = useState<any[]>([]);
  
  // Real Leaderboard based on branches
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  
  useEffect(() => {
    // Populate leaderboard with real branch data when it loads
    if (branches && branches.length > 0) {
      const realLeaderboard = branches.map(b => ({
        branch: b.name,
        score: b.students || 0,
        color: '#3b82f6'
      })).sort((a,b) => b.score - a.score);
      setLeaderboard(realLeaderboard);
    }
  }, [branches]);

  const stats = [
    { title: 'Total Branches', value: branches.length.toString(), icon: Building2, color: '#3b82f6' },
    { title: 'Total Faculty', value: faculties.length.toString(), icon: Users, color: '#10b981' },
    { title: 'Total Students', value: students.length.toString(), icon: GraduationCap, color: '#8b5cf6' },
    { title: 'Total Courses', value: courses.length.toString(), icon: BookOpen, color: '#f59e0b' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#111827', fontWeight: 600 }}>Platform Overview</h2>
        <div style={{ position: 'relative' }}>
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            style={{ appearance: 'none', padding: '0.4rem 2.2rem 0.4rem 1rem', borderRadius: '8px', border: '1px solid rgba(17,24,39,0.1)', background: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontWeight: 600, color: '#111827', cursor: 'pointer', outline: 'none' }}
          >
            <option value="2026">Year: 2026</option>
            <option value="2025">Year: 2025</option>
          </select>
          <ChevronDown size={16} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'rgba(17,24,39,0.5)' }} />
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            className={`liquid-glass-strong ${styles.statCard}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>{stat.title}</span>
              <div className={styles.statIcon} style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                <stat.icon size={20} />
              </div>
            </div>
            <div className={styles.statValue}>{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes radar-pulse {
          0% { transform: scale(0.8); opacity: 1; border-color: rgba(139, 92, 246, 0.8); }
          100% { transform: scale(2.5); opacity: 0; border-color: rgba(139, 92, 246, 0); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .progress-bar-container {
          width: 100%;
          height: 12px;
          background: rgba(17,24,39,0.05);
          border-radius: 99px;
          overflow: hidden;
          position: relative;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 99px;
          transition: width 1s ease-in-out;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.3);
        }
        .progress-bar-glow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: scanline 2s linear infinite;
        }
      `}</style>

      {/* Row 1: Health Matrix & Financial Velocity */}
      <div className={styles.chartsRow}>
        
        {/* Component 1: Student Trends */}
        <div className={`liquid-glass-strong ${styles.chartContainer}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.4rem', backgroundColor: 'rgba(139, 92, 246, 0.15)', borderRadius: '8px', color: '#8b5cf6' }}>
              <Users size={18} />
            </div>
            <h3 className={styles.sectionTitle} style={{ margin: 0, fontSize: '1.1rem' }}>Total Students (Year/Month-wise)</h3>
          </div>
          
          <div style={{ width: '100%', height: '160px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={studentTrendsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(17,24,39,0.05)" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.5)' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.5)' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Line type="monotone" dataKey="Shastri" name="Shastri N." stroke="#FDE047" strokeWidth={3} dot={{ r: 4, fill: '#FDE047', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="Jawahar" name="Jawahar N." stroke="#FFEDD5" strokeWidth={3} dot={{ r: 4, fill: '#FFEDD5', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="Jogeshwari" name="Jogeshwari" stroke="#9CA3AF" strokeWidth={3} dot={{ r: 4, fill: '#9CA3AF', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="Behram" name="Behram B." stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, fill: '#3B82F6', strokeWidth: 0 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Component 2: Financial Velocity Map */}
        <div className={`liquid-glass-strong ${styles.chartContainer}`}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ padding: '0.4rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', borderRadius: '8px', color: '#10b981' }}>
                <TrendingUp size={18} />
              </div>
              <h3 className={styles.sectionTitle} style={{ margin: 0, fontSize: '1.1rem' }}>Financial Velocity</h3>
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', padding: '0.3rem 0.8rem', borderRadius: '99px' }}>
              +24% Growth
            </div>
          </div>
          
          <div style={{ width: '100%', height: '160px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={financialData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(17,24,39,0.05)" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.5)' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.5)' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                <Area type="monotone" dataKey="cost" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorCost)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Row 2: Course Engagement Nexus & Leaderboard */}
      <div className={styles.chartsRowReverse}>
        
        {/* Component 3: Course Engagement Nexus */}
        <div className={`liquid-glass-strong ${styles.chartContainer}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.4rem', backgroundColor: 'rgba(59, 130, 246, 0.15)', borderRadius: '8px', color: '#3b82f6' }}>
              <Fingerprint size={18} />
            </div>
            <h3 className={styles.sectionTitle} style={{ margin: 0, fontSize: '1.1rem' }}>Course Engagement Nexus</h3>
          </div>
          
          <div style={{ width: '100%', height: '160px', backgroundColor: 'rgba(17,24,39,0.02)', borderRadius: '12px', padding: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(17,24,39,0.05)" />
                <XAxis type="number" dataKey="popularity" name="Popularity" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.5)' }} />
                <YAxis type="number" dataKey="engagement" name="Engagement" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.5)' }} />
                <ZAxis type="number" dataKey="size" range={[100, 1000]} name="Enrollment" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '12px', border: 'none', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }} />
                <Scatter name="Courses" data={nexusData} fill="#3b82f6" fillOpacity={0.6}>
                  {nexusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'][index % 5]} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Component 4: Premium Gamified Leaderboard */}
        <div className={`liquid-glass-strong ${styles.chartContainer}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.4rem', backgroundColor: 'rgba(245, 158, 11, 0.15)', borderRadius: '8px', color: '#f59e0b' }}>
              <Star size={18} />
            </div>
            <h3 className={styles.sectionTitle} style={{ margin: 0, fontSize: '1.1rem' }}>Elite Branch Rankings</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingTop: '0.5rem' }}>
            {leaderboard.map((branch, idx) => (
              <div key={branch.branch} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'rgba(17,24,39,0.2)', width: '20px' }}>{idx + 1}</span>
                    <span style={{ fontWeight: 600, color: '#111827', fontSize: '0.95rem' }}>{branch.branch}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 700, fontSize: '1.1rem', color: '#111827' }}>
                    {branch.score} <span style={{ fontSize: '0.7rem', color: 'rgba(17,24,39,0.4)', fontWeight: 500 }}>PTS</span>
                  </div>
                </div>
                
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: `${branch.score}%`, background: branch.color }}></div>
                  <div className="progress-bar-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
