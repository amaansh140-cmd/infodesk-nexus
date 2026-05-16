'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, ExternalLink, Play, X, CheckCircle2, User, BookOpen, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from './contact.module.css';

const branches = [
  {
    number: 'Branch 01',
    name: 'Goregaon West — Shashtri Nagar',
    area: 'Shop No. 10, Aum Heights, Rohini CHS, Behind Bangur Nagar Metro Station, Shashtri Nagar',
    city: 'Goregaon West, Mumbai — 400104',
    phone: '+91 97694 45334',
    email: 'info@infodeskcompedu.com',
    whatsapp: '919769445334',
    mapQuery: 'Infodesk+Computer+Education+Shastri+Nagar+Goregaon+West+Mumbai',
    mapsLink: 'https://maps.google.com/maps?q=Infodesk+Computer+Education+Shastri+Nagar+Goregaon+West+Mumbai',
  },
  {
    number: 'Branch 02',
    name: 'Jogeshwari West — SV Road',
    area: 'Near S.V. Road, Sabri Masjid, Jogeshwari West',
    city: 'Mumbai, Maharashtra',
    phone: '+91 86527 78432',
    email: 'info@infodeskcompedu.com',
    whatsapp: '918652778432',
    mapQuery: 'Infodesk+Computer+Education+SV+Road+Jogeshwari+West+Mumbai',
    mapsLink: 'https://maps.google.com/maps?q=Infodesk+Computer+Education+SV+Road+Jogeshwari+West+Mumbai',
  },
  {
    number: 'Branch 03',
    name: 'Goregaon West — Jawahar Nagar',
    area: 'Jawahar Nagar, Goregaon West',
    city: 'Mumbai, Maharashtra',
    phone: '+91 97694 45334',
    email: 'info@infodeskcompedu.com',
    whatsapp: '919769445334',
    mapQuery: 'Infodesk+Computer+Education+Jawahar+Nagar+Goregaon+West+Mumbai',
    mapsLink: 'https://maps.google.com/maps?q=Infodesk+Computer+Education+Jawahar+Nagar+Goregaon+West+Mumbai',
  },
  {
    number: 'Branch 04',
    name: 'Jogeshwari West — Behram Baug',
    area: 'Behram Baug, Jogeshwari West',
    city: 'Mumbai, Maharashtra',
    phone: '+91 93727 99843',
    email: 'info@infodeskcompedu.com',
    whatsapp: '919372799843',
    mapQuery: 'Infodesk+Computer+Education+Behram+Baug+Jogeshwari+West+Mumbai',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5!2d72.8497!3d19.1415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6b9dd3c0000%3A0x9452514b2978c772!2sInfodesk%20Computer%20Education%20Behram%20Baug!5e0!3m2!1sen!2sin!4v1',
    mapsLink: 'https://share.google/85jcfozuVfa18Xr14',
  },
];

const courseOptions = [
  'Data Science', 'Advanced Python', 'Prompt Engineering', 'Digital Marketing',
  'Full Stack Development', 'Core Java', 'Tally & Excel', 'DCA Diploma',
  'Graphics Design', 'C / C++', 'Other',
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface ModalState {
  open: boolean;
  branch: typeof branches[0] | null;
}

export default function ContactPage() {
  const [modal, setModal] = useState<ModalState>({ open: false, branch: null });
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const openModal = (branch: typeof branches[0]) => {
    setForm({ name: '', phone: '', email: '', course: '' });
    setSuccess(false);
    setModal({ open: true, branch });
  };

  const closeModal = () => setModal({ open: false, branch: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modal.branch) return;
    setSubmitting(true);

    // Build WhatsApp message first
    const message =
      `🎓 *New Enrollment Request*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email}\n` +
      `*Course:* ${form.course}\n` +
      `*Branch:* ${modal.branch.name} (${modal.branch.number})\n\n` +
      `_Submitted via Infodesk Nexus website_`;
    const whatsappUrl = `https://wa.me/${modal.branch.whatsapp}?text=${encodeURIComponent(message)}`;

    // Try to save to Firestore (non-blocking — won't stop WhatsApp redirect)
    try {
      await addDoc(collection(db, 'enrollmentRequests'), {
        ...form,
        branch: modal.branch.name,
        branchNumber: modal.branch.number,
        submittedAt: serverTimestamp(),
        status: 'pending',
      });
    } catch (err) {
      console.warn('Firestore write failed (check security rules):', err);
    }

    // Always open WhatsApp and show success
    window.open(whatsappUrl, '_blank');
    setSuccess(true);
    setSubmitting(false);
  };

  return (
    <div className={styles.page}>
      {/* ---- Hero ---- */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.eyebrow}><MapPin size={12} /> Our Locations</div>
        <h1 className={styles.title}>
          Find Your Nearest <br />
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Infodesk</span> Centre
        </h1>
        <p className={styles.subtitle}>
          With four conveniently located branches across Mumbai, quality education is always close to home.
        </p>
      </motion.div>

      {/* ---- Branch Cards ---- */}
      <div className={styles.grid}>
        {branches.map((branch, i) => (
          <motion.div
            key={branch.number}
            className={`liquid-glass ${styles.card}`}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className={styles.mapWrap}>
              <iframe
                title={branch.name}
                src={(branch as any).mapEmbed ?? `https://maps.google.com/maps?q=${branch.mapQuery}&output=embed`}
                className={styles.mapFrame}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={branch.mapsLink} target="_blank" rel="noopener noreferrer" className={styles.mapOverlayBtn}>
                <ExternalLink size={14} /> Open in Maps
              </a>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}><MapPin size={20} /></div>
                <div>
                  <div className={styles.cardNumber}>{branch.number}</div>
                  <div className={styles.cardName}>{branch.name}</div>
                </div>
              </div>

              <div className={styles.divider} />

              <div className={styles.infoList}>
                <div className={styles.infoRow}>
                  <Navigation size={14} className={styles.infoIcon} />
                  <div>
                    <div className={styles.infoLabel}>Address</div>
                    <div className={styles.infoText}>{branch.area}<br />{branch.city}</div>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <Phone size={14} className={styles.infoIcon} />
                  <div>
                    <div className={styles.infoLabel}>Phone</div>
                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className={styles.infoText}>{branch.phone}</a>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <Mail size={14} className={styles.infoIcon} />
                  <div>
                    <div className={styles.infoLabel}>Email</div>
                    <a href={`mailto:${branch.email}`} className={styles.infoText}>{branch.email}</a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openModal(branch)}
                className={`liquid-glass-strong hover-scale ${styles.enrollBtn}`}
              >
                <Play size={14} fill="currentColor" />
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>



      {/* ---- Enrollment Modal ---- */}
      <AnimatePresence>
        {modal.open && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Modal Panel */}
            <motion.div
              className={`liquid-glass-strong ${styles.modal}`}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button className={styles.modalClose} onClick={closeModal}>
                <X size={18} />
              </button>

              {!success ? (
                <>
                  {/* Header */}
                  <div className={styles.modalHeader}>
                    <div className={styles.modalIconWrap}>
                      <BookOpen size={22} />
                    </div>
                    <div>
                      <p className={styles.modalBranchTag}>{modal.branch?.number}</p>
                      <h2 className={styles.modalTitle}>Enroll at {modal.branch?.name}</h2>
                      <p className={styles.modalSub}>Fill in your details and we'll get back to you within 24 hours.</p>
                    </div>
                  </div>

                  <div className={styles.modalDivider} />

                  {/* Form */}
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Full Name</label>
                      <div className={styles.inputWrap}>
                        <User size={15} className={styles.inputIcon} />
                        <input
                          type="text"
                          placeholder="John Doe"
                          className={styles.input}
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone Number</label>
                        <div className={styles.inputWrap}>
                          <Phone size={15} className={styles.inputIcon} />
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            className={styles.input}
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email Address</label>
                        <div className={styles.inputWrap}>
                          <Mail size={15} className={styles.inputIcon} />
                          <input
                            type="email"
                            placeholder="you@example.com"
                            className={styles.input}
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Course of Interest</label>
                      <div className={styles.inputWrap}>
                        <BookOpen size={15} className={styles.inputIcon} />
                        <select
                          className={styles.input}
                          value={form.course}
                          onChange={e => setForm({ ...form, course: e.target.value })}
                          required
                        >
                          <option value="" disabled>Select a course...</option>
                          {courseOptions.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <ChevronDown size={15} className={styles.selectChevron} />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className={styles.submitBtn}
                    >
                      {submitting ? 'Submitting...' : 'Submit Enrollment Request'}
                    </button>
                  </form>
                </>
              ) : (
                /* Success State */
                <motion.div
                  className={styles.successState}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.successIcon}>
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className={styles.successTitle}>Request Submitted!</h2>
                  <p className={styles.successSub}>
                    Thank you, <strong>{form.name}</strong>! We've received your enrollment request for <strong>{modal.branch?.name}</strong>. Our team will contact you at <strong>{form.phone}</strong> within 24 hours.
                  </p>
                  <button className={styles.submitBtn} onClick={closeModal}>
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
