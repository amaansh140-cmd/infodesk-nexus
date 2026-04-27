'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Lock, CheckCircle2 } from 'lucide-react';
import styles from './checkout.module.css';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    if (cart.length === 0 && !success) {
      const timer = setTimeout(() => {
        router.push('/courses');
      }, 500);
      return () => clearTimeout(timer);
    }

    return () => unsubscribe();
  }, [cart.length, router, success]);

  const handleEnrollment = async () => {
    if (!user) return;
    try {
      for (const course of cart) {
        const enrollmentRef = doc(db, 'users', user.uid, 'enrolledCourses', course.id.toString());
        await setDoc(enrollmentRef, {
          courseId: course.id,
          title: course.title,
          category: course.category,
          color: course.color,
          enrolledAt: serverTimestamp(),
          progress: 0,
          lastAccessed: serverTimestamp()
        });
      }
      setSuccess(true);
      clearCart();
      setTimeout(() => router.push('/dashboard'), 2500);
    } catch (error) {
      console.error("Enrollment failed:", error);
    }
  };

  const handlePayment = async () => {
    if (!user) {
      router.push('/auth');
      return;
    }

    setProcessing(true);

    try {
      // 1. Create a Razorpay Order through our API
      const orderRes = await fetch('/api/razorpay/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalPrice }),
      });

      const orderData = await orderRes.json();

      if (orderData.error) throw new Error(orderData.error);

      // 2. Open Razorpay Checkout Modal
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Infodesk Nexus",
        description: `Enrollment for ${cart.length} Program(s)`,
        order_id: orderData.id,
        handler: async (response: any) => {
          // 3. Verify Payment Signature
          const verifyRes = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            await handleEnrollment();
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: user.displayName || "",
          email: user.email || "",
          contact: ""
        },
        theme: { color: "#111827" },
        modal: {
          ondismiss: () => {
            setProcessing(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error: any) {
      console.error("Payment initialization failed:", error);
      alert("Checkout failed: " + error.message);
      setProcessing(false);
    }
  };

  if (cart.length === 0 && !success) {
    return (
      <div className={styles.page}>
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p className="theme-text-muted">Your shopping bag is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Secure Checkout
      </motion.h1>

      <div className={styles.layout}>
        {/* Program Review Section */}
        <div className={styles.mainCol}>
          <motion.div 
            className={`liquid-glass ${styles.section}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className={styles.sectionTitle}>Review Your Programs</h2>
            <div className={styles.itemsList}>
              {cart.map((item, idx) => (
                <motion.div 
                  key={item.id} 
                  className={styles.item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className={styles.itemIcon} style={{ background: `${item.color}15`, color: item.color }}>
                    <GraduationCap size={24} />
                  </div>
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.title}</p>
                    <p className={styles.itemCategory}>{item.category}</p>
                  </div>
                  <span className={styles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Summary & Payment Action Section */}
        <div className={styles.sideCol}>
          <motion.div 
            className={`liquid-glass-strong ${styles.section}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className={styles.sectionTitle}>Order Summary</h2>
            <div className={styles.summaryHeader}>
              <div className={styles.summaryRow}>
                <span>Tuition Fees ({cart.length} Courses)</span>
                <span>₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Platform Maintenance</span>
                <span>FREE</span>
              </div>
              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Total Payable</span>
                <span className={styles.totalAmount}>₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button 
              className={styles.payBtn} 
              onClick={handlePayment}
              disabled={processing || cart.length === 0}
            >
              <Lock size={18} />
              {user ? 'Authorize & Pay' : 'Sign in to Pay'}
            </button>
            
            <p className="theme-text-faint" style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '1.25rem', lineHeight: '1.5' }}>
              Your payment information is encrypted and never stored on our servers. 
              By paying, you agree to our Terms of Service.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Payment Processing & Success Modal Overlay */}
      <AnimatePresence mode="wait">
        {(processing || success) && (
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={`liquid-glass-strong ${styles.paymentCard}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={styles.successIcon}>
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 style={{ marginBottom: '0.75rem', color: '#111827' }}>Enrollment Confirmed!</h2>
                  <p className="theme-text-muted" style={{ fontSize: '0.9375rem' }}>
                    Welcome to the academy. We're setting up your student dashboard...
                  </p>
                </motion.div>
              ) : (
                <div style={{ padding: '1rem 0' }}>
                  <motion.div 
                    className={styles.loader}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <h2 style={{ marginBottom: '0.75rem', color: '#111827' }}>Securing Transaction</h2>
                  <p className="theme-text-muted" style={{ fontSize: '0.9375rem' }}>
                    Please wait while we authorize your payment with the bank...
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
