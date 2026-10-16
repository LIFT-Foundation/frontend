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
        status: "In Development",
        description: "A planned Christ-centred early childhood education initiative designed to provide young children with a caring, supportive, and stimulating learning environment.",
        buttonText: "Explore This Project →",
        image: "/images/card-montessori.jpg"
      },
      {
        id: "education-centers",
        title: "Divisional Free Education Centres Plan",
        tag: "Expansion Project",
        location: "Sri Lanka — Long-Term National Vision",
        status: "Long-Term Development Plan",
        description: "A long-term initiative to expand access to educational support through community-based learning centres, learning resources, and tuition assistance for children in underserved communities. Our vision is to work progressively towards establishing 331 divisional-level education and development centres by 2030, subject to funding, partnerships, and local needs.",
        buttonText: "Explore This Project →",
        image: "/images/card-education-centres.jpg"
      },
      {
        id: "nourish-drives",
        title: "Nourish with Love",
        tag: "Nutrition Project",
        location: "Underserved Communities in Sri Lanka",
        status: "Programme Development",
        description: "A community-focused initiative that aims to improve children’s access to nutritious meals and support their health, wellbeing, and participation in education. We aim to develop meal-support activities in collaboration with local communities and partners as funding and resources become available.",
        buttonText: "Explore This Project →",
        image: "/images/card-nourish-love.jpg"
      },
      {
        id: "christmas-outreach",
        title: "Christmas Outreach 2026",
        tag: "Featured Campaign",
        location: "Sri Lanka — Children & Vulnerable Communities",
        status: "December 2026",
        description: "Share love, bring hope, and spread the joy of Christmas through planned outreach activities providing practical support, gifts, meals, and encouragement to children and vulnerable communities across Sri Lanka.",
        buttonText: "Support This Campaign →",
        image: "/images/card-christmas-outreach.jpg"
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
    subtitle: "A phased expansion plan to help children across Sri Lanka access free, quality education.",
    stats: [
      { value: "9", label: "Provinces", desc: "Long-term coverage vision" },
      { value: "25", label: "Districts", desc: "Planned expansionphase" },
      { value: "331", label: "Divisional Centres", desc: "Long-term vision by 2030" }
    ]
  },

  whyEducation: {
    badge: "WHY EDUCATION MATTERS",
    title: "Breaking Poverty Through Learning",
    subtitle: "Education can help break the cycle of poverty and unlock a child's potential. Through accessible learning support, we aim to create better educational opportunities for children in underserved communities across Sri Lanka.",
    points: [
      {
        title: "The Challenge of Rural Education",
        description: "Children in underserved communities may have limited access to supplementary education, learning materials, and academic guidance."
      },
      {
        title: "Accessible Learning Support",
        description: "Our planned education centres aim to provide educational assistance, learning resources, and guidance to help children strengthen their knowledge and skills."
      },
      {
        title: "Stronger Communities Through Education",
        description: "By supporting children's education, we aim to help young people build brighter futures and contribute positively to their families and communities."
      }
    ],
    commitment: {
      badge: "OUR COMMITMENT",
      title: "Making Education More Accessible",
      description: "Planned educational support through learning resources and academic guidance, subject to available funding and resources."
    }
  },

  howToHelp: {
    badge: "HOW YOU CAN HELP",
    title: "Partner With Us to Make a Difference",
    subtitle: "Your partnership directly empowers a child with education, nutrition, and hope for a brighter future.",
    ways: [
      {
        id: "sponsor-child",
        title: "Sponsor a Child",
        description: "Support a child’s educational needs and learning opportunities through our planned sponsorship initiative.",
        cta: "Sponsor a Child"
      },
      {
        id: "support-edu",
        title: "Support Education",
        description: "Help provide educational resources and academic support for children in underserved communities.",
        cta: "Support Education"
      },
      {
        id: "provide-meal",
        title: "Nourish with Love",
        description: "Help provide a meal, drinking water, and a small treat for children through monthly meal drives.",
        cta: "Provide Meals"
      },
      {
        id: "support-centre",
        title: "Support a Divisional Centre",
        description: "Partner with us to support the planned expansion of free education centres across Sri Lanka.",
        cta: "Sponsor a Centre"
      },
      {
        id: "support-campaign",
        title: "Christmas Outreach 2026",
        description: "Share love and bring hope to children and vulnerable communities through our planned Christmas outreach activities.",
        cta: "Support This Campaign"
      }
    ]
  },

  commitment: {
    badge: "OUR COMMITMENT",
    titleStart: "Building a Brighter Future ",
    titleHighlight: "Together",
    subtitle: "Rooted in faith and driven by love, Love In Fellowship & Truth Foundation is committed to supporting children and vulnerable communities across Sri Lanka through education, nutrition, and practical care.",
    cta: "Partner With Us",
    pillars: [
      {
        id: "faith",
        title: "Faith-Driven",
        icon: "heart",
        description: "Guided by Christian faith, love, and compassion."
      },
      {
        id: "community",
        title: "Community-Focused",
        icon: "users",
        description: "Working to empower children and strengthen communities."
      },
      {
        id: "transparent",
        title: "Transparent & Accountable",
        icon: "shield-check",
        description: "Committed to responsible stewardship of donations."
      }
    ]
  },

  storiesAndMission: {
    stories: {
      title: "Stories of Hope",
      subtitle: "Discover how educational support and community care can help children build brighter futures.",
      cta: "Discover Our Impact",
      testimonial: {
        quote: "Through accessible educational support and community care, children in underserved areas are empowered to learn, grow, and build brighter futures.",
        author: "Community Impact",
        location: "LIFT Foundation Sri Lanka",
        avatar: "/images/card-education-centres.jpg"
      }
    },
    joinMission: {
      title: "Join Our Mission",
      subtitle: "Partner with Love In Fellowship & Truth Foundation to support children and vulnerable communities across Sri Lanka.",
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
    badge: "EXPANSION PROJECT",
    title: "Divisional Free Education Centres Plan",
    tagline: "Making Quality Education Accessible to Every Child",
    subtitle: "A Vision to Empower Children Through Education Across Sri Lanka",
    about: {
      lead1: "The Divisional Free Education Centres Plan is a long-term educational initiative by Love In Fellowship & Truth Foundation, designed to help children from underserved communities access additional educational support and learning opportunities.",
      lead2: "We believe every child deserves the opportunity to learn, grow, and build a brighter future, regardless of their family’s financial circumstances.",
      lead3: "Through this initiative, we aim to develop community-based learning centres that provide educational assistance, essential learning resources, and a supportive environment for children."
    },
    primaryCta: "Support This Project",
    secondaryCta: "Partner With Us",
    image: "/images/card-education-centres.jpg",

    purpose: {
      badge: "OUR PURPOSE",
      p1: "Our goal is to help children overcome educational barriers by providing additional learning support, educational materials, and opportunities to strengthen their knowledge and confidence.",
      p2: "Inspired by Christian love and compassion, we aim to serve children with dignity, care, and respect."
    },

    developmentPlan: {
      badge: "OUR DEVELOPMENT PLAN",
      title: "Phased National Roadmap",
      points: [
        { label: "Initial Phase", desc: "Work towards supporting 9 education centres.", icon: "school" },
        { label: "Expansion Goal", desc: "Gradually expand educational support across 25 districts in Sri Lanka.", icon: "map-pin" },
        { label: "Long-Term Vision", desc: "Work towards establishing education and development centres across all 331 Divisional Secretariat divisions by 2030, subject to funding, partnerships, and implementation capacity.", icon: "building-2" }
      ]
    },

    monthlySupportPlan: {
      badge: "OUR MONTHLY SUPPORT PLAN",
      intro: "We propose allocating LKR 25,000 (approximately USD 83.33) per education centre each month to support children’s educational needs and provide additional assistance throughout the year.",
      perCentreTable: [
        { category: "Educational Support", lkr: "15,000", usd: "$50.00" },
        { category: "Children’s Care & Joy Fund", lkr: "10,000", usd: "$33.33" }
      ],
      perCentreTotal: { lkr: "25,000", usd: "$83.33" },
      allocations: [
        {
          num: "1",
          title: "Educational Support",
          amount: "LKR 15,000 | USD 50 per month",
          desc: "This allocation is intended to help meet educational needs, including books, stationery, learning materials, supplementary learning activities, and other essential educational expenses, depending on the needs of each centre."
        },
        {
          num: "2",
          title: "Children’s Care & Joy Fund",
          amount: "LKR 10,000 | Approximately USD 33.33 per month",
          desc: "This allocation will be set aside each month to create a fund for additional support for children. It may be used for educational supplies, clothing, special care packages, gifts, or other suitable items based on children’s needs and available resources. By saving this allocation throughout the year, each centre can build a dedicated fund to provide additional support to children at an appropriate time."
        }
      ]
    },

    annualSupportPlan: {
      badge: "ANNUAL SUPPORT PLAN — PER CENTRE",
      intro: "Each education centre will receive a proposed annual allocation of LKR 300,000 (approximately USD 1,000).",
      table: [
        { category: "Educational Support", lkr: "180,000", usd: "$600" },
        { category: "Children’s Care & Joy Fund", lkr: "120,000", usd: "$400" }
      ],
      total: { lkr: "300,000", usd: "$1,000" }
    },

    nineCentresFunding: {
      badge: "FUNDING REQUIREMENTS FOR 9 EDUCATION CENTRES",
      intro: "Our initial proposed phase aims to support 9 education centres through this monthly assistance programme.",
      table: [
        { category: "Educational Support", monthlyLkr: "135,000", monthlyUsd: "$450", annualLkr: "1,620,000", annualUsd: "$5,400" },
        { category: "Children’s Care & Joy Fund", monthlyLkr: "90,000", monthlyUsd: "$300", annualLkr: "1,080,000", annualUsd: "$3,600" }
      ],
      total: { monthlyLkr: "225,000", monthlyUsd: "$750", annualLkr: "2,700,000", annualUsd: "$9,000" }
    },

    fundingGoal: {
      badge: "OUR PROPOSED FUNDING GOAL",
      monthlyUsd: "USD 750 per month",
      annualUsd: "USD 9,000 per year",
      equivalent: "Equivalent to LKR 225,000 per month and LKR 2,700,000 per year.",
      desc: "This proposed funding goal covers the direct monthly support allocations for all 9 education centres. Additional administrative or programme coordination costs, if required, should be budgeted separately."
    },

    howSupportMatters: {
      badge: "HOW YOUR SUPPORT MAKES A DIFFERENCE",
      points: [
        "USD 50 per month helps provide educational support for one centre.",
        "USD 33.33 per month contributes to the Children’s Care & Joy Fund for one centre.",
        "USD 83.33 per month covers both proposed allocations for one centre.",
        "USD 1,000 per year covers the proposed annual allocation for one centre.",
        "USD 9,000 per year supports the proposed allocations for all 9 centres."
      ]
    },

    whatSupportAchieves: {
      badge: "WHAT YOUR SUPPORT CAN ACHIEVE",
      title: "Your partnership can help us work towards providing:",
      items: [
        "Regular educational assistance for children.",
        "Books, stationery, and essential learning resources.",
        "Additional learning opportunities and academic support.",
        "A dedicated fund for children’s additional needs and special support.",
        "Greater access to educational opportunities in underserved communities."
      ]
    },

    transparency: {
      badge: "OUR COMMITMENT TO TRANSPARENCY",
      title: "Responsible Stewardship & Honest Communication",
      p1: "Love In Fellowship & Truth Foundation aims to maintain clear records of the support allocated to each centre, including monthly assistance, annual totals, and the use of the Children’s Care & Joy Fund.",
      p2: "We are committed to responsible stewardship and honest communication with our supporters."
    },

    partnerWithUs: {
      title: "Partner With Us",
      p1: "We welcome churches, Christian organisations, charitable foundations, businesses, and individuals who share our vision of making educational support more accessible to children in Sri Lanka.",
      p2: "Your partnership can help us provide consistent educational assistance and additional care for children who need it.",
      primaryBtn: "Support This Project",
      secondaryBtn: "Partner With Us",
      footerNote: "Love In Fellowship & Truth Foundation — Empowering Children Through Education."
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

  nourishMealDrivesProject: {
    badge: "NUTRITION PROJECT",
    title: "Nourish with Love Meal Drives",
    tagline: "Nourishing Children. Sharing Love. Bringing Hope.",
    subtitle: "A Monthly Meal Support Initiative by Love In Fellowship & Truth Foundation",
    lead1: "Nourish with Love Meal Drives is a community outreach initiative of Love In Fellowship & Truth Foundation, established with the aim of supporting children in underserved and low-income communities across Sri Lanka by providing nutritious meals and sharing the love and compassion of Christ.",
    lead2: "We believe every child deserves access to nourishing food, care, and kindness. Through this initiative, we aim to help children experiencing food insecurity while bringing encouragement, dignity, and joy into their lives. Our vision is not simply to provide a meal, but also to remind every child that they are valued, loved, and not forgotten.",
    primaryCta: "Support This Project",
    secondaryCta: "Become a Monthly Partner",
    helpFeedCta: "Help Feed a Child",
    image: "/images/card-nourish-love.jpg",

    purpose: {
      badge: "OUR PURPOSE",
      title: "Responding to Childhood Food Insecurity",
      description1: "Many children from financially disadvantaged families face challenges in accessing nutritious food. Nourish with Love seeks to respond to this need through regular meal distribution activities organized according to available funding and identified community needs.",
      description2: "With the support of donors, churches, volunteers, and community partners, we aim to provide children with a complete meal package and create opportunities for communities to work together in caring for children in need."
    },

    whatWeProvide: {
      badge: "WHAT WE AIM TO PROVIDE",
      title: "Holistic Care & Nutrition in Every Outreach",
      items: [
        {
          title: "A Nutritious Meal",
          desc: "A freshly prepared meal to help meet children’s nutritional needs.",
          icon: "utensils"
        },
        {
          title: "Drinking Water",
          desc: "A bottle of drinking water for each child.",
          icon: "droplet"
        },
        {
          title: "A Little Extra Joy",
          desc: "An ice cream or another small treat to bring a smile to each child’s face.",
          icon: "sparkles"
        },
        {
          title: "Monthly Community Outreach",
          desc: "Regular meal distribution activities in communities where support is needed.",
          icon: "calendar"
        },
        {
          title: "Care and Compassion",
          desc: "Practical assistance that demonstrates kindness and the love of Christ.",
          icon: "heart"
        }
      ]
    },

    mealPackage: {
      badge: "OUR MEAL PACKAGE",
      costPerChild: "USD 3",
      costSubtitle: "per child for one complete meal package",
      items: [
        "One nutritious meal",
        "One bottle of drinking water",
        "One ice cream or another small treat"
      ],
      note: "The estimated cost may vary depending on food prices, suppliers, location, and distribution arrangements. Actual costs will be confirmed before each meal drive."
    },

    growthPlan: {
      badge: "OUR GROWTH PLAN",
      title: "Phased Outreach Milestones",
      intro: "Our goal is to begin with a manageable number of children and gradually expand the initiative as funding, partnerships, and operational capacity grow.",
      phases: [
        {
          phase: "Phase 1",
          target: "100 Children per Month",
          desc: "We aim to begin by providing meal packages for 100 children each month.",
          monthly: "$300",
          annual: "$3,600"
        },
        {
          phase: "Phase 2",
          target: "250 Children per Month",
          desc: "As additional funding and partnerships become available, we aim to extend meal support to 250 children each month.",
          monthly: "$750",
          annual: "$9,000"
        },
        {
          phase: "Phase 3",
          target: "500 Children per Month",
          desc: "Our next goal is to reach 500 children monthly through expanded community outreach and donor partnerships.",
          monthly: "$1,500",
          annual: "$18,000"
        },
        {
          phase: "Phase 4",
          target: "1,000 Children per Month",
          desc: "Our long-term vision is to provide meal packages for up to 1,000 children each month, subject to available funding, partnerships, and implementation capacity.",
          monthly: "$3,000",
          annual: "$36,000"
        }
      ],
      note: "These phases represent proposed growth targets. Expansion will depend on funding and operational readiness."
    },

    givingOpportunities: {
      badge: "FUNDING & GIVING OPPORTUNITIES",
      title: "Your Generosity in Action",
      intro: "Your generosity can help provide meals and encouragement to children in need.",
      tiers: [
        { amount: "USD 3", meals: "1 child" },
        { amount: "USD 30", meals: "10 children" },
        { amount: "USD 75", meals: "25 children" },
        { amount: "USD 150", meals: "50 children" },
        { amount: "USD 300", meals: "100 children" },
        { amount: "USD 750", meals: "250 children" },
        { amount: "USD 1,500", meals: "500 children" },
        { amount: "USD 3,000", meals: "1,000 children" }
      ],
      footerText: "Donations can help support individual meal packages, monthly meal drives, or the gradual expansion of this initiative. You can make a one-time contribution or become a monthly partner to help sustain the project throughout the year."
    },

    makeDifference: {
      badge: "HOW YOU CAN MAKE A DIFFERENCE",
      title: "Ways to Get Involved",
      points: [
        { title: "Donate", desc: "Help provide a meal package for a child." },
        { title: "Become a Monthly Partner", desc: "Contribute regularly to support ongoing meal drives." },
        { title: "Sponsor a Meal Drive", desc: "Help fund a meal distribution activity in a community." },
        { title: "Partner With Us", desc: "Work alongside Love In Fellowship & Truth Foundation to reach more children." }
      ],
      closing: "Every contribution, large or small, can help us extend care and compassion to children in need."
    },

    commitment: {
      badge: "OUR COMMITMENT TO RESPONSIBLE GIVING",
      title: "Responsible Stewardship & Transparency",
      p1: "Love In Fellowship & Truth Foundation is committed to using donated funds responsibly and maintaining clear records of project income and expenses.",
      p2: "Meal drives will be planned according to available funding, identified community needs, and practical arrangements. We aim to provide appropriate updates on activities and use resources responsibly as the initiative develops.",
      note: "The stated funding goals are preliminary estimates based on USD 3 per child. Transportation, special event expenses, and other additional costs may require separate funding."
    },

    closingCta: {
      title: "Join Us in Sharing Love",
      lead: "Together, we can do more than provide food. We can bring smiles to children, strengthen communities, and demonstrate Christ’s love through practical acts of kindness.",
      tagline: "One child. One meal. One act of love at a time.",
      primaryBtn: "Support This Project",
      secondaryBtn: "Become a Monthly Partner",
      tertiaryBtn: "Help Feed a Child"
    }
  },

  montessoriProgram: {
    badge: "LITTLE LIGHT MONTESSORI",
    title: "Nurturing Little Minds. Building Bright Beginnings.",
    lead1: "Every child deserves a caring environment where they can learn, explore, develop confidence, and discover their potential. Little Light Montessori is a planned early childhood education initiative of Love In Fellowship & Truth Foundation, envisioned to provide young children with a nurturing, child-centred, and values-based learning environment in Kandana, Sri Lanka.",
    lead2: "Our vision is to lay a strong foundation for lifelong learning by encouraging curiosity, creativity, social development, and a love of learning from an early age.",
    primaryCta: "Support Little Light Montessori",
    secondaryCta: "Partner With Us",
    image: "/images/card-montessori.jpg",

    vision: {
      badge: "OUR VISION FOR EARLY CHILDHOOD EDUCATION",
      description1: "The early years of childhood are an important stage in a child’s development. A supportive learning environment can help children develop communication, creativity, independence, and positive relationships with others.",
      description2: "Through Little Light Montessori, we aim to create an environment where young children can learn through exploration, guided activities, play, and meaningful interaction."
    },

    approach: {
      badge: "OUR APPROACH TO LEARNING",
      items: [
        {
          number: "01",
          title: "Child-Centred Learning",
          description: "We aim to encourage children to learn at their own pace through age-appropriate activities that support curiosity, discovery, and understanding.",
          icon: "sparkles"
        },
        {
          number: "02",
          title: "Learning Through Play",
          description: "We envision learning experiences that encourage creativity, imagination, problem-solving, and active participation.",
          icon: "palette"
        },
        {
          number: "03",
          title: "Social and Emotional Development",
          description: "We aim to nurture kindness, confidence, cooperation, independence, and respect for others in a caring environment.",
          icon: "heart"
        },
        {
          number: "04",
          title: "Foundational Skills",
          description: "Our planned approach aims to support early language, numeracy, communication, motor skills, and readiness for the next stage of education.",
          icon: "book-open"
        },
        {
          number: "05",
          title: "Christian Values and Care",
          description: "Inspired by our Christian faith, we seek to promote love, kindness, honesty, respect, and compassion while caring for each child’s dignity and wellbeing.",
          icon: "sun"
        }
      ]
    },

    developmentPlan: {
      badge: "OUR DEVELOPMENT PLAN",
      title: "A Vision for Little Light Montessori in Kandana",
      subtitle: "Our plan is to progressively develop an early childhood education centre that can serve children and families in the surrounding community.",
      phases: [
        {
          phase: "Phase 1",
          title: "Establishment",
          capacity: "~60 Children",
          description: "Our initial target is to develop the centre with the capacity to serve approximately 60 children, subject to facilities, resources, and the required approvals."
        },
        {
          phase: "Phase 2",
          title: "Growth",
          capacity: "~150 Children",
          description: "As the centre develops, we aim to expand its capacity to approximately 150 children."
        },
        {
          phase: "Phase 3",
          title: "Long-Term Development",
          capacity: "~200 Children",
          description: "Our longer-term target is to work towards a capacity of approximately 200 children, depending on demand, staffing, facilities, and sustainable funding."
        }
      ],
      note: "These figures represent development targets, not current enrolment numbers."
    },

    howYouCanSupport: {
      badge: "HOW YOU CAN SUPPORT LITTLE LIGHT MONTESSORI",
      actions: [
        {
          id: "materials",
          title: "Learning Materials",
          description: "Help us work towards providing age-appropriate books, educational toys, creative materials, and classroom resources.",
          actionText: "Support Materials",
          type: "donate"
        },
        {
          id: "classroom",
          title: "Classroom Development",
          description: "Support our plans to develop a safe, welcoming, and child-friendly learning environment.",
          actionText: "Support Classroom",
          type: "donate"
        },
        {
          id: "partnerships",
          title: "Educational Partnerships",
          description: "Partner with us through early childhood education expertise, training, resources, or professional guidance.",
          actionText: "Partner With Us",
          type: "partner"
        },
        {
          id: "sponsorship",
          title: "Project Sponsorship",
          description: "Help us work towards establishing and developing Little Light Montessori through financial contributions and long-term partnerships.",
          actionText: "Sponsor Project",
          type: "donate"
        }
      ]
    },

    safeguarding: {
      badge: "CHILD SAFEGUARDING AND WELLBEING",
      point1: "We recognise that young children need special care, protection, and supervision.",
      point2: "Our aim is to develop appropriate safeguarding practices, safe learning spaces, responsible staff and volunteer engagement, and respectful communication with parents and guardians as the project progresses.",
      point3: "The centre’s operations will be developed in line with applicable requirements and the necessary approvals."
    },

    commitment: {
      badge: "OUR COMMITMENT",
      point1: "We aim to develop Little Light Montessori responsibly, with a focus on children’s wellbeing, educational quality, transparency, and long-term sustainability.",
      point2: "As the project progresses, we intend to communicate relevant development updates and opportunities for supporters and partners to contribute."
    },

    closingCta: {
      title: "HELP BUILD A BRIGHTER BEGINNING",
      subtitle1: "Together, we can work towards creating a caring learning environment where young children can explore, grow, and take their first steps towards a brighter future.",
      primaryBtn: "Support Little Light Montessori",
      secondaryBtn: "Contact Us",
      footerNote: "Little Light Montessori — A planned early childhood education initiative of Love In Fellowship & Truth Foundation.",
      tagline: "Love. Fellowship. Truth."
    }
  },

  montessoriProject: {
    badge: "FEATURED PROJECT",
    title: "Little Light Montessori",
    tagline: "Nurturing Young Minds. Building Bright Futures.",
    subtitle: "A Christ-Centred Early Childhood Education Initiative in Kandana, Sri Lanka",
    lead1: "Little Light Montessori is a planned early childhood education initiative by Love In Fellowship & Truth Foundation, created to provide young children with a caring, safe, and supportive environment where they can learn, explore, and develop essential skills for life.",
    lead2: "Our goal is to lay a strong foundation for every child’s educational journey by encouraging curiosity, creativity, confidence, positive values, and a love for learning.",
    primaryCta: "Support This Project",
    secondaryCta: "Partner With Us",
    image: "/images/card-montessori.jpg",

    purpose: {
      badge: "OUR PURPOSE",
      description1: "We believe that every child deserves the opportunity to experience quality early childhood education, regardless of their family’s financial circumstances.",
      description2: "Through Little Light Montessori, we aim to support children’s intellectual, social, emotional, physical, and creative development in an environment shaped by Christian love, compassion, and respect."
    },

    developmentPlan: {
      badge: "OUR DEVELOPMENT PLAN",
      title: "Planned Project Milestones",
      details: [
        { label: "Location", value: "Kandana, Gampaha District, Sri Lanka", icon: "map-pin" },
        { label: "Initial Target", value: "60 children", icon: "users" },
        { label: "Future Development", value: "Gradually expand capacity to serve 150–200 children, subject to facilities, resources, and funding.", icon: "trending-up" },
        { label: "Planned Opening", value: "September 2027, subject to project readiness and funding.", icon: "calendar" }
      ]
    },

    whatWeProvide: {
      badge: "WHAT WE AIM TO PROVIDE",
      title: "Comprehensive Early Childhood Foundations",
      items: [
        "Early childhood learning and school-readiness activities",
        "Play-based learning that encourages creativity and discovery",
        "Social skills, communication, and character development",
        "A safe, welcoming, and child-friendly learning environment",
        "Support for children from underserved and low-income families, subject to available resources"
      ]
    },

    whyItMatters: {
      badge: "WHY THIS PROJECT MATTERS",
      title: "Investing in the Foundational Years",
      content: "The early years of a child’s life are important for building the foundations of future learning and development. By investing in early childhood education, we hope to help children enter primary school with greater confidence, stronger foundational skills, and a positive attitude towards learning."
    },

    fundingGoal: {
      badge: "OUR PROPOSED FUNDING GOAL",
      lkr: "LKR 150,000,000",
      usd: "Approximately USD 500,000",
      description: "Love In Fellowship & Truth Foundation is seeking funding partners to establish Little Light Montessori, a planned Christ-centred early childhood education centre in Kandana, Sri Lanka. Our proposed fundraising target is LKR 150 million (approximately USD 500,000). This preliminary estimate includes land acquisition, construction, classroom facilities, educational materials, essential equipment, and initial operating expenses for the first 12 months.",
      note: "USD amounts are approximate conversions based on a planning rate of LKR 300 per USD 1. Actual USD equivalents may change with exchange rates. All project costs are preliminary estimates and will be reviewed following professional assessments and quotations.",
      breakdown: [
        { component: "Land purchase", lkr: "60,000,000", usd: "200,000" },
        { component: "Legal fees, surveys and acquisition costs", lkr: "3,000,000", usd: "10,000" },
        { component: "Building construction", lkr: "40,000,000", usd: "133,333" },
        { component: "Architectural, engineering and approval fees", lkr: "4,000,000", usd: "13,333" },
        { component: "Classroom furniture and learning-space setup", lkr: "4,000,000", usd: "13,333" },
        { component: "Montessori materials and books", lkr: "2,000,000", usd: "6,667" },
        { component: "Playground and child-safety facilities", lkr: "3,000,000", usd: "10,000" },
        { component: "Utilities, sanitation and kitchen facilities", lkr: "3,000,000", usd: "10,000" },
        { component: "Administrative equipment and IT", lkr: "1,000,000", usd: "3,334" },
        { component: "First 12 months of operating expenses", lkr: "16,000,000", usd: "53,333" },
        { component: "Contingency and unforeseen expenses", lkr: "14,000,000", usd: "46,667" }
      ],
      totalLkr: "150,000,000",
      totalUsd: "Approximately 500,000"
    },

    closingCta: {
      title: "Help Us Build Little Light Montessori",
      lead: "Your support can help us work towards establishing a learning environment where young children can discover their potential and prepare for a brighter future.",
      p1: "We welcome individuals, churches, organisations, charitable foundations, and partners who share our vision of making early childhood education more accessible to children in Sri Lanka.",
      p2: "Every partnership brings us closer to creating a nurturing space where children can learn, grow, and build a strong foundation for life.",
      highlight: "Together, we can help little minds grow and bright futures begin.",
      primaryBtn: "Support This Project",
      secondaryBtn: "Partner With Us",
      footerNote: "Love In Fellowship & Truth Foundation — Investing in Children, Inspiring Futures."
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
