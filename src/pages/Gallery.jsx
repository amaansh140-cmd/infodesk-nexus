import React from 'react';
import DomeGallery from '../components/DomeGallery';

// Showcase images for the 3D Circular Dome Gallery
const domeShowcaseImages = [
  // Awards & National Recognition
  {
    src: '/assets/awards/ashneer-award-main.jpg',
    alt: "India's Best Institute Award Honored by Ashneer Grover",
  },
  {
    src: '/assets/awards/ashneer-award-1.jpg',
    alt: "Ashneer Grover presenting the national trophy to Infodesk",
  },
  {
    src: '/assets/awards/ashneer-award-3.jpg',
    alt: "Infodesk faculty team celebrating national award win",
  },

  // College Seminars & Campus Workshops
  {
    src: '/assets/seminars/seminar-1.jpg',
    alt: "Interactive college IT workshop in Mumbai",
  },
  {
    src: '/assets/seminars/seminar-2.jpg',
    alt: "Technical guidance seminar on full stack & programming stacks",
  },
  {
    src: '/assets/seminars/seminar-3.jpg',
    alt: "Data science and analytics orientation for students",
  },
  {
    src: '/assets/seminars/seminar-audience.jpg',
    alt: "Packed auditorium at campus tech guidance session",
  },

  // Global Industry Certifications
  {
    src: '/assets/certificates/microsoft-powerbi.jpg',
    alt: "Microsoft Certified: Power BI Data Analyst Associate",
  },
  {
    src: '/assets/certificates/snowflake-snowpro.jpg',
    alt: "Snowflake SnowPro Core Certification",
  },
  {
    src: '/assets/certificates/alteryx-designer.jpg',
    alt: "Alteryx Designer Core Certified Professional",
  },
  {
    src: '/assets/certificates/alteryx-server.jpg',
    alt: "Alteryx Server Administration Certified",
  },
  {
    src: '/assets/certificates/google-digital-garage.jpg',
    alt: "Google Digital Garage: Fundamentals of Digital Marketing",
  },

  // Alumni & Placements
  {
    src: '/assets/testimonials/faiza-kachwala.jpg',
    alt: "Faiza Kachwala - Placement Graduate",
  },
  {
    src: '/assets/testimonials/sonu-sharma.jpg',
    alt: "Sonu Sharma - Digital Marketing Graduate",
  },
  {
    src: '/assets/testimonials/rehan-shaikh.jpg',
    alt: "Rehan Shaikh - Full Stack Developer",
  },
  {
    src: '/assets/testimonials/komal-kamble.jpg',
    alt: "Komal Kamble - Data Analyst Graduate",
  },
];

export default function Gallery() {
  // Dynamic lookup for new institute images if any photos are added
  const instituteImagesGlob = import.meta.glob('/public/assets/gallery/institute/*.{png,jpg,jpeg,webp}', { eager: true });
  const dynamicInstitutePhotos = Object.keys(instituteImagesGlob).map((key) => ({
    src: key.replace('/public', ''),
    alt: 'Infodesk Institute Space',
  }));

  const allDomeImages = [
    ...dynamicInstitutePhotos,
    ...domeShowcaseImages,
  ];

  return (
    <div className="w-full h-[calc(100vh-76px)] min-h-[640px] relative overflow-hidden bg-[#0c163b]">
      <DomeGallery
        images={allDomeImages}
        fit={0.65}
        minRadius={480}
        padFactor={0.16}
        overlayBlurColor="#0c163b"
        grayscale={false}
        openedImageWidth="min(88vw, 480px)"
        openedImageHeight="min(88vw, 480px)"
        imageBorderRadius="16px"
        openedImageBorderRadius="24px"
      />
    </div>
  );
}
