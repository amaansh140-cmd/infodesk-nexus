'use client';

import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function FacultyTimetable() {
  const schedule = [
    { day: 'Monday', slots: [
      { time: '09:00 AM - 10:30 AM', course: 'Data Structures', batch: 'Batch A', room: 'Room 201', type: 'Lecture' },
      { time: '11:00 AM - 12:30 PM', course: 'Algorithms', batch: 'Batch B', room: 'Room 204', type: 'Lecture' },
    ]},
    { day: 'Tuesday', slots: [
      { time: '09:00 AM - 12:00 PM', course: 'Web Development', batch: 'Batch A', room: 'Lab 1', type: 'Practical' },
    ]},
    { day: 'Wednesday', slots: [
      { time: '02:00 PM - 03:30 PM', course: 'Algorithms', batch: 'Batch B', room: 'Room 204', type: 'Lecture' },
    ]},
    { day: 'Thursday', slots: [] },
    { day: 'Friday', slots: [
      { time: '10:00 AM - 11:30 AM', course: 'Data Structures', batch: 'Batch A', room: 'Room 201', type: 'Tutorial' },
    ]},
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>My Timetable</h1>
          <p className={styles.pageSubtitle}>Your weekly schedule across all assigned courses and batches</p>
        </div>
        <button className={styles.secondaryBtn}>
          <CalendarIcon size={16} /> Sync to Calendar
        </button>
      </header>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Weekly Schedule</h2>
        </div>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {schedule.map((dayData, index) => (
            <div key={index} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <div style={{ background: '#f9fafb', padding: '0.75rem 1rem', borderBottom: '1px solid #e5e7eb', fontWeight: 600, color: '#374151' }}>
                {dayData.day}
              </div>
              <div style={{ padding: '1rem' }}>
                {dayData.slots.length > 0 ? (
                  <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                    {dayData.slots.map((slot, sIdx) => (
                      <div key={sIdx} style={{ padding: '1rem', borderRadius: '0.5rem', background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span style={{ fontWeight: 600, color: '#111827' }}>{slot.course}</span>
                          <span className={styles.badge} style={{ background: slot.type === 'Practical' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)', color: slot.type === 'Practical' ? '#8b5cf6' : '#3b82f6' }}>{slot.type}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={14} /> {slot.time}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={14} /> {slot.room} ({slot.batch})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: '1rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem', fontStyle: 'italic' }}>
                    No classes scheduled.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
