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
    { name: "Impact", href: "#impact" },
    { name: "Projects", href: "#projects" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Contact", href: "#contact" }
  ],

  hero: {
    tag: "LOVE · FELLOWSHIP · TRUTH",
    titleLine1: "Sharing God's Love.",
    titleLine2: "Empowering Children.",
    titleLine3: "Transforming Communities.",
    subtitle: "A Christian foundation in Sri Lanka empowering children and young people through education, nutrition, and community-based support.",
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
    },
    {
      id: "montessori",
      title: "Little Light Montessori",
      subtitle: "Early Childhood Foundation",
      icon: "graduation-cap"
    }
  ],

  mission: {
    badge: "OUR MISSION",
    title: "Be the Hope Someone Needs Today",
    description: "We believe every child deserves the opportunity to learn, grow, and thrive. Through education, nutrition, and community-based support, Love In Fellowship & Truth Foundation works to empower children and young people and help build brighter futures across Sri Lanka.",
    cta: "Learn More About Us",
    scriptureQuote: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    scriptureRef: "Matthew 5:16",
    centerImage: "/images/mission-children-learning.jpg"
  },

  // 4 CORE PROGRAMS
  areasOfImpact: {
    badge: "OUR PROGRAMS",
    titleStart: "Empowering Children.",
    titleHighlight: "Building Brighter Futures.",
    subtitle: "Through education, nutrition, and child development, LIFT Foundation works alongside underserved communities across Sri Lanka.",
    items: [
      {
        id: "education",
        title: "Education",
        tagline: "Brighter Futures",
        description: "Free Education Centres — educational support for children in underserved communities across Sri Lanka.",
        image: "/images/card-education.jpg",
        badgeBg: "bg-[#0d7a64]",
        badgeIcon: "book-open",
        btnColor: "bg-[#e2f3ee] text-[#0d7a64] hover:bg-[#d0ece3]"
      },
      {
        id: "children-youth",
        title: "Children & Youth",
        tagline: "Stronger Generations",
        description: "Development, life skills, and leadership opportunities equipping young people for meaningful futures.",
        image: "/images/card-children-youth.jpg",
        badgeBg: "bg-[#b81d68]",
        badgeIcon: "users",
        btnColor: "bg-[#fbe8f1] text-[#b81d68] hover:bg-[#f6d5e5]"
      },
      {
        id: "nourish",
        title: "Nourish with Love",
        tagline: "Meals for a Better Tomorrow",
        description: "Nutritious meals and food support for children and vulnerable communities to foster health and learning.",
        image: "/images/card-nourish.jpg",
        badgeBg: "bg-[#ea580c]",
        badgeIcon: "utensils",
        btnColor: "bg-[#fdf0e8] text-[#ea580c] hover:bg-[#fae4d7]"
      },
      {
        id: "montessori",
        title: "Little Light Montessori",
        tagline: "Early Childhood",
        description: "Christ-centred early childhood education in Kandana providing a holistic learning foundation for young minds.",
        image: "/images/card-montessori.jpg",
        badgeBg: "bg-[#0284c7]",
        badgeIcon: "graduation-cap",
        btnColor: "bg-[#e0f2fe] text-[#0284c7] hover:bg-[#bae6fd]"
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
        image: "/images/card-montessori.jpg"
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

  educationProgram: {
    badge: "EDUCATION PROGRAM",
    title: "Building Brighter Futures Through Education",
    lead1: "Every child deserves the opportunity to learn, grow, and build a brighter future. Love In Fellowship & Truth Foundation is committed to improving access to educational support for children from underserved communities across Sri Lanka.",
    lead2: "Through community-based learning initiatives, educational resources, and partnerships, we aim to help children overcome barriers to learning and reach their potential.",
    primaryCta: "Support Education",
    secondaryCta: "Partner With Us",
    image: "/images/card-education.jpg",

    whyEducationMatters: {
      badge: "WHY EDUCATION MATTERS",
      title: "Overcoming Barriers to Learning",
      description1: "Access to quality educational support can help children develop essential knowledge, skills, and confidence. However, some children face barriers such as limited learning resources, financial difficulties, and a lack of additional educational support.",
      description2: "Our education initiative aims to respond to these needs by working with communities and partners to create better learning opportunities for children."
    },

    aims: {
      badge: "WHAT WE AIM TO PROVIDE",
      title: "Four Core Pillars of Educational Support",
      items: [
        {
          number: "01",
          title: "Free Education Support",
          description: "We aim to develop community-based educational programmes that help children strengthen their learning outside regular school hours.",
          icon: "book-open"
        },
        {
          number: "02",
          title: "Learning Resources",
          description: "We seek to provide essential educational materials, including books, stationery, and learning kits, according to children’s needs and available resources.",
          icon: "package"
        },
        {
          number: "03",
          title: "Tuition and Learning Assistance",
          description: "Where funding and programme arrangements allow, we aim to support children who need additional help with their school subjects.",
          icon: "graduation-cap"
        },
        {
          number: "04",
          title: "Safe and Supportive Learning Environments",
          description: "We aim to work with local communities, educators, and other partners to create supportive environments where children can learn, develop confidence, and pursue their educational goals.",
          icon: "shield-check"
        }
      ]
    },

    vision2030: {
      badge: "OUR VISION 2030",
      title: "Expanding Educational Opportunities Across Sri Lanka",
      subtitle: "Our long-term vision is to progressively expand access to free educational support through a network of community-based education and development centres.",
      expansionGoalTitle: "Our long-term expansion goal:",
      milestones: [
        {
          count: "9",
          label: "Provinces",
          detail: "Build a foundation for wider educational outreach across Sri Lanka."
        },
        {
          count: "25",
          label: "Districts",
          detail: "Expand educational support through district-level initiatives."
        },
        {
          count: "331",
          label: "Divisional-Level Centres",
          detail: "Work towards establishing education and development centres across Sri Lanka by 2030."
        }
      ],
      note: "This is a long-term goal that will depend on sustainable funding, local partnerships, community participation, and the successful development of each phase."
    },

    makeDifference: {
      badge: "HOW YOU CAN MAKE A DIFFERENCE",
      title: "Be Part of Transforming a Life",
      subtitle: "Your support can help us work towards creating better educational opportunities for children in underserved communities.",
      actions: [
        {
          id: "materials",
          title: "Support Learning Materials",
          description: "Help us work towards providing books, stationery, and other essential educational resources.",
          actionText: "Support Materials",
          type: "donate"
        },
        {
          id: "programmes",
          title: "Support Educational Programmes",
          description: "Contribute towards the development of community-based learning opportunities for children.",
          actionText: "Support Programmes",
          type: "donate"
        },
        {
          id: "partner",
          title: "Become a Partner",
          description: "Partner with Love In Fellowship & Truth Foundation to help develop and expand educational initiatives in Sri Lanka.",
          actionText: "Partner With Us",
          type: "partner"
        },
        {
          id: "volunteer",
          title: "Volunteer Your Skills",
          description: "Support our educational mission through teaching, mentoring, professional skills, or community engagement.",
          actionText: "Volunteer Your Skills",
          type: "volunteer"
        }
      ]
    },

    commitment: {
      badge: "OUR COMMITMENT",
      title: "Responsible Stewardship & Clear Communication",
      point1: "We are committed to responsible use of donations, clear communication with supporters, and the gradual development of sustainable educational initiatives.",
      point2: "We aim to provide appropriate updates on programme activities, progress, and the use of funds."
    },

    closingCta: {
      title: "Help a Child Build a Brighter Future",
      subtitle: "Together, we can work towards a future where more children have access to educational support and the opportunity to fulfil their potential.",
      primaryBtn: "Support Education",
      secondaryBtn: "Contact Us",
      footerNote: "Love In Fellowship & Truth Foundation — Love. Fellowship. Truth."
    }
  },

  youthProgram: {
    badge: "CHILDREN & YOUTH DEVELOPMENT",
    title: "Empowering Young Lives. Inspiring Brighter Futures.",
    lead1: "Every child deserves the opportunity to grow with confidence, discover their potential, and build a better future. Love In Fellowship & Truth Foundation aims to support children and young people across Sri Lanka through personal development, mentoring, life skills, and leadership opportunities.",
    lead2: "Our goal is to help young people develop the knowledge, values, and practical skills they need to become confident, responsible, and active members of their communities.",
    primaryCta: "Support Children & Youth",
    secondaryCta: "Partner With Us",
    image: "/images/card-children-youth.jpg",

    whyMatters: {
      badge: "WHY CHILDREN & YOUTH DEVELOPMENT MATTERS",
      description1: "Children and young people need more than academic education to thrive. They also benefit from encouragement, positive guidance, practical life skills, and opportunities to develop their talents.",
      description2: "Through community-based initiatives and collaboration with local partners, we aim to create opportunities that encourage personal growth, strengthen confidence, and prepare young people for the future."
    },

    areasOfFocus: {
      badge: "OUR AREAS OF FOCUS",
      items: [
        {
          number: "01",
          title: "Personal Development",
          description: "We aim to encourage confidence, self-awareness, positive decision-making, and personal responsibility among children and young people.",
          icon: "sparkles"
        },
        {
          number: "02",
          title: "Life Skills Development",
          description: "We seek to create opportunities for young people to develop practical skills, communication, teamwork, problem-solving, and other abilities that can support their future.",
          icon: "briefcase"
        },
        {
          number: "03",
          title: "Mentoring and Guidance",
          description: "We aim to connect young people with positive guidance and encouragement through appropriate mentoring activities and community engagement.",
          icon: "users"
        },
        {
          number: "04",
          title: "Leadership Development",
          description: "We hope to equip young people with opportunities to develop leadership, serve others, work together, and contribute positively to their communities.",
          icon: "award"
        },
        {
          number: "05",
          title: "Values and Character Development",
          description: "Inspired by our Christian faith, we encourage compassion, honesty, respect, kindness, responsibility, and service to others while treating every person with dignity.",
          icon: "heart"
        }
      ]
    },

    makeDifference: {
      badge: "HOW WE HOPE TO MAKE A DIFFERENCE",
      intro: "Through future workshops, mentoring activities, youth gatherings, skills-development sessions, and community-based programmes, we aim to help young people:",
      bullets: [
        "Build confidence and discover their strengths.",
        "Develop practical life and communication skills.",
        "Strengthen teamwork and leadership abilities.",
        "Make responsible and informed decisions.",
        "Participate positively in their communities.",
        "Develop hope and a sense of purpose for the future."
      ],
      note: "Activities will be developed progressively according to community needs, available resources, and suitable partnerships."
    },

    approach: {
      badge: "OUR APPROACH",
      items: [
        {
          id: "community",
          title: "Community-Based Support",
          description: "We aim to work alongside local communities, educators, churches, volunteers, and other partners to identify needs and develop meaningful activities.",
          icon: "home"
        },
        {
          id: "inclusive",
          title: "Inclusive Opportunities",
          description: "We seek to provide respectful and supportive opportunities for children and young people, regardless of their social or economic background.",
          icon: "globe"
        },
        {
          id: "safe",
          title: "Safe and Responsible Engagement",
          description: "We recognise the importance of children’s safety, dignity, privacy, and wellbeing. Our programmes aim to follow appropriate child safeguarding practices and responsible volunteer engagement.",
          icon: "shield-check"
        }
      ]
    },

    howYouCanHelp: {
      badge: "HOW YOU CAN HELP",
      actions: [
        {
          id: "programme",
          title: "Support a Programme",
          description: "Help us work towards developing meaningful personal development and life-skills opportunities for children and young people.",
          actionText: "Support a Programme",
          type: "donate"
        },
        {
          id: "volunteer",
          title: "Become a Volunteer",
          description: "Contribute your time, knowledge, professional skills, or experience to suitable youth-development activities.",
          actionText: "Become a Volunteer",
          type: "volunteer"
        },
        {
          id: "partner",
          title: "Partner With Us",
          description: "Collaborate with Love In Fellowship & Truth Foundation to develop sustainable opportunities for young people in Sri Lanka.",
          actionText: "Partner With Us",
          type: "partner"
        },
        {
          id: "leadership",
          title: "Support Leadership Development",
          description: "Help us work towards creating opportunities for young people to grow as responsible leaders and community contributors.",
          actionText: "Support Leadership",
          type: "donate"
        }
      ]
    },

    commitment: {
      badge: "OUR COMMITMENT",
      point1: "We are committed to developing programmes responsibly, using available resources carefully, and communicating honestly with supporters about our activities and progress.",
      point2: "As our work grows, we aim to strengthen our programmes through community participation, partnerships, and ongoing learning."
    },

    closingCta: {
      title: "HELP INSPIRE THE NEXT GENERATION",
      subtitle1: "Every young person deserves encouragement, opportunity, and the chance to build a brighter future.",
      subtitle2: "Together, we can work towards empowering children and young people to grow, learn, lead, and make a positive difference.",
      primaryBtn: "Support Children & Youth",
      secondaryBtn: "Contact Us",
      footerNote: "Love In Fellowship & Truth Foundation — Love. Fellowship. Truth."
    }
  },

  nourishProgram: {
    badge: "NOURISH WITH LOVE",
    title: "Nourishing Children. Nurturing Brighter Futures.",
    lead1: "Every child deserves access to nutritious food and the opportunity to grow, learn, and thrive. Through Nourish with Love, Love In Fellowship & Truth Foundation aims to improve access to nutritious meals for children and young people from underserved communities across Sri Lanka.",
    lead2: "We believe that supporting children’s nutritional needs can contribute to their wellbeing, learning, and development. Through community-based meal initiatives and partnerships, we aim to help children access the nourishment they need to pursue a brighter future.",
    primaryCta: "Support Nourish with Love",
    secondaryCta: "Partner With Us",
    image: "/images/card-nourish.jpg",

    whyMatters: {
      badge: "WHY NUTRITION MATTERS",
      description1: "Good nutrition plays an important role in children’s growth, wellbeing, and ability to learn. However, some families face financial difficulties that can make it challenging to provide nutritious food consistently.",
      description2: "Nourish with Love aims to respond to this need by working towards better access to nutritious meals for children in underserved communities."
    },

    aims: {
      badge: "WHAT WE AIM TO DO",
      items: [
        {
          number: "01",
          title: "Nutritious Meal Support",
          description: "We aim to provide nutritious meals to children through community-based meal initiatives, depending on available funding and programme arrangements.",
          icon: "utensils"
        },
        {
          number: "02",
          title: "Community Meal Initiatives",
          description: "We seek to work with local communities, volunteers, and partners to organise meal-support activities that respond to children’s needs.",
          icon: "users"
        },
        {
          number: "03",
          title: "Supporting Children’s Wellbeing",
          description: "Our goal is to contribute to children’s wellbeing by helping improve access to food and supporting their ability to participate in learning and development activities.",
          icon: "heart"
        },
        {
          number: "04",
          title: "Partnerships for Greater Impact",
          description: "We aim to collaborate with donors, churches, community groups, and other organisations to develop sustainable food-support initiatives.",
          icon: "handshake"
        }
      ]
    },

    vision: {
      badge: "OUR VISION FOR NOURISH WITH LOVE",
      title: "Working Towards One Million Meals by 2030",
      description1: "Our long-term vision is to expand access to nutritious food for children and underserved communities through sustainable, community-based initiatives.",
      goalHighlight: "Our long-term goal is to work towards providing one million meals by 2030.",
      description2: "We aim to pursue this goal progressively through local partnerships, responsible fundraising, community participation, and the development of meal-support programmes.",
      note: "This is a long-term target, and the scale of our activities will depend on available resources and successful partnerships."
    },

    howYouCanHelp: {
      badge: "HOW YOUR SUPPORT CAN HELP",
      actions: [
        {
          id: "support-meal",
          title: "Support a Meal",
          description: "Your contribution can help us work towards providing nutritious meals for children through our meal-support initiatives.",
          actionText: "Support a Meal",
          type: "donate"
        },
        {
          id: "support-program",
          title: "Support a Community Meal Programme",
          description: "Help us develop meal initiatives that respond to the needs of children in underserved communities.",
          actionText: "Support a Programme",
          type: "donate"
        },
        {
          id: "partner",
          title: "Become a Programme Partner",
          description: "Partner with Love In Fellowship & Truth Foundation to help develop sustainable approaches to children’s nutrition and food support.",
          actionText: "Become a Partner",
          type: "partner"
        },
        {
          id: "volunteer",
          title: "Volunteer With Us",
          description: "Contribute your time and skills to suitable food-support activities and community initiatives.",
          actionText: "Volunteer With Us",
          type: "volunteer"
        }
      ]
    },

    commitment: {
      badge: "OUR COMMITMENT",
      point1: "We are committed to responsible use of donations, careful planning, and honest communication with our supporters.",
      point2: "We aim to provide appropriate updates on meal-support activities, programme progress, and the use of funds as our initiatives develop."
    },

    closingCta: {
      title: "SHARE LOVE THROUGH NOURISHMENT",
      subtitle1: "A meal can be more than food. It can be an expression of care, dignity, and hope.",
      subtitle2: "Together, we can work towards a future where more children have access to nutritious food and better opportunities to grow and learn.",
      primaryBtn: "Support Nourish with Love",
      secondaryBtn: "Contact Us",
      footerNote: "Love In Fellowship & Truth Foundation — Love. Fellowship. Truth."
    }
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
