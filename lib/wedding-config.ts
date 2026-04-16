export interface EventItem {
  time: string;
  name: string;
  description: string;
  theme: string;
}

export interface DayEvent {
  day: number;
  label: string;
  date: string;
  dateShort: string;
  dayOfWeek: string;
  dotColor: string;
  items: EventItem[];
}

export interface StoryEntry {
  label: string;
  description: string;
  caption: string;
  photo: string;
}

export interface RsvpEvent {
  id: string;
  label: string;
  date: string;
}

export const config = {
  groom: {
    name: 'Deepak',
    fullName: 'Deepak Agrawal',
    // UPDATE: replace with actual parent names
    parentsLine: 'Son of Mr. & Mrs. Agrawal',
  },
  bride: {
    name: 'Salomi',
    fullName: 'Salomi Agrawalla',
    // UPDATE: replace with actual parent names
    parentsLine: 'Daughter of Mr. & Mrs. Agrawalla',
  },

  // Target: Varmala time on July 6
  weddingDate: new Date('2026-07-06T21:00:00'),
  rsvpDeadline: 'June 20, 2026',

  venue: {
    name: 'Alcor Hotel',
    address: 'Bistupur, Jamshedpur, Jharkhand',
    mapUrl: 'https://maps.google.com/?q=Alcor+Hotel+Jamshedpur',
    embedUrl:
      'https://maps.google.com/maps?q=Alcor+Hotel+Bistupur+Jamshedpur&output=embed',
  },

  events: [
    {
      day: 1,
      label: 'DAY 1',
      date: 'July 5, 2026',
      dateShort: '07/05/2026',
      dayOfWeek: 'SUNDAY',
      dotColor: '#7A9B6E',
      items: [
        {
          time: '1:00 PM',
          name: 'Mayra',
          description: 'A joyous blessing ceremony with the maternal family',
          theme: '',
        },
        {
          time: '7:00 PM',
          name: 'Engagement & Sangeet',
          description: 'An evening of music, dance, rings, and celebration',
          theme: 'Dress Code: Ethnic Wear',
        },
      ],
    },
    {
      day: 2,
      label: 'DAY 2',
      date: 'July 6, 2026',
      dateShort: '07/06/2026',
      dayOfWeek: 'MONDAY',
      dotColor: '#C4A44A',
      items: [
        {
          time: '9:00 AM',
          name: 'Haldi',
          description: 'Sacred turmeric ceremony to bless the couple with radiance',
          theme: 'Dress Code: Yellow / Bright Colors',
        },
        {
          time: '9:00 PM',
          name: 'Varmala',
          description: 'The sacred garland exchange — a union of two souls',
          theme: '',
        },
        {
          time: '11:00 PM',
          name: 'Phera',
          description: 'Seven sacred vows taken around the holy fire',
          theme: '',
        },
      ],
    },
  ] as DayEvent[],

  // UPDATE: replace descriptions and photo paths with your actual story & photos
  // Add photos to: public/photos/story-1.jpg, story-2.jpg, story-3.jpg
  story: [
    {
      label: 'How It Started',
      description:
        'Two strangers, one unexpected spark — and suddenly the world felt a little different.',
      caption: 'how it started...',
      photo: '/photos/story-1.jpg',
    },
    {
      label: 'First Date',
      description:
        'Coffee turned into dinner, dinner turned into hours — we didn\'t want the night to end.',
      caption: 'first real date',
      photo: '/photos/story-2.jpg',
    },
    {
      label: 'The Proposal',
      description:
        'Under a sky full of stars, he got down on one knee — and the answer was yes before the question was even complete.',
      caption: 'the yes moment',
      photo: '/photos/story-3.jpg',
    },
  ] as StoryEntry[],

  rsvpEvents: [
    { id: 'mayra', label: 'Mayra', date: 'July 5' },
    { id: 'sangeet', label: 'Engagement & Sangeet', date: 'July 5' },
    { id: 'haldi', label: 'Haldi', date: 'July 6' },
    { id: 'varmala', label: 'Varmala', date: 'July 6' },
    { id: 'phera', label: 'Phera', date: 'July 6' },
  ] as RsvpEvent[],

  // UPDATE: replace with actual contact names and numbers
  contacts: [
    {
      side: "Groom's Family",
      name: 'Mr. Agrawal (Father)',
      phone: '+91 XXXXX XXXXX',
    },
    {
      side: "Bride's Family",
      name: 'Mr. Agrawalla (Father)',
      phone: '+91 XXXXX XXXXX',
    },
  ],

  closing: {
    coupleMessage:
      "We are counting the days to see you. Your presence will fill our hearts with joy and make this celebration truly complete.",
    familyMessage:
      "Both families extend their warmest welcome and look forward to celebrating this beautiful beginning with each of you.",
  },
};
