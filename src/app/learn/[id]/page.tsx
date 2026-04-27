'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  Play, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  BookOpen, 
  CheckCircle, 
  Clock,
  Send,
  Sparkles,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './learn.module.css';
import { courses } from '@/data/courses';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';

export default function LearnPage() {
  const { id } = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'syllabus' | 'mentor'>('syllabus');
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [activeLesson, setActiveLesson] = useState({ moduleIdx: 0, lessonIdx: 0 });
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Hello! I'm your Nexus Mentor. How can I help you with today's lesson?" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const foundCourse = courses.find(c => c.id.toString() === id || c.title.toLowerCase().replace(/\s+/g, '-') === id);
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      router.push('/dashboard');
    }
  }, [id, router]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const toggleModule = (idx: number) => {
    setExpandedModules(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleSendMessage = async () => {
    if (!userInput.trim() || isTyping) return;

    const userMessage = userInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setUserInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: `You are the Nexus Mentor for the course "${course.title}". Help the student understand the material. Keep it professional and academic.` },
            ...chatMessages.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text })),
            { role: 'user', content: userMessage }
          ]
        }),
      });

      const data = await response.text();
      setChatMessages(prev => [...prev, { role: 'bot', text: data }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting to my brain right now. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!course) return null;

  const currentLesson = course.syllabus[activeLesson.moduleIdx].subtopics[activeLesson.lessonIdx];

  return (
    <div className={styles.page}>
      {/* Main Learning Area */}
      <div className={styles.videoArea}>
        <div className={styles.playerWrapper}>
          <div className={styles.playerPlaceholder}>
            <motion.div 
              className={styles.playIcon}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={32} fill="white" />
            </motion.div>
            <p style={{ marginTop: '1rem', opacity: 0.8 }}>Streaming in 4K — Infodesk Global CDN</p>
          </div>
        </div>

        <div className={styles.videoDetails}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Link href="/dashboard" className="theme-text-muted hover-scale" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
              <ArrowLeft size={16} /> Back to Dashboard
            </Link>
          </div>

          <h1 className={styles.videoTitle}>{currentLesson}</h1>
          <div className={styles.videoMeta}>
            <div className={styles.metaItem}>
              <BookOpen size={16} />
              <span>{course.title}</span>
            </div>
            <div className={styles.metaItem}>
              <Clock size={16} />
              <span>12:45 remaining</span>
            </div>
            <div className={styles.metaItem}>
              <Sparkles size={16} style={{ color: course.color }} />
              <span style={{ color: course.color, fontWeight: 600 }}>AI Mentor Enhanced</span>
            </div>
          </div>

          <div className={`liquid-glass ${styles.lessonDescription}`} style={{ padding: '1.5rem', borderRadius: '1rem' }}>
            <p className="theme-text-muted" style={{ lineHeight: 1.6 }}>
              In this lesson, we dive deep into the core principles of {currentLesson}. 
              You'll learn the architectural foundations, best practices, and real-world 
              implementation strategies used at the highest professional levels.
            </p>
          </div>
        </div>
      </div>

      {/* Side Panels */}
      <div className={styles.sidebars}>
        <div className={styles.sidebarTabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'syllabus' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('syllabus')}
          >
            Syllabus
            {activeTab === 'syllabus' && <motion.div layoutId="tab-underline" className={styles.tabIndicator} />}
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'mentor' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('mentor')}
          >
            AI Mentor
            {activeTab === 'mentor' && <motion.div layoutId="tab-underline" className={styles.tabIndicator} />}
          </button>
        </div>

        <div className={styles.tabContent}>
          <AnimatePresence mode="wait">
            {activeTab === 'syllabus' ? (
              <motion.div 
                key="syllabus"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={styles.syllabusList}
              >
                {course.syllabus.map((mod: any, mIdx: number) => (
                  <div key={mIdx} className={styles.module}>
                    <div 
                      className={styles.moduleHeader}
                      onClick={() => toggleModule(mIdx)}
                    >
                      <div className={styles.moduleInfo}>
                        <span className={styles.moduleLabel}>{mod.week}</span>
                        <span className={styles.moduleTitle}>{mod.topic}</span>
                      </div>
                      {expandedModules.includes(mIdx) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                    
                    <AnimatePresence>
                      {expandedModules.includes(mIdx) && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className={styles.lessonList}>
                            {mod.subtopics.map((lesson: string, lIdx: number) => {
                              const isActive = activeLesson.moduleIdx === mIdx && activeLesson.lessonIdx === lIdx;
                              return (
                                <div 
                                  key={lIdx}
                                  className={`${styles.lessonItem} ${isActive ? styles.lessonItemActive : ''}`}
                                  onClick={() => setActiveLesson({ moduleIdx: mIdx, lessonIdx: lIdx })}
                                >
                                  {isActive ? <Play size={12} fill="currentColor" /> : <CheckCircle size={12} style={{ opacity: 0.3 }} />}
                                  <span>{lesson}</span>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="mentor"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={styles.aiMentor}
              >
                <div className={styles.chatHistory}>
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`${styles.message} ${msg.role === 'user' ? styles.userMsg : styles.botMsg}`}>
                      <div className={`${styles.msgBubble} ${msg.role === 'user' ? styles.userBubble : styles.botBubble}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className={styles.botMsg}>
                      <div className={styles.botBubble} style={{ display: 'flex', gap: '4px' }}>
                        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }}>.</motion.span>
                        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>.</motion.span>
                        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>.</motion.span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <div className={styles.chatInputArea}>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="text" 
                      className={styles.chatInput}
                      placeholder="Ask your mentor anything..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button className={styles.sendBtn} onClick={handleSendMessage}>
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
