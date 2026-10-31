import React, { useState } from 'react';
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
} from 'lucide-react';
import { branches, headOffice } from '../data/branches';
import { courses } from '../data/courses';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const timeSlots = [
  { id: 'morning', label: 'Morning (8am–12pm)' },
  { id: 'afternoon', label: 'Afternoon (12pm–4pm)' },
  { id: 'evening', label: 'Evening (4pm–8pm)' },
  { id: 'weekend', label: 'Weekend Batches' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'goregaon-west',
    course: 'Data Science',
    slot: 'Morning (8am–12pm)',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Central submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your full name';
    }

    const phoneRegex = /^[0-9+ -]{10,14}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Find destination branch and phone
    const targetBranch =
      branches.find((b) => b.id === formData.branch) || branches[0];
    const destinationPhone = targetBranch.primaryPhoneRaw;

    const prefilledText = encodeURIComponent(
      `Hello Infodesk Computer Education (${targetBranch.name} branch),\nMy name is ${formData.name}.\nI would like to inquire about the ${formData.course} course (${formData.slot}) and book a free demo session.\nMy phone number is ${formData.phone}.`
    );

    // Deep link to WhatsApp
    const whatsappUrl = `https://wa.me/${destinationPhone}?text=${prefilledText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
  };

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

      {/* ─── ENQUIRY FORM (DEEP BLUE PANEL WITH FLOATING LABELS) ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-deep text-white rounded-band p-8 sm:p-14 shadow-signature relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-bright/15 blur-3xl pointer-events-none" />

            <div className="mb-8 space-y-2 relative z-10">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20">
                Direct Counseling
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Book your free demo class.
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Fill out the details below. Our career advisors will connect with batch options and trigger an instant WhatsApp confirmation.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-100 flex items-start gap-4 animate-in fade-in">
                <CheckCircle2 size={24} className="text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base">Enquiry Sent Successfully!</h4>
                  <p className="text-sm text-emerald-200">
                    A WhatsApp chat window has been opened with our branch coordinator. We will assist you with batch timings and demo schedules right away.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        branch: 'goregaon-west',
                        course: 'Data Science',
                        slot: 'Morning (8am–12pm)',
                      });
                    }}
                    className="text-xs text-white underline mt-2 inline-block font-semibold"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                {/* Name field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder=" "
                    className={`block w-full px-4 pt-6 pb-2 text-base text-white bg-white/10 border ${
                      formErrors.name ? 'border-rose-400' : 'border-white/20'
                    } rounded-xl focus:border-bright focus:outline-none focus:ring-1 focus:ring-bright peer`}
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-white/70 duration-200 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-bright"
                  >
                    Your full name
                  </label>
                  {formErrors.name && (
                    <p className="text-xs text-rose-300 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Phone field */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder=" "
                    className={`block w-full px-4 pt-6 pb-2 text-base text-white bg-white/10 border ${
                      formErrors.phone ? 'border-rose-400' : 'border-white/20'
                    } rounded-xl focus:border-bright focus:outline-none focus:ring-1 focus:ring-bright peer`}
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-white/70 duration-200 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 peer-focus:text-bright"
                  >
                    Mobile / WhatsApp number
                  </label>
                  {formErrors.phone && (
                    <p className="text-xs text-rose-300 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Dropdowns row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Branch */}
                  <div className="space-y-1.5">
                    <label htmlFor="branch" className="block text-xs font-semibold text-white/80">
                      Preferred Mumbai branch
                    </label>
                    <select
                      id="branch"
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-4 py-3 bg-[#18296e] border border-white/20 rounded-xl text-white text-sm focus:border-bright focus:outline-none focus:ring-1 focus:ring-bright cursor-pointer"
                    >
                      {branches.map((b) => (
                        <option key={b.id} value={b.id} className="bg-deep text-white">
                          {b.name} ({b.locality})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Course Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="course" className="block text-xs font-semibold text-white/80">
                      Course of interest
                    </label>
                    <select
                      id="course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 bg-[#18296e] border border-white/20 rounded-xl text-white text-sm focus:border-bright focus:outline-none focus:ring-1 focus:ring-bright cursor-pointer"
                    >
                      {courses.map((c) => (
                        <option key={c.slug} value={c.title} className="bg-deep text-white">
                          {c.title} ({c.duration})
                        </option>
                      ))}
                      <option value="Customised course" className="bg-deep text-white">
                        Customised course
                      </option>
                    </select>
                  </div>
                </div>

                {/* Preferred Batch Timing Pills */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80">
                    Preferred batch timing
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = formData.slot === slot.label;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, slot: slot.label })}
                          className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-center cursor-pointer ${
                            isSelected
                              ? 'bg-bright text-white font-bold border border-white/40 shadow-sm'
                              : 'bg-white/10 text-white/70 hover:bg-white/15 border border-white/10'
                          }`}
                        >
                          {slot.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <Button type="submit" size="lg" variant="white" className="w-full" icon={<Send size={16} />}>
                    Submit and connect on WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── MUMBAI BRANCHES SECTION ─── */}
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
                <h4 className="font-bold text-deep text-lg">{headOffice.name}</h4>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-soft text-primary">
                  {headOffice.designation}
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
                <span>Call Head Office</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
