import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Award,
  Sparkles,
  ExternalLink,
  BookOpen,
  Laptop,
  CheckSquare,
  Trophy,
  Image as ImageIcon,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Lightbox from '../components/Lightbox';
import Button from '../components/Button';
import ProfileCard from '../components/ProfileCard';
import {
  teamMembers,
  TEAM_WHATSAPP_NUMBER,
  TEAM_WHATSAPP_PREFILLED_MESSAGE,
} from '../data/team';

// Steps for "How every course runs"
const courseSteps = [
  {
    num: 1,
    title: 'Learn',
    desc: 'Core architecture and technical principles taught interactively in small, focused batches.',
    icon: BookOpen,
  },
  {
    num: 2,
    title: 'Build',
    desc: 'Daily hands-on lab work creating functional software, analytics pipelines, or live campaigns.',
    icon: Laptop,
  },
  {
    num: 3,
    title: 'Review',
    desc: 'Individual code reviews, assignment feedback, and one-on-one debugging with dedicated mentors.',
    icon: CheckSquare,
  },
  {
    num: 4,
    title: 'Showcase',
    desc: 'Assembling verified capstone projects into an industry-ready portfolio for hiring teams.',
    icon: Trophy,
  },
];

// Global Certifications from brochure (Recipient: Kareem Shah)
const globalCertificates = [
  {
    id: 'powerbi',
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/microsoft-powerbi.jpg',
    issuer: 'Microsoft',
    desc: 'Demonstrating methods and best practices for modeling, visualizing, and analyzing data with Power BI.',
  },
  {
    id: 'snowflake',
    title: 'Snowflake SnowPro Core Certified',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/snowflake-snowpro.jpg',
    issuer: 'Snowflake',
    desc: 'Validated core expertise in architecting, migrating, and querying data warehouses on Snowflake.',
  },
  {
    id: 'alteryx-designer',
    title: 'Alteryx Designer Advanced / Core',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/alteryx-designer.jpg',
    issuer: 'Alteryx',
    desc: 'Advanced automated data preparation, spatial processing, and analytical workflow development.',
  },
  {
    id: 'alteryx-server',
    title: 'Alteryx Server Implementation',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/alteryx-server.jpg',
    issuer: 'Alteryx',
    desc: 'Comprehensive server administration, security controls, and enterprise analytics deployment.',
  },
  {
    id: 'google-digital-garage',
    title: 'Google Digital Garage: Fundamentals of Digital Marketing',
    recipient: 'Kareem Shah',
    image: '/assets/certificates/google-digital-garage.jpg',
    issuer: 'Google Digital Garage',
    desc: 'Certified proficiency in search marketing, analytics, social strategy, and conversion optimization.',
  },
];

// College Seminars from brochure
const collegeSeminars = [
  {
    id: 'sem-1',
    image: '/assets/seminars/seminar-1.jpg',
    title: 'College IT Tech Workshop',
    desc: 'Hands-on technical orientation and modern tools demonstration for undergraduate students.',
  },
  {
    id: 'sem-2',
    image: '/assets/seminars/seminar-2.jpg',
    title: 'Faculty Interactive Guidance',
    desc: 'Live problem solving, code walkthroughs, and career path exploration sessions.',
  },
  {
    id: 'sem-3',
    image: '/assets/seminars/seminar-3.jpg',
    title: 'Industry Career Orientation',
    desc: 'Insights into current hiring demands in data analytics, web engineering, and digital marketing.',
  },
  {
    id: 'sem-aud',
    image: '/assets/seminars/seminar-audience.jpg',
    title: 'Large-Scale Campus Seminars',
    desc: 'Engaging packed auditoriums across leading colleges and higher education institutes in Mumbai.',
  },
];

// Team card wrapper component ensuring missing photos show royal blue backdrop with no broken image icon
function TeamMemberCard({ member }) {
  const [hasValidAvatar, setHasValidAvatar] = useState(false);

  useEffect(() => {
    if (!member.avatarUrl) {
      setHasValidAvatar(false);
      return;
    }
    const img = new Image();
    img.src = member.avatarUrl;
    img.onload = () => setHasValidAvatar(true);
    img.onerror = () => setHasValidAvatar(false);
  }, [member.avatarUrl]);

  const handleContact = () => {
    const url = `https://wa.me/${TEAM_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      TEAM_WHATSAPP_PREFILLED_MESSAGE
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-[340px] flex justify-center">
      <ProfileCard
        theme="light"
        backdropColor="#2448c9"
        radius={22}
        holo={0.7}
        glare={0.45}
        tiltStrength={10}
        parallax={8}
        enableTilt={true}
        intro={true}
        enableMobileTilt={false}
        showUserInfo={true}
        contactText="Contact"
        status={member.status || 'Infodesk, Mumbai'}
        statusColor="#2448c9"
        avatarUrl={hasValidAvatar ? member.avatarUrl : ''}
        miniAvatarUrl="/assets/team/infodesk-mini-i.png"
        iconUrl="/assets/iconpattern.png"
        handle={member.handle}
        name={member.name}
        title={member.title}
        onContactClick={handleContact}
      />
    </div>
  );
}

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = 'About | Infodesk Computer Education - Start IT Here';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Learn about Infodesk Computer Education in Mumbai. Practical IT training, recognized standards, industry faculties, and a proven build-first approach.';

    // Open Graph tags
    const ogTags = [
      {
        property: 'og:title',
        content: 'About | Infodesk Computer Education - Start IT Here',
      },
      {
        property: 'og:description',
        content:
          'Infodesk is an IT training institute in Mumbai. We teach practical skills in small, focused batches.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: '/assets/logo.png' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
  }, []);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* ─── 1. PAGE HEADER (Soft-Blue Band) ─── */}
      <section className="bg-soft border-b border-line/60 py-16 sm:py-24">
        <div className="max-w-[1120px] mx-auto px-6 max-w-3xl text-center">
          <h1 className="text-[clamp(36px,5.2vw,64px)] font-bold text-deep tracking-[-0.02em] leading-[1.05]">
            An institute for people who learn by building.
          </h1>
          <p className="text-muted text-[17px] sm:text-lg mt-4 leading-[1.6] max-w-2xl mx-auto">
            Infodesk is an IT training institute in Mumbai. We teach practical skills in small, focused batches.
          </p>
        </div>
      </section>

      {/* ─── 2. OUR STORY (Two Columns) ─── */}
      <section className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading + Story Placeholders */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-deep tracking-[-0.02em] leading-[1.05]">
                Our story.
              </h2>
              <div className="space-y-4 text-muted text-[17px] leading-[1.6]">
                <div className="p-6 rounded-[22px] bg-surface border border-line shadow-card space-y-3">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-soft text-primary">
                    Founding narrative placeholder
                  </span>
                  <p className="text-ink font-medium">
                    [FOUNDING STORY, 80-120 words]
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    Infodesk Computer Education was established in Mumbai with the vision to deliver practical, employment-driven technology training. By replacing passive lectures with live software building, continuous lab assignments, and small batch sizes, we help learners transition smoothly from beginners to job-ready professionals across our branches.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Photo Slot */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] border-2 border-dashed border-line bg-surface p-8 sm:p-10 text-center shadow-card flex flex-col items-center justify-center min-h-[320px] group hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-soft flex items-center justify-center text-primary mb-4 shadow-signature">
                  <ImageIcon size={28} />
                </div>
                <h3 className="text-lg font-bold text-deep mb-2">
                  [PHOTO: Institute founding / campus moment]
                </h3>
                <p className="text-muted text-sm max-w-xs leading-relaxed">
                  Photo slot reserved for the institute founding space or milestone photograph.
                </p>
                <span className="mt-5 text-xs font-semibold px-3 py-1.5 rounded-full bg-soft text-primary border border-primary/20">
                  Ready for user image asset
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 3. HOW EVERY COURSE RUNS (Four Steps) ─── */}
      <section className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-deep tracking-[-0.02em] leading-[1.05]">
              How every course runs.
            </h2>
            <p className="text-muted text-[17px] mt-3 leading-[1.6]">
              A proven four-stage execution sequence built for deep skill mastery and workplace performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-surface border border-line rounded-[22px] border-t-4 border-t-primary p-6 shadow-card flex flex-col justify-between hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-full bg-primary text-white font-bold text-base flex items-center justify-center shadow-signature">
                        {step.num}
                      </div>
                      <div className="w-9 h-9 rounded-full bg-soft text-primary flex items-center justify-center">
                        <StepIcon size={18} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-deep mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm leading-[1.6]">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-line/60 text-xs font-semibold text-primary">
                    Step {step.num} of 4
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 4. MEET THE TEAM (ProfileCard Section) ─── */}
      <section className="bg-soft py-16 sm:py-24 border-y border-line/60">
        <div className="max-w-[1120px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-deep tracking-[-0.02em] leading-[1.05]">
                The people behind Infodesk.
              </h2>
              <p className="text-muted text-[17px] mt-3 leading-[1.6]">
                Experienced mentors and leadership committed to your practical technology education.
              </p>
            </div>

            {/* ProfileCard Grid: 3 on top row, 2 centered below on desktop; balanced wrapping on tablet & mobile */}
            <div className="flex flex-wrap justify-center gap-5 items-start">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 5. RECOGNITION ─── */}
      <section className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-deep tracking-[-0.02em] leading-[1.05]">
              Recognized and certified standards.
            </h2>
            <p className="text-muted text-[17px] mt-3 leading-[1.6]">
              Adhering to strict institutional quality guidelines and national skill initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface border border-line rounded-[22px] p-6 shadow-card hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-soft text-primary flex items-center justify-center mb-4">
                <ShieldCheck size={26} />
              </div>
              <h3 className="font-bold text-deep text-lg mb-1.5">Govt. recognized</h3>
              <p className="text-muted text-sm leading-[1.6]">
                Registered vocational training board operating under government regulatory compliance for practical computer education.
              </p>
            </div>

            <div className="bg-surface border border-line rounded-[22px] p-6 shadow-card hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-soft text-primary flex items-center justify-center mb-4">
                <CheckCircle size={26} />
              </div>
              <h3 className="font-bold text-deep text-lg mb-1.5">ISO 9001:2015 certified board</h3>
              <p className="text-muted text-sm leading-[1.6]">
                International quality management certification ensuring verified curriculum quality, teacher competence, and student satisfaction.
              </p>
            </div>

            <div className="bg-surface border border-line rounded-[22px] p-6 shadow-card hover:border-primary/40 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/recognition/skill-india.png"
                  alt="Skill India"
                  className="h-9 w-auto object-contain"
                />
                <img
                  src="/assets/recognition/msme.png"
                  alt="MSME"
                  className="h-9 w-auto object-contain"
                />
                <img
                  src="/assets/recognition/digital-india.png"
                  alt="Digital India"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <h3 className="font-bold text-deep text-lg mb-1.5">Skill India, MSME &amp; Digital India</h3>
              <p className="text-muted text-sm leading-[1.6]">
                Curriculum aligned with national workforce empowerment programs and small enterprise skill enhancements.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 6. INDIA'S BEST INSTITUTE AWARD (Ashneer Grover) ─── */}
      <section className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="bg-deep text-white rounded-[32px] p-8 sm:p-14 shadow-signature">
            <div className="max-w-3xl mb-10 space-y-3">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20">
                National honor
              </span>
              <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white tracking-[-0.02em] leading-[1.05]">
                Honored with India's Best Institute award by Ashneer Grover.
              </h2>
              <p className="text-white/80 text-base sm:text-[17px] leading-[1.6]">
                Recognized for institutional excellence, practical course delivery, and student placement assistance, Infodesk Computer Education was presented this national honor.
              </p>
            </div>

            {/* 3 Award Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div
                className="group relative rounded-[22px] overflow-hidden border border-white/20 cursor-pointer shadow-lg bg-black/20 focus-visible:ring-3 focus-visible:ring-bright focus-visible:outline-none"
                tabIndex={0}
                role="button"
                aria-label="Enlarge award presentation on stage"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedImage({
                      image: '/assets/awards/ashneer-award-main.jpg',
                      title: "India's Best Institute Award",
                      caption: 'Presented by Ashneer Grover to Infodesk Computer Education leadership',
                    });
                  }
                }}
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
                  alt="Ashneer Grover presenting India's Best Institute award to Infodesk"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs font-semibold text-white">Award presentation on stage</p>
                </div>
              </div>

              <div
                className="group relative rounded-[22px] overflow-hidden border border-white/20 cursor-pointer shadow-lg bg-black/20 focus-visible:ring-3 focus-visible:ring-bright focus-visible:outline-none"
                tabIndex={0}
                role="button"
                aria-label="Enlarge stage ceremony with dignitaries"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedImage({
                      image: '/assets/awards/ashneer-award-1.jpg',
                      title: 'National Award Stage Ceremony',
                      caption: "Honored with India's Best Institute Award",
                    });
                  }
                }}
                onClick={() =>
                  setSelectedImage({
                    image: '/assets/awards/ashneer-award-1.jpg',
                    title: 'National Award Stage Ceremony',
                    caption: "Honored with India's Best Institute Award",
                  })
                }
              >
                <img
                  src="/assets/awards/ashneer-award-1.jpg"
                  alt="National award stage ceremony with dignitaries"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs font-semibold text-white">Stage ceremony with dignitaries</p>
                </div>
              </div>

              <div
                className="group relative rounded-[22px] overflow-hidden border border-white/20 cursor-pointer shadow-lg bg-black/20 focus-visible:ring-3 focus-visible:ring-bright focus-visible:outline-none"
                tabIndex={0}
                role="button"
                aria-label="Enlarge institutional milestone photo"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedImage({
                      image: '/assets/awards/ashneer-award-3.jpg',
                      title: 'Award Trophy & Recognition',
                      caption: 'Celebrating student and institutional achievements',
                    });
                  }
                }}
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
                  alt="Award celebration photo with trophy"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs font-semibold text-white">Institutional milestone</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 7. GLOBAL CERTIFICATIONS (Kareem Shah) ─── */}
      <section className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-deep tracking-[-0.02em] leading-[1.05]">
              Global certifications.
            </h2>
            <p className="text-muted text-[17px] mt-3 leading-[1.6]">
              Our leadership holds verified global credentials across Microsoft, Snowflake, Alteryx, and Google. Click any certificate to inspect full credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalCertificates.map((cert) => (
              <div
                key={cert.id}
                role="button"
                tabIndex={0}
                aria-label={`View ${cert.title} certificate for ${cert.recipient}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedImage({
                      image: cert.image,
                      title: cert.title,
                      caption: `Recipient: ${cert.recipient} • Issued by ${cert.issuer}`,
                    });
                  }
                }}
                onClick={() =>
                  setSelectedImage({
                    image: cert.image,
                    title: cert.title,
                    caption: `Recipient: ${cert.recipient} • Issued by ${cert.issuer}`,
                  })
                }
                className="bg-surface border border-line rounded-[22px] p-5 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between focus-visible:ring-3 focus-visible:ring-bright focus-visible:outline-none"
              >
                <div>
                  <div className="rounded-xl overflow-hidden border border-line bg-background mb-4 h-48 flex items-center justify-center p-2">
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
                    Certified professional: <span className="text-deep font-bold">{cert.recipient}</span>
                  </p>
                  <p className="text-xs text-muted mt-2 leading-[1.6]">{cert.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>View certificate</span>
                  <ExternalLink size={13} />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 8. SEMINARS IN COLLEGES ─── */}
      <section className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-deep tracking-[-0.02em] leading-[1.05]">
              Seminars in colleges.
            </h2>
            <p className="text-muted text-[17px] mt-3 leading-[1.6]">
              Conducting hands-on technical workshops and career awareness sessions across Mumbai campuses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {collegeSeminars.map((item) => (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedImage({
                      image: item.image,
                      title: item.title,
                      caption: item.desc,
                    });
                  }
                }}
                onClick={() =>
                  setSelectedImage({
                    image: item.image,
                    title: item.title,
                    caption: item.desc,
                  })
                }
                className="bg-surface border border-line rounded-[22px] overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer group focus-visible:ring-3 focus-visible:ring-bright focus-visible:outline-none"
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
                  <h3 className="font-bold text-deep text-sm">{item.title}</h3>
                  <p className="text-xs text-muted mt-1 leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 9. CLOSING DEEP-BLUE BANNER ─── */}
      <section className="max-w-[1120px] mx-auto px-6">
        <ScrollReveal>
          <div className="bg-deep text-white rounded-[32px] p-8 sm:p-14 text-center shadow-signature relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="text-[clamp(30px,4vw,44px)] font-bold text-white tracking-[-0.02em] leading-[1.05]">
                Try a free demo class.
              </h2>
              <p className="text-white/80 text-base sm:text-[17px] leading-[1.6]">
                Experience our teaching methodology, inspect our practical labs, and discuss the best course track for your career.
              </p>
              <div className="pt-2 flex justify-center">
                <Button to="/contact" variant="primary" size="lg" className="bg-[#2448c9] hover:bg-[#1d3ba7] text-white">
                  Book your demo
                </Button>
              </div>
            </div>
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
