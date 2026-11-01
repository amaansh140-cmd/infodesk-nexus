import React from 'react';
import DomeGallery from '../components/DomeGallery';

// Authentic photos extracted directly from Infodesk Computer Education Goregaon West
// Source: Google My Business listing (https://share.google/ssKquZbGJletMAdZs)
export const gmbGalleryImages = [
  {
    src: '/assets/gmb/gmb-1.jpg',
    alt: 'Infodesk Goregaon West - Modern Computer Lab & Training Workstations',
  },
  {
    src: '/assets/gmb/gmb-2.jpg',
    alt: 'Infodesk Goregaon West - 360 View of Practical IT Classroom',
  },
  {
    src: '/assets/gmb/gmb-3.jpg',
    alt: 'Infodesk Goregaon West - High-Performance Student Workstation Setup',
  },
  {
    src: '/assets/gmb/gmb-4.jpg',
    alt: 'Infodesk Goregaon West - Branch Reception & Student Counseling Desk',
  },
  {
    src: '/assets/gmb/gmb-5.jpg',
    alt: 'Infodesk Goregaon West - Institute Entrance & Exterior Signage',
  },
  {
    src: '/assets/gmb/gmb-6.jpg',
    alt: 'Infodesk Goregaon West - Dedicated Practice Terminal & Lab Environment',
  },
  {
    src: '/assets/gmb/gmb-7.jpg',
    alt: 'Infodesk Goregaon West - Small Batch Interactive Classroom',
  },
  {
    src: '/assets/gmb/gmb-8.jpg',
    alt: 'Infodesk Goregaon West - Hands-On Programming & Data Science Station',
  },
  {
    src: '/assets/gmb/gmb-9.jpg',
    alt: 'Infodesk Goregaon West - Digital Marketing & Accounting Lab Facility',
  },
  {
    src: '/assets/gmb/gmb-10.jpg',
    alt: 'Infodesk Goregaon West - Faculty Guidance & Mentor Desk',
  },
  {
    src: '/assets/gmb/gmb-11.jpg',
    alt: 'Infodesk Goregaon West - Classroom Whiteboard & Presentation Area',
  },
  {
    src: '/assets/gmb/gmb-12.jpg',
    alt: 'Infodesk Goregaon West - Individual Practice Stations & Software Tools',
  },
  {
    src: '/assets/gmb/gmb-13.jpg',
    alt: 'Infodesk Goregaon West - Professional Learning Environment & Amenities',
  },
  {
    src: '/assets/gmb/gmb-14.jpg',
    alt: 'Infodesk Goregaon West - Student Discussion & Project Collaboration Space',
  },
  {
    src: '/assets/gmb/gmb-15.jpg',
    alt: 'Infodesk Goregaon West - Evening & Weekend Batch Computer Lab',
  },
];

export default function Gallery() {
  return (
    <div className="w-full h-[calc(100vh-76px)] min-h-[500px] relative overflow-hidden bg-[#0c163b]">
      <DomeGallery
        images={gmbGalleryImages}
        fit={0.62}
        minRadius={480}
        padFactor={0.16}
        overlayBlurColor="#0c163b"
        grayscale={false}
        autoRotate={true}
        autoRotateSpeed={0.08}
        autoRotateDelay={1200}
        openedImageWidth="min(88vw, 480px)"
        openedImageHeight="min(88vw, 480px)"
        imageBorderRadius="18px"
        openedImageBorderRadius="26px"
      />
    </div>
  );
}
