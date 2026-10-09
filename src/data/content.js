export const siteData = {
  brand: {
    name: "LIFT Foundation",
    subtitle: "LOVE IN FELLOWSHIP & TRUTH",
    tagline: "Sharing God's Love. Serving People. Transforming Lives.",
    copyright: "© 2025 LIFT Foundation (liftfoundationsl.org). All rights reserved."
  },

  navLinks: [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Projects", href: "#projects" },
    { name: "Vision 2030", href: "#vision" },
    { name: "Why Education", href: "#why-education" },
    { name: "How You Can Help", href: "#how-to-help" },
    { name: "Contact", href: "#contact" }
  ],

  hero: {
    tag: "LOVE · FELLOWSHIP · TRUTH",
    titleLine1: "Sharing God's Love.",
    titleLine2: "Empowering Children.",
    titleLine3: "Transforming Communities.",
    subtitle: "A Christian foundation serving children, youth, families, the elderly and communities across Sri Lanka.",
    primaryCta: "Donate Now",
    secondaryCta: "Our Programs",
    image: "/images/hero-children.jpg"
  },

  ribbonItems: [
    {
      id: "edu",
      title: "Education",
      subtitle: "Brighter Futures",
      icon: "book-open"
    },
    {
      id: "montessori",
      title: "Little Light Montessori",
      subtitle: "Early Childhood Foundation",
      icon: "graduation-cap"
    },
    {
      id: "youth",
      title: "Children & Youth",
      subtitle: "Stronger Generations",
      icon: "users"
    },
    {
      id: "nourish",
      title: "Nourish with Love",
      subtitle: "Meals for a Better Tomorrow",
      icon: "heart"
    }
  ],

  mission: {
    badge: "OUR MISSION",
    title: "Be the Hope Someone Needs Today",
    description: "We believe every child deserves the opportunity to learn, grow and thrive. Through education, nutrition and community-based support, LIFT Foundation works alongside underserved communities to create brighter futures for children and young people across Sri Lanka.",
    cta: "Learn More About Us",
    scriptureQuote: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    scriptureRef: "Matthew 5:16",
    centerImage: "/images/mission-children-learning.jpg"
  },

  // 4 CORE PROGRAMS
  areasOfImpact: {
    badge: "OUR PROGRAMS",
    titleStart: "Our 4 Core Focus ",
    titleHighlight: "Programs",
    subtitle: "Rooted in God's love, our strategy focuses directly on Education, Early Childhood Development, Youth Empowerment, and Nutrition across Sri Lanka.",
    items: [
      {
        id: "education",
        title: "Education",
        tagline: "Brighter Futures",
        description: "Free Education Centres — educational support for children in underserved communities across Sri Lanka.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
        badgeBg: "bg-[#0d7a64]",
        badgeIcon: "book-open",
        btnColor: "bg-[#e2f3ee] text-[#0d7a64] hover:bg-[#d0ece3]"
      },
      {
        id: "montessori",
        title: "Little Light Montessori",
        tagline: "Early Childhood",
        description: "Christ-centred early childhood education in Kandana providing a holistic learning foundation for young minds.",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
        badgeBg: "bg-[#0284c7]",
        badgeIcon: "graduation-cap",
        btnColor: "bg-[#e0f2fe] text-[#0284c7] hover:bg-[#bae6fd]"
      },
      {
        id: "children-youth",
        title: "Children & Youth",
        tagline: "Stronger Generations",
        description: "Development, life skills, and leadership opportunities equipping young people for meaningful futures.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
        badgeBg: "bg-[#b81d68]",
        badgeIcon: "users",
        btnColor: "bg-[#fbe8f1] text-[#b81d68] hover:bg-[#f6d5e5]"
      },
      {
        id: "nourish",
        title: "Nourish with Love",
        tagline: "Meals for a Better Tomorrow",
        description: "Nutritious meals and food support for children and vulnerable communities to foster health and learning.",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
        badgeBg: "bg-[#ea580c]",
        badgeIcon: "utensils",
        btnColor: "bg-[#fdf0e8] text-[#ea580c] hover:bg-[#fae4d7]"
      }
    ]
  },

  // OUR PROJECTS (Separate Section featuring Little Light Montessori & ground initiatives)
  ourProjects: {
    badge: "OUR PROJECTS",
    title: "Key Ground Initiatives",
    subtitle: "Specific operational projects executing our vision in target Sri Lankan communities.",
    items: [
      {
        id: "montessori",
        title: "Little Light Montessori",
        tag: "Featured Project",
        location: "Kandana, Gampaha District",
        status: "Active & Operational",
        description: "Christ-centred early childhood education in Kandana providing a world-class foundation for young minds.",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "education-centers",
        title: "Divisional Free Education Centres Plan",
        tag: "Expansion Project",
        location: "Island-wide Target (25 Districts)",
        status: "Phase 1 Expansion",
        description: "Establishing equipped learning spaces with dedicated tutors for after-school guidance in rural areas.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "nourish-drives",
        title: "Nourish with Love Meal Drives",
        tag: "Nutrition Project",
        location: "High-need Community Hubs",
        status: "Active Drives",
        description: "Delivering freshly prepared, balanced meals to schoolchildren in low-income families.",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },

  // FUTURE EXPANSION CATEGORIES (Saved for future rollout when LIFT expands)
  futureExpansion: [
    {
      id: "families",
      title: "Family Support",
      description: "Essential assistance for vulnerable families — helping strengthen communities."
    },
    {
      id: "elderly",
      title: "The Elderly",
      description: "Care, meals and companionship for senior citizens in need."
    },
    {
      id: "leaders",
      title: "Christian Leaders",
      description: "Equipping under-resourced ministry leaders across Sri Lanka."
    },
    {
      id: "community",
      title: "Community Development",
      description: "Sustainable community projects and environmental care."
    }
  ],

  vision2030: {
    badge: "NATIONAL EXPANSION VISION",
    title: "Our Vision for Sri Lanka",
    subtitle: "A systematic rollout strategy ensuring every child in every corner of Sri Lanka has access to free quality education.",
    stats: [
      { value: "9", label: "Provinces Reached", desc: "Island-wide coverage" },
      { value: "25", label: "Districts Active", desc: "District hub coordination" },
      { value: "331", label: "Divisional Centres", desc: "Community-level impact by 2030" }
    ]
  },

  whyEducation: {
    badge: "WHY EDUCATION MATTERS",
    title: "Breaking Poverty Through Learning",
    subtitle: "Education is the single most powerful tool to break generational poverty and unlock a child's God-given potential.",
    points: [
      {
        title: "The Crisis in Rural Learning",
        description: "Thousands of children in remote Sri Lankan communities lack access to quality supplementary education, learning materials, and mentorship."
      },
      {
        title: "Nutritional & Educational Synergy",
        description: "A hungry child cannot focus on learning. By combining daily nutritious meals with after-school education, we achieve higher retention and progress."
      },
      {
        title: "Sustainable Community Transformation",
        description: "Educated youth grow up to uplift their families, lead ethical businesses, and serve as beacons of hope in their local communities."
      }
    ]
  },

  howToHelp: {
    badge: "HOW YOU CAN HELP",
    title: "Partner With Us to Make a Difference",
    subtitle: "Your partnership directly empowers a child with education, nutrition, and hope for a brighter future.",
    ways: [
      {
        id: "sponsor-child",
        title: "Sponsor a Child",
        description: "Provide monthly support for a child's education kit, books, and daily nutritious meals.",
        cta: "Sponsor Now"
      },
      {
        id: "support-edu",
        title: "Support Education",
        description: "Fund learning materials, desks, computers, and teacher stipends for our rural centres.",
        cta: "Support Education"
      },
      {
        id: "provide-meal",
        title: "Provide a Meal",
        description: "Fund single or recurring meal drives for children participating in our after-school programs.",
        cta: "Provide Meals"
      },
      {
        id: "support-centre",
        title: "Support a Divisional Centre",
        description: "Partner as an individual or organization to sponsor the creation of an entire learning centre.",
        cta: "Sponsor a Centre"
      }
    ]
  },

  commitment: {
    badge: "Our Commitment",
    titleStart: "Building a Brighter Future ",
    titleHighlight: "Together",
    subtitle: "Rooted in faith and driven by love, we are committed to transforming lives across Sri Lanka through education, nourishment, and community care.",
    cta: "Partner With Us",
    pillars: [
      {
        id: "faith",
        title: "Faith-Driven",
        icon: "plus",
        description: "Everything we do is grounded in God's love and Christian truth."
      },
      {
        id: "community",
        title: "Community-Focused",
        icon: "users",
        description: "Focused on empowering children, youth, and their surrounding families."
      },
      {
        id: "transparent",
        title: "Transparent & Accountable",
        icon: "shield-check",
        description: "100% accountable to our donors, international partners, and the children we serve."
      }
    ]
  },

  storiesAndMission: {
    stories: {
      title: "Stories of Hope",
      subtitle: "Real lives transformed through God's love and dedicated donor support.",
      cta: "Read Their Stories",
      testimonial: {
        quote: "Thanks to LIFT's free education centre, I can now continue my studies and dream of becoming a teacher.",
        author: "Dinuthi",
        location: "Student, Free Education Centre",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
      }
    },
    joinMission: {
      title: "Join Our Mission",
      subtitle: "Be part of something greater. Together, we can share God's love and transform children's lives across Sri Lanka.",
      volunteerBtn: "Become a Partner / Volunteer",
      donateBtn: "Donate & Support"
    }
  },

  newsletter: {
    title: "Stay Connected With LIFT",
    subtitle: "Subscribe to receive quarterly progress updates on our education centres and child nutrition programs.",
    placeholder: "Enter your work or personal email address",
    cta: "Subscribe"
  },

  footer: {
    brandName: "LIFT Foundation",
    brandSubtitle: "LOVE IN FELLOWSHIP & TRUTH",
    tagline: "Sharing God's Love. Serving People. Transforming Lives.",
    columns: [
      {
        title: "Quick Links",
        links: ["Home", "About Us", "Our Programs", "Our Projects", "Vision 2030", "How You Can Help", "Contact"]
      },
      {
        title: "Our Programs",
        links: ["Education", "Children & Youth", "Nourish with Love"]
      },
      {
        title: "Key Projects",
        links: ["Little Light Montessori", "Free Education Centres", "Nourish Meal Drives"]
      }
    ],
    scriptureQuote: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    scriptureRef: "Matthew 5:16",
    socials: [
      { name: "Facebook", icon: "facebook", href: "#" },
      { name: "Instagram", icon: "instagram", href: "#" },
      { name: "YouTube", icon: "youtube", href: "#" },
      { name: "LinkedIn", icon: "linkedin", href: "#" }
    ],
    copyright: "© 2025 LIFT Foundation (liftfoundationsl.org). All rights reserved."
  }
};
