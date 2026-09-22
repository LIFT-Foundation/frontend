export const siteData = {
  brand: {
    name: "Charitylp",
    subtitle: "LIFT Foundation",
    tagline: "Bringing hope, changing lives, and building a better tomorrow.",
    copyright: "Â© 2025 Charitylp / LIFT Foundation. All rights reserved."
  },
  navLinks: [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Causes", href: "#causes" },
    { name: "Events", href: "#events" },
    { name: "Pages", href: "#pages", hasDropdown: true }
  ],
  hero: {
    badge: "TOGETHER, WE CAN",
    title: ["Give Hope.", "Change Lives.", "Create Impact."],
    subtitle: "Your small act of kindness can bring big changes in someone's life.",
    primaryCta: "Donate Now",
    secondaryCta: "Explore Causes",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
  },
  donationCard: {
    title: "Make a Donation Today",
    subtitle: "Every donation brings hope",
    frequencies: ["One Time", "Monthly"],
    amounts: [25, 50, 100, 250],
    defaultAmount: 50,
    causes: [
      "Select Cause",
      "Education for All",
      "Clean Water Initiative",
      "Food & Shelter Support",
      "Health & Medical Aid"
    ],
    securityNote: "Secure & Trusted Donations"
  },
  missionCauses: {
    badge: "Our Mission",
    title: "Be the Hope Someone Needs Today",
    subtitle: "We believe in bringing hope, support, and resources to people who need it most in our communities.",
    items: [
      {
        id: "education",
        title: "Education for All",
        description: "Help children get quality education.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
        badgeBg: "bg-[#0e7a68]",
        badgeIcon: "book"
      },
      {
        id: "water",
        title: "Clean Water",
        description: "Provide clean and safe drinking water.",
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=800&auto=format&fit=crop",
        badgeBg: "bg-[#0284c7]",
        badgeIcon: "droplet"
      },
      {
        id: "food",
        title: "Food & Shelter",
        description: "No one should sleep hungry or homeless.",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
        badgeBg: "bg-[#ea580c]",
        badgeIcon: "home"
      },
      {
        id: "health",
        title: "Health & Wellness",
        description: "Support better health for a better future.",
        image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop",
        badgeBg: "bg-[#0d9488]",
        badgeIcon: "activity"
      }
    ]
  },
  impactStats: {
    badge: "Together, We Can",
    title: "Your Support Creates Real Change",
    subtitle: "Together, we can bring hope, improve lives, and build a brighter future for everyone in need.",
    cta: "Get Involved",
    stats: [
      {
        id: "lives",
        value: "1250+",
        label: "Lives Impacted",
        icon: "sprout"
      },
      {
        id: "volunteers",
        value: "820+",
        label: "Volunteers",
        icon: "user"
      },
      {
        id: "projects",
        value: "350+",
        label: "Projects Done",
        icon: "heart-handshake"
      }
    ]
  },
  events: {
    title: "Upcoming Events & Campaigns",
    subtitle: "Join our upcoming events and campaigns to make a bigger impact in your community.",
    cta: "View All Events",
    featuredImage: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1000&auto=format&fit=crop",
    items: [
      {
        id: 1,
        month: "JUN",
        day: "20",
        title: "Food Drive Campaign",
        description: "Helping families with food supplies.",
        time: "10:00 AM - 2:00 PM"
      },
      {
        id: 2,
        month: "JUN",
        day: "28",
        title: "Clean Water Initiative",
        description: "Bringing clean water to those in need.",
        time: "09:00 AM - 1:00 PM"
      },
      {
        id: 3,
        month: "JUL",
        day: "05",
        title: "Education For All",
        description: "Supporting children's education and future.",
        time: "09:00 AM - 1:00 PM"
      }
    ]
  }
};
