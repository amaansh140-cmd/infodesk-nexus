import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Award,
  BookOpen,
  Presentation,
  Users,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Lightbox from '../components/Lightbox';

const steps = [
  {
    num: 1,
    title: 'Learn',
    desc: 'Foundational concepts and architecture delivered interactively in small, focused batches with dedicated industrial faculty.',
  },
  {
    num: 2,
    title: 'Build',
    desc: 'Every topic is practiced in the lab through real code, live data pipelines, creative layouts, or accounting balance sheets.',
  },
  {
    num: 3,
    title: 'Review',
    desc: 'One-on-one code reviews and assignment feedback ensure errors are caught early and best industry standards are internalized.',
  },
  {
    num: 4,
    title: 'Showcase',
    desc: 'Capstones, client campaigns, or analytical dashboards are assembled into a verified portfolio ready for hiring teams.',
  },
];

const globalCertificates = [
  {
    id: 'powerbi',
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/microsoft-powerbi.jpg',
    issuer: 'Microsoft',
    desc: 'Demonstrating methods and best practices for modeling, visualizing, and analyzing data with Microsoft Power BI.',
  },
  {
    id: 'snowflake',
    title: 'Snowflake SnowPro Core Certified',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/snowflake-snowpro.jpg',
    issuer: 'Snowflake',
    desc: 'Demonstrated knowledge to apply specific core expertise implementing and migrating to Snowflake cloud data warehouse.',
  },
  {
    id: 'alteryx-server',
    title: 'Alteryx Server Implementation',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/alteryx-server.jpg',
    issuer: 'Alteryx',
    desc: 'Successfully completed the Server Implementation exam covering enterprise scaling and automation.',
  },
  {
    id: 'alteryx-designer',
    title: 'Alteryx Designer Advanced',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/alteryx-designer.jpg',
    issuer: 'Alteryx',
    desc: 'Advanced workflow development, spatial data manipulation, and automated analytics macros.',
  },
  {
    id: 'google-digital-garage',
    title: 'Google Digital Garage - Fundamentals of Digital Marketing',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/google-digital-garage.jpg',
    issuer: 'Google Digital Garage',
    desc: 'Mastery of digital marketing concepts accredited by the Interactive Advertising Bureau Europe.',
  },
];

const collegeSeminars = [
  {
    id: 'sem-1',
    image: '/assets/seminars/seminar-1.jpg',
    title: 'College IT Tech Workshop',
    desc: 'Conducting practical sessions for students on data skills and career paths.',
  },
  {
    id: 'sem-2',
    image: '/assets/seminars/seminar-2.jpg',
    title: 'Faculty Interactive Guidance',
    desc: 'Hands-on live problem solving with undergraduates.',
  },
  {
    id: 'sem-3',
    image: '/assets/seminars/seminar-3.jpg',
    title: 'Industry Career Orientation',
    desc: 'Introducing emerging frameworks in web engineering and digital analytics.',
  },
  {
    id: 'sem-aud',
    image: '/assets/seminars/seminar-audience.jpg',
    title: 'Large-Scale Campus Seminars',
    desc: 'Engaging packed auditoriums across leading Mumbai institutions.',
  },
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ─── HEADER ─── */}
      <section className="bg-soft/60 border-b border-line/60 py-16 sm:py-24">
        <div className="max-w-content mx-auto px-6 max-w-3xl text-center">
          <h1 className="text-[clamp(36px,5.2vw,64px)] font-bold text-deep tracking-tight">
            An institute for people who learn by building.
          </h1>
          <p className="text-muted text-lg sm:text-[19px] mt-4 leading-relaxed max-w-2xl mx-auto">
            Infodesk Computer Education provides practical, project-focused training in Mumbai, preparing students and working professionals for competitive technology careers.
          </p>
        </div>
      </section>

      {/* ─── HOW EVERY COURSE RUNS (4-STEP SEQUENCE) ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-[clamp(32px,4.4vw,48px)] font-bold text-deep">
              How every course runs.
            </h2>
            <p className="text-muted text-base mt-2">
              A proven four-step educational sequence designed for deep skill retention and real workplace execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-surface border border-line/80 rounded-card p-6 shadow-card hover:border-primary/40 transition-colors relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mb-5 shadow-signature">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-deep mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-line/40 text-xs font-semibold text-primary">
                  Step {step.num} of 4
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── RECOGNITION & CERTIFICATION ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-surface border border-line/80 rounded-panel p-8 sm:p-12 shadow-card">
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-deep">
                Recognized and certified standards.
              </h2>
              <p className="text-muted text-sm sm:text-base mt-2 leading-relaxed">
                Infodesk adheres to stringent national and global quality standards for technical education delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-background border border-line/70">
                <ShieldCheck className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-deep text-base">Govt. Recognized</h4>
                <p className="text-muted text-xs sm:text-sm mt-1 leading-relaxed">
                  Registered vocational training board operating under government regulatory compliance for practical computer education.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background border border-line/70">
                <CheckCircle className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-deep text-base">ISO 9001:2015 Certified Board</h4>
                <p className="text-muted text-xs sm:text-sm mt-1 leading-relaxed">
                  Quality management system certification assuring audited curriculum quality, trainer competence, and student satisfaction.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-background border border-line/70">
                <Award className="text-primary mb-3" size={28} />
                <h4 className="font-bold text-deep text-base">Skill India &amp; MSME</h4>
                <p className="text-muted text-xs sm:text-sm mt-1 leading-relaxed">
                  Aligned with national workforce enhancement missions under the Ministry of Micro, Small and Medium Enterprises.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── AWARD BY ASHNEER GROVER ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-[#101f5c] text-white rounded-band p-8 sm:p-14 shadow-signature">
            <div className="max-w-3xl mb-10 space-y-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20">
                National Honor
              </span>
              <h2 className="text-[clamp(30px,4.2vw,48px)] font-bold text-white tracking-tight">
                Our institution was honored with India's Best Institute award by Ashneer Grover.
              </h2>
              <p className="text-white/80 text-base leading-relaxed">
                In recognition of outstanding dedication to quality computer education, curriculum relevance, and job placement assistance, Infodesk Computer Education was presented this national title.
              </p>
            </div>

            {/* Gallery of Award Moments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div
                className="group relative rounded-2xl overflow-hidden border border-white/20 cursor-pointer shadow-lg bg-black/20"
                onClick={() =>
                  setSelectedImage({
                    image: '/assets/awards/ashneer-award-main.jpg',
                    title: "India's Best Institute Award",
                    caption: 'Presented by Ashneer Grover to Infodesk Computer Education leadership',
                  })
                }
              >
                <img
                  src="/assets/awards/ashneer-award-main.jpg"
                  alt="Ashneer Grover presenting the award"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs font-semibold text-white">Award presentation on stage</p>
                </div>
              </div>

              <div
                className="group relative rounded-2xl overflow-hidden border border-white/20 cursor-pointer shadow-lg bg-black/20"
                onClick={() =>
                  setSelectedImage({
                    image: '/assets/awards/ashneer-award-1.jpg',
                    title: 'National Award Stage Ceremony',
                    caption: 'Honored with India’s Best Institute Award',
                  })
                }
              >
                <img
                  src="/assets/awards/ashneer-award-1.jpg"
                  alt="Award ceremony stage celebration"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs font-semibold text-white">Stage ceremony with dignitaries</p>
                </div>
              </div>

              <div
                className="group relative rounded-2xl overflow-hidden border border-white/20 cursor-pointer shadow-lg bg-black/20"
                onClick={() =>
                  setSelectedImage({
                    image: '/assets/awards/ashneer-award-3.jpg',
                    title: 'Award Trophy & Recognition',
                    caption: 'Celebrating student and institutional achievements',
                  })
                }
              >
                <img
                  src="/assets/awards/ashneer-award-3.jpg"
                  alt="Award celebration photo"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs font-semibold text-white">Institutional milestone</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── GLOBAL CERTIFICATIONS (KAREEM SHAH) ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(32px,4.4vw,48px)] font-bold text-deep">
              Achieved global certification.
            </h2>
            <p className="text-muted text-base mt-2">
              Our leadership and senior training faculty hold prestigious global credentials. Click any certificate to inspect full credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalCertificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() =>
                  setSelectedImage({
                    image: cert.image,
                    title: cert.title,
                    caption: `Recipient: ${cert.recipient} • Issued by ${cert.issuer}`,
                  })
                }
                className="bg-surface border border-line/80 rounded-card p-5 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-xl overflow-hidden border border-line/60 bg-background mb-4 h-48 flex items-center justify-center p-2">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-bold text-primary">{cert.issuer}</span>
                  <h3 className="text-base font-bold text-deep mt-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-ink/80 mt-1">
                    Certified Professional: <span className="text-deep font-bold">{cert.recipient}</span>
                  </p>
                  <p className="text-xs text-muted mt-2 leading-relaxed">{cert.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>View certificate</span>
                  <ExternalLink size={13} />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── SEMINARS IN COLLEGES ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(32px,4.4vw,48px)] font-bold text-deep">
              Seminars in colleges.
            </h2>
            <p className="text-muted text-base mt-2">
              Empowering college campuses across Mumbai through hands-on technical workshops and career awareness sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {collegeSeminars.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  setSelectedImage({
                    image: item.image,
                    title: item.title,
                    caption: item.desc,
                  })
                }
                className="bg-surface border border-line/80 rounded-2xl overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="h-48 overflow-hidden bg-background">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-deep text-sm">{item.title}</h4>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={Boolean(selectedImage)}
        image={selectedImage?.image}
        title={selectedImage?.title}
        caption={selectedImage?.caption}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
