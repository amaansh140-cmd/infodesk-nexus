/**
 * Team and Faculty Data for Infodesk Computer Education
 * 
 * Edit team members here.
 * Profile photos should be cut-out portraits on a transparent background (.png)
 * placed in /public/assets/team/<filename>.png
 */

// Single source of truth for branch contact WhatsApp number (matches Goregaon West and Motilal Nagar branches)
export const TEAM_WHATSAPP_NUMBER = '919769445334';
export const TEAM_WHATSAPP_PREFILLED_MESSAGE = "Hi Infodesk, I'd like to know more about your courses.";

export const teamMembers = [
  {
    id: 'kareem-shah',
    name: 'Kareem Shah',
    title: 'Director', // [CONFIRM title]
    avatarUrl: '/assets/team/kareem-shah.png', // [CONFIRM portrait photo]
    handle: 'infodeskcompedu', // [CONFIRM the real Instagram or social handle]
    status: 'Infodesk, Mumbai',
  },
  {
    id: 'amaan',
    name: 'Amaan',
    title: 'Co-founder',
    avatarUrl: '/assets/team/amaan.png', // [CONFIRM portrait photo]
    handle: 'infodeskcompedu', // [CONFIRM the real Instagram or social handle]
    status: 'Infodesk, Mumbai',
  },
  /*
  // [FACULTY TEMPLATE - Duplicate this block to add more instructors easily]
  {
    id: 'faculty-member-1',
    name: 'Faculty Name',
    title: 'Senior Faculty, Data & AI',
    avatarUrl: '/assets/team/faculty-1.png',
    handle: 'infodeskcompedu',
    status: 'Infodesk, Mumbai',
  },
  */
];
