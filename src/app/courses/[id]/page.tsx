'use client';

import React, { use, useState, useEffect } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { ArrowLeft, Clock, BookOpen, Code, Layers, ChevronDown, ChevronUp, CheckCircle2, Zap, Gift, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { courses, SHARED_BENEFITS } from '@/data/courses';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import styles from './course-details.module.css';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const courseId = parseInt(resolvedParams.id, 10);
  const course = courses.find((c) => c.id === courseId);
  
  const [openWeek, setOpenWeek] = useState<number | null>(0);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { addToCart, cart } = useCart();

  const isInCart = cart.some(c => c.id === courseId);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid, 'enrolledCourses', courseId.toString());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIsEnrolled(true);
        }
      }
    });
    return () => unsubscribe();
  }, [courseId]);

  if (!course) return notFound();

  return (
    <div className={styles.page}>
      <motion.button
        className={styles.backBtn}
        onClick={() => router.push('/courses')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ArrowLeft size={16} /> Back to Courses
      </motion.button>

      {/* Hero */}
      <motion.div
        className={`liquid-glass-strong ${styles.hero}`}
        style={{
          background: `linear-gradient(135deg, ${course.color}18 0%, rgba(255,255,255,0.05) 100%)`,
          borderLeft: `4px solid ${course.color}`,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.category} style={{ color: course.color }}>{course.category}</span>
        <h1 className={styles.title}>{course.title}</h1>
        <p className={styles.description}>{course.description}</p>
        <div className={styles.meta}>
          <span className={styles.pill}><Clock size={14} color={course.color} /> {course.duration}</span>
        </div>
      </motion.div>

      <div className={styles.contentGrid}>

        {/* Left Column */}
        <div className={styles.mainCol}>
          {/* What You'll Learn */}
          <motion.div
            className={`liquid-glass ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className={styles.sectionTitle}>
              <Zap size={20} color={course.color} /> What You'll Learn
            </h2>
            <ul className={styles.learnList}>
              {course.whatYouLearn.map((item, i) => (
                <li key={i} className={styles.learnItem}>
                  <CheckCircle2 size={16} color={course.color} className={styles.learnIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Curriculum */}
          <motion.div
            className={`liquid-glass ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className={styles.sectionTitle}>
              <Layers size={20} color={course.color} /> Full Curriculum
            </h2>
            <div className={styles.syllabusList}>
              {course.syllabus.map((item, i) => (
                <div key={i} className={styles.syllabusModule}>
                  <button
                    className={styles.moduleHeader}
                    onClick={() => setOpenWeek(openWeek === i ? null : i)}
                    style={{ borderLeft: `3px solid ${openWeek === i ? course.color : 'transparent'}` }}
                  >
                    <div className={styles.moduleLeft}>
                      <span className={styles.week} style={{ color: course.color }}>{item.week}</span>
                      <span className={styles.moduleTopic}>{item.topic}</span>
                    </div>
                    {openWeek === i
                      ? <ChevronUp size={16} style={{ opacity: 0.5, flexShrink: 0 }} />
                      : <ChevronDown size={16} style={{ opacity: 0.4, flexShrink: 0 }} />
                    }
                  </button>

                  <AnimatePresence initial={false}>
                    {openWeek === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className={styles.moduleBody}
                      >
                        <ul className={styles.subtopicList}>
                          {item.subtopics.map((s, si) => (
                            <li key={si} className={styles.subtopic}>
                              <span className={styles.subtopicDot} style={{ background: course.color }} />
                              {s}
                            </li>
                          ))}
                        </ul>
                        {item.project && (
                          <div className={styles.projectBadge} style={{ borderColor: `${course.color}40`, background: `${course.color}10` }}>
                            <span style={{ color: course.color, fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Project</span>
                            <p className={styles.projectText}>{item.project}</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Side Column */}
        <motion.div
          className={styles.sideCol}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={`liquid-glass-strong ${styles.card}`}>
            {!isEnrolled && (
              <div className={styles.pricingBlock}>
                <h3 className={styles.priceTag}>₹{course.price.toLocaleString('en-IN')}</h3>
                <p className={`${styles.priceSub} theme-text-faint`}>6-month intensive access</p>
              </div>
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {isEnrolled ? (
                <Link href={`/learn/${id}`} className={`${styles.actionBtn} ${styles.enrolledBtn}`}>
                  <Check size={18} /> Resume Learning
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => {
                      if (!isInCart) addToCart(course);
                      router.push('/checkout');
                    }}
                    className={`${styles.actionBtn}`}
                    style={{ background: '#111827', color: 'white' }}
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(course)}
                    disabled={isInCart}
                    className={`${styles.actionBtn} ${styles.cartAddBtn}`}
                  >
                    <ShoppingBag size={18} />
                    {isInCart ? 'In Bag' : 'Add to Bag'}
                  </button>
                </>
              )}
              <Link href="/playground" style={{ textDecoration: 'none' }}>
                <button className={`${styles.actionBtn} ${styles.ideBtn}`}>
                  <Code size={18} /> Launch IDE
                </button>
              </Link>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statValue} style={{ color: course.color }}>{course.syllabus.length}</span>
                <span className={styles.statLabel}>Modules</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue} style={{ color: course.color }}>
                  {course.syllabus.filter(s => s.project).length}
                </span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue} style={{ color: course.color }}>{course.duration}</span>
                <span className={styles.statLabel}>Duration</span>
              </div>
            </div>

            {/* What You'll Get — Benefits sticky in sidebar */}
            <div className={styles.benefitsDivider} />
            <h2 className={styles.sectionTitle} style={{ marginBottom: '0.75rem' }}>
              <Gift size={18} color={course.color} /> What You'll Get
            </h2>
            <ul className={styles.learnList}>
              {SHARED_BENEFITS.map((item, i) => (
                <li key={i} className={styles.benefitItem}>
                  <CheckCircle2 size={14} color={course.color} className={styles.benefitIcon} />
                  <span className={styles.benefitText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
