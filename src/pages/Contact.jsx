import React, { useState, useRef, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Mail,
  Globe,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { branches, headOffice } from '../data/branches';
import { courses } from '../data/courses';
import Stepper, { Step } from '../components/Stepper';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: courses[0]?.title || 'Data Science',
    branch: 'goregaon-west',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field refs for autofocus on step changes
  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const courseSelectRef = useRef(null);
  const branchContainerRef = useRef(null);

  // Validate step 1 fields
  const cleanPhone = formData.phone.replace(/[\s-]/g, '');
  const isNameValid = formData.name.trim().length >= 2;
  const isPhoneValid = /^[6-9]\d{9}$/.test(cleanPhone);

  const isStep1Valid = isNameValid && isPhoneValid;
  const isStep2Valid = Boolean(formData.course.trim());
  const isStep3Valid = Boolean(formData.branch);

  const isCurrentStepValid =
    currentStep === 1 ? isStep1Valid : currentStep === 2 ? isStep2Valid : isStep3Valid;

  // Autofocus first field of each active step
  useEffect(() => {
    if (currentStep === 1) {
      if (!formData.name) {
        nameInputRef.current?.focus();
      } else {
        phoneInputRef.current?.focus();
      }
    } else if (currentStep === 2) {
      courseSelectRef.current?.focus();
    } else if (currentStep === 3) {
      const selectedRadio = branchContainerRef.current?.querySelector('input[type="radio"]:checked');
      if (selectedRadio) {
        selectedRadio.focus();
      } else {
        branchContainerRef.current?.querySelector('input[type="radio"]')?.focus();
      }
    }
  }, [currentStep]);

  // Real-time inline field validation on change/blur
  const validateField = (field, value) => {
    let err = '';
    if (field === 'name') {
      if (!value.trim()) {
        err = 'Please enter your full name';
      } else if (value.trim().length < 2) {
        err = 'Name must be at least 2 characters';
      }
    }
    if (field === 'phone') {
      const clean = value.replace(/[\s-]/g, '');
      if (!clean) {
        err = 'Please enter your 10-digit mobile number';
      } else if (!/^[6-9]/.test(clean)) {
        err = 'Indian mobile numbers start with 6, 7, 8 or 9';
      } else if (clean.length !== 10) {
        err = 'Mobile number must be exactly 10 digits';
      }
    }
    setFormErrors((prev) => ({ ...prev, [field]: err }));
  };

  // Keyboard navigation: Enter key advances through steps or submits
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentStep === 1) {
        setTouched({ name: true, phone: true });
        validateField('name', formData.name);
        validateField('phone', formData.phone);
        if (isStep1Valid) setCurrentStep(2);
      } else if (currentStep === 2) {
        if (isStep2Valid) setCurrentStep(3);
      } else if (currentStep === 3) {
        if (isStep3Valid) handleEnquirySubmit();
      }
    }
  };

  // Central submission handler - opens WhatsApp and transitions to completed state
  const handleEnquirySubmit = () => {
    const targetBranch = branches.find((b) => b.id === formData.branch) || branches[0];
    const destinationPhone = targetBranch.primaryPhoneRaw;

    const message = [
      `*New Enquiry - Infodesk Computer Education*`,
      `Branch: ${targetBranch.name}`,
      `Name: ${formData.name.trim()}`,
      `Mobile: ${formData.phone.trim()}`,
      `Course: ${formData.course}`,
      `Request: I would like to book a free demo session and receive batch timings.`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${destinationPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const selectedBranchData = branches.find((b) => b.id === formData.branch) || branches[0];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ─── HEADER ─── */}
      <section className="bg-soft/60 border-b border-line/60 py-16 sm:py-24 relative overflow-hidden bg-grid-dots">
        <div className="max-w-content mx-auto px-6 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-line/80 text-xs font-semibold text-deep mb-4 shadow-sm">
            <Sparkles size={13} className="text-primary" />
            <span>Admissions & Counseling Desk</span>
          </div>
          <h1 className="text-[clamp(36px,5.2vw,64px)] font-bold text-deep tracking-tight">
            Let's find the right course for you.
          </h1>
          <p className="text-muted text-lg sm:text-[19px] mt-4 leading-relaxed max-w-2xl mx-auto">
            Reach out directly to any of our four Mumbai training centres, schedule a free counseling demo, or submit your query below.
          </p>
        </div>
      </section>

      {/* ─── ENQUIRY PANEL (DEEP BLUE PANEL WITH STEPPER) ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-deep text-white rounded-band p-8 sm:p-12 lg:p-14 shadow-signature relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-bright/15 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
              {/* Left Column: Heading, branch numbers, head office address */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20">
                    Direct Counseling
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                    Book your free demo class.
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    Connect directly with our branch mentors in three simple steps. We will schedule your interactive lab demo and send batch timings on WhatsApp.
                  </p>
                </div>

                {/* Branch Phone Numbers List */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                    Branch Admissions Direct Lines
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                    {branches.map((b) => (
                      <div
                        key={b.id}
                        className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl p-3 flex items-center justify-between transition-colors text-xs"
                      >
                        <div>
                          <span className="font-bold text-white block">{b.name}</span>
                          <span className="text-white/70 text-[11px]">{b.locality}</span>
                        </div>
                        <a
                          href={`tel:${b.primaryPhoneRaw}`}
                          className="font-mono text-white/95 font-semibold hover:text-bright flex items-center gap-1 text-[11px]"
                        >
                          <Phone size={11} className="text-bright" />
                          <span>{b.primaryPhone}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Head Office Address */}
                <div className="pt-2 border-t border-white/15 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                    <Building size={13} className="text-bright" />
                    <span>Head Office Address</span>
                  </p>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {headOffice.address}
                  </p>
                  <p className="text-xs text-white/70 font-mono">
                    Phone: {headOffice.phone}
                  </p>
                </div>
              </div>

              {/* Right Column: 3-Step Stepper Component */}
              <div className="lg:col-span-7 w-full max-w-[520px] mx-auto lg:mx-0">
                <div onKeyDown={handleKeyDown}>
                  <Stepper
                    theme="light"
                    accentColor="#2448c9"
                    radius={24}
                    indicator="numbers"
                    linear={true}
                    width="100%"
                    step={currentStep}
                    onStepChange={(s) => setCurrentStep(s)}
                    nextButtonText="Continue"
                    completeButtonText="Send on WhatsApp"
                    backButtonText="Back"
                    nextButtonProps={{
                      disabled: !isCurrentStepValid,
                      style: !isCurrentStepValid ? { opacity: 0.5, cursor: 'not-allowed' } : {},
                    }}
                    onFinalStepCompleted={handleEnquirySubmit}
                    completedContent={
                      <div className="p-6 sm:p-8 text-center space-y-4">
                        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                          <CheckCircle2 size={32} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xl font-bold text-deep">Enquiry Sent on WhatsApp!</h4>
                          <p className="text-sm text-muted max-w-sm mx-auto leading-relaxed">
                            A chat has been opened with the <strong>{selectedBranchData.name}</strong> counselor for <strong>{formData.course}</strong>.
                          </p>
                        </div>

                        {/* Call us instead link */}
                        <div className="pt-4 border-t border-line/60 space-y-2">
                          <p className="text-xs text-muted">Prefer to talk right now?</p>
                          <a
                            href={`tel:${selectedBranchData.primaryPhoneRaw}`}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-deep text-white font-bold text-xs hover:bg-primary transition-colors shadow-sm"
                          >
                            <Phone size={13} />
                            <span>Call us instead: {selectedBranchData.primaryPhone}</span>
                          </a>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsSubmitted(false);
                              setCurrentStep(1);
                              setFormData({
                                name: '',
                                phone: '',
                                course: courses[0]?.title || 'Data Science',
                                branch: 'goregaon-west',
                              });
                              setTouched({ name: false, phone: false });
                              setFormErrors({ name: '', phone: '' });
                            }}
                            className="text-xs text-primary font-semibold hover:underline cursor-pointer"
                          >
                            Send another inquiry
                          </button>
                        </div>
                      </div>
                    }
                  >
                    {/* ─── STEP 1: YOUR DETAILS ─── */}
                    <Step title="Your details">
                      <div className="space-y-4 py-2">
                        <div>
                          <label
                            htmlFor="stepper-name"
                            className="block text-xs font-bold text-deep uppercase tracking-wider mb-1.5"
                          >
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            ref={nameInputRef}
                            type="text"
                            id="stepper-name"
                            value={formData.name}
                            onChange={(e) => {
                              const val = e.target.value;
                              setFormData({ ...formData, name: val });
                              if (touched.name) validateField('name', val);
                            }}
                            onBlur={() => {
                              setTouched((t) => ({ ...t, name: true }));
                              validateField('name', formData.name);
                            }}
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-ink bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                              touched.name && formErrors.name
                                ? 'border-rose-400 bg-rose-50/30'
                                : 'border-line hover:border-primary/40'
                            }`}
                          />
                          {touched.name && formErrors.name && (
                            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} /> {formErrors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="stepper-phone"
                            className="block text-xs font-bold text-deep uppercase tracking-wider mb-1.5"
                          >
                            Mobile / WhatsApp Number <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted font-mono select-none">
                              +91
                            </span>
                            <input
                              ref={phoneInputRef}
                              type="tel"
                              id="stepper-phone"
                              maxLength={10}
                              value={formData.phone}
                              onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                setFormData({ ...formData, phone: val });
                                if (touched.phone) validateField('phone', val);
                              }}
                              onBlur={() => {
                                setTouched((t) => ({ ...t, phone: true }));
                                validateField('phone', formData.phone);
                              }}
                              placeholder="9876543210"
                              className={`w-full pl-12 pr-4 py-2.5 rounded-xl border text-sm text-ink bg-surface font-mono focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                                touched.phone && formErrors.phone
                                  ? 'border-rose-400 bg-rose-50/30'
                                  : 'border-line hover:border-primary/40'
                              }`}
                            />
                          </div>
                          {touched.phone && formErrors.phone ? (
                            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1 font-medium">
                              <AlertCircle size={12} /> {formErrors.phone}
                            </p>
                          ) : (
                            <p className="text-[11px] text-muted mt-1">
                              Enter a valid 10-digit Indian mobile number.
                            </p>
                          )}
                        </div>
                      </div>
                    </Step>

                    {/* ─── STEP 2: WHAT DO YOU WANT TO LEARN? ─── */}
                    <Step title="What to learn">
                      <div className="space-y-4 py-2">
                        <label
                          htmlFor="stepper-course"
                          className="block text-xs font-bold text-deep uppercase tracking-wider mb-1"
                        >
                          Select Your Course of Interest
                        </label>
                        <select
                          ref={courseSelectRef}
                          id="stepper-course"
                          value={formData.course}
                          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-line bg-surface text-ink text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer shadow-sm"
                        >
                          {courses.map((c) => (
                            <option key={c.slug} value={c.title}>
                              {c.title} — ({c.duration}, {c.category})
                            </option>
                          ))}
                          <option value="Customised course">
                            Customised course (Personalized syllabus)
                          </option>
                        </select>
                        <p className="text-xs text-muted leading-relaxed">
                          All programs include hands-on lab sessions, mock interviews, and 100% placement assistance.
                        </p>
                      </div>
                    </Step>

                    {/* ─── STEP 3: PICK A BRANCH ─── */}
                    <Step title="Pick a branch">
                      <div ref={branchContainerRef} className="space-y-2.5 py-1">
                        <label className="block text-xs font-bold text-deep uppercase tracking-wider mb-1">
                          Choose Your Preferred Mumbai Training Centre
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {branches.map((b) => {
                            const isSelected = formData.branch === b.id;
                            return (
                              <label
                                key={b.id}
                                className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                                  isSelected
                                    ? 'border-primary bg-soft/60 shadow-sm'
                                    : 'border-line bg-surface hover:border-primary/40'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <input
                                    type="radio"
                                    name="branch"
                                    value={b.id}
                                    checked={isSelected}
                                    onChange={() => setFormData({ ...formData, branch: b.id })}
                                    className="text-primary focus:ring-primary cursor-pointer"
                                  />
                                  <div>
                                    <span className="font-bold text-deep block text-sm">
                                      {b.name}
                                    </span>
                                    <span className="text-muted text-[11px] block">
                                      {b.locality}
                                    </span>
                                  </div>
                                </div>
                                <span className="font-mono text-primary font-semibold text-[11px] bg-white px-2 py-1 rounded-md border border-line/60">
                                  {b.primaryPhone}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </Step>
                  </Stepper>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── MUMBAI BRANCHES DETAILED DIRECTORY ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(32px,4.4vw,48px)] font-bold text-deep">
              Four Mumbai branch centres.
            </h2>
            <p className="text-muted text-base mt-2">
              Walk in, meet our mentors, or speak directly with our admissions desk at any of our local facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch) => {
              const branchWhatsAppMsg = encodeURIComponent(branch.whatsappMessage);
              return (
                <div
                  key={branch.id}
                  className="bg-surface border border-line/80 rounded-panel p-7 shadow-card flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-soft text-primary">
                        {branch.locality}
                      </span>
                      <span className="text-xs text-muted font-medium flex items-center gap-1">
                        <Clock size={12} />
                        <span>Mon–Sat 8AM–9PM</span>
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-deep">{branch.name}</h3>

                    <p className="text-sm text-muted leading-relaxed flex items-start gap-2">
                      <MapPin size={16} className="text-primary mt-1 shrink-0" />
                      <span>{branch.address}</span>
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-line/50 space-y-3">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                      <a
                        href={`tel:${branch.primaryPhoneRaw}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-soft/70 hover:bg-soft text-primary font-bold text-xs transition-colors"
                      >
                        <Phone size={14} />
                        <span>Call {branch.primaryPhone}</span>
                      </a>
                      <a
                        href={`https://wa.me/${branch.primaryPhoneRaw}?text=${branchWhatsAppMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1e8343] font-bold text-xs transition-colors"
                      >
                        <MessageCircle size={14} />
                        <span>WhatsApp Branch</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── HEAD OFFICE & VERIFIED DIRECTORY ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-surface border border-line/80 rounded-panel p-8 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Building size={18} className="text-primary" />
                <h4 className="font-bold text-deep text-lg">{headOffice.title}</h4>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-soft text-primary">
                  Official Institute Campus
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted">
                Official Vocational Training Board: Registered and accredited across Greater Mumbai.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${headOffice.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-deep text-white text-xs font-bold hover:bg-primary transition-colors shadow-sm"
              >
                <Phone size={14} />
                <span>Call Head Office: {headOffice.phone}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
