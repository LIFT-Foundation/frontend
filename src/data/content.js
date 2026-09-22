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
  }
};
