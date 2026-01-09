import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sadisha Dilmin",
  initials: "SD",
  url: "https://sadishadilmin.com",
  location: "Remote",
  locationLink: "#",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",
  summary:
    "I'm a full-stack developer specialising in backend systems with Node.js. Recently, I've led and contributed to AI-driven CRM features, performance-focused backend services (NestJS/Express), and modern React/Next.js frontends. My experience spans AWS and Azure infrastructure, CI/CD automation, and integrating third-party services like Zendesk APIs. Previously at Virtusa, I worked in TechOps focusing on reliability, incident/change management, and release operations.",
  avatarUrl: "/Sadisha.jpeg",
  skills: [
    "Node.js",
    "NestJS",
    "Express",
    "React",
    "Next.js",
    "Typescript",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Azure",
    "Kafka",
    "MongoDB",
    "Twilio",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "lksadish@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SDSamarasinghe",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,

        navbar: false,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Upview Technologies",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer (Full Stack & AI Agent Development)",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQGEd4Q99QHOsA/company-logo_200_200/company-logo_200_200/0/1672739150049/upview_technologies_logo?e=2147483647&v=beta&t=1zxoAVnZBCC0L3yfkkg_JpUaW86y_TaUlcVd8zgOJVc",
      start: "June 2025",
      end: undefined,
      description:
        "Pioneered AI-driven CRM features (call transcription, smart routing, automated responses) reducing manual support response time by 35%. Built high-performance NestJS/Express backend services improving real-time data sync and lead processing speed by 40%. Led React/Next.js dashboard overhaul increasing adoption of AI-powered tools.",
    },
    {
      company: "Beta Launch",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://sadishadilmin.com/betalaunch.jpeg",
      start: "January 2025",
      end: "June 2025",
      description:
        "Architected full-stack features using React/Next.js and NestJS. Automated CI/CD pipelines on AWS and Azure, reduced deployment time and errors. Optimised AWS infra with auto-scaling and load-balancing for high availability; integrated third-party services (e.g., Zendesk APIs). Mentored junior developers via reviews and guidance.",
    },
    {
      company: "Beta Launch",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Associate Software Engineer",
      logoUrl: "https://sadishadilmin.com/betalaunch.jpeg",
      start: "April 2024",
      end: "December 2024",
      description:
        "Worked on Takso (takso-outcomes.com), an online outcomes planning platform. Developed and maintained web apps in React.js and Node.js. Managed product backlog and collaborated cross-functionally; trained and guided 2–5 junior engineers on core technologies.",
    },
    {
      company: "Beta Launch",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer Trainee",
      logoUrl: "https://sadishadilmin.com/betalaunch.jpeg",
      start: "July 2023",
      end: "April 2024",
      description:
        "Crafted scalable web applications and data-driven interfaces. Built APIs for platforms measuring social impact; contributed to frontend components and backend APIs with modern JavaScript stacks.",
    },
    {
      company: "Virtusa",
      href: "https://virtusa.com",
      badges: [],
      location: "Remote",
      title: "TechOps Engineer",
      logoUrl: "https://sadishadilmin.com/virtusa.jpeg",
      start: "June 2022",
      end: "June 2023",
      description:
        "Monitored application performance, executed system-level testing, and resolved complex support issues. Handled incident/change management for Vcommand project; coordinated release/deployment activities and prepared technical reports. Supported infrastructure operations and DevOps practices.",
    },
  ],
  education: [
    {
      school: "SLIIT",
      href: "https://www.sliit.lk/",
      degree: "Bachelor's Degree Second Class Honours - Software Engineering (GPA 3.29)",
      logoUrl: "",
      start: "July 2020",
      end: "Sep 2024",
    },
    {
      school: "Microsoft Student Ambassador",
      href: "#",
      degree: "Supported tech community building and peer development in technical and career skills.",
      logoUrl: "",
      start: "",
      end: "",
    },
    {
      school: "Microsoft Certified",
      href: "#",
      degree: "Azure Fundamentals – Azure certification demonstrating foundational cloud knowledge.",
      logoUrl: "",
      start: "",
      end: "",
    },
    {
      school: "University of Moratuwa",
      href: "#",
      degree: "English Language Skills for Employment (DOL/ELSE/11/282)",
      logoUrl: "",
      start: "",
      end: "",
    },
  ],
  publications: [
    {
      title: "MaterialFlow: An Innovative Model-Based Platform for Streamlining Materials Delivery in Sri Lanka's Construction Industry",
      conference: "2024 8th International Conference on Business and Information Management (ICBIM)",
      dates: "August 16-18, 2024",
      location: "IEEE Xplore",
      description:
        "The construction industry in Sri Lanka, a vital contributor to the nation's economy and employment sector, currently confronts significant hurdles in material procurement and transportation. To address these challenges, MaterialFlow presents an innovative model-based platform engineered to streamline the materials delivery process in this industry. This platform comprises four main components: Customer and product clustering, Supplier-Driver Pair Recommendation, Price Prediction and Discount Analysis, and Fraud Detection. Through the integration of advanced machine learning and data clustering techniques, MaterialFlow aims to optimize supplier-driver pairings, facilitate predictive pricing strategies, and combat fraudulent activities. Leveraging contemporary software and cloud technologies, the platform endeavors to enhance operational efficiency and reduce costs across the construction supply chain.",
      doi: "10.1109/ICBIM63313.2024.10823537",
      url: "https://ieeexplore.ieee.org/document/10823537",
      dateAdded: "January 9, 2025",
    },
  ],
  projects: [
    {
      title: "Oral Connect",
      href: "https://www.oralconnect.co.uk/",
      dates: "2025",
      active: true,
      description:
        "The world's first AI-native dental CRM platform. Built by dentists, powered by AI, designed for growth. Features predictive scheduling, automated reminders, financial follow-ups, AI-powered calling, lead management, and smart automation. Streamlines dental clinic operations with intelligent patient journeys and seamless integrations.",
      technologies: ["Next.js", "AI/ML", "VoIP", "CRM", "Typescript"],
      links: [
        { type: "Website", href: "https://www.oralconnect.co.uk/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Empire Foods",
      href: "https://empirefoods.ca/",
      dates: "2025",
      active: true,
      description:
        "Food service distribution platform connecting kitchens to quality since 1974. E-commerce solution managing over 5,000 products from a 60,000 sq. ft. facility, serving the restaurant industry with next-day delivery, online ordering, and inventory management.",
      technologies: ["Next.js", "E-commerce", "Typescript", "Node.js"],
      links: [
        { type: "Website", href: "https://empirefoods.ca/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "IRev CRM Platform",
      href: "https://irev.com.au/",
      dates: "2025",
      active: true,
      description:
        "An all-in-one CRM and marketing automation platform for the Australian real estate industry, managing the full sales lifecycle from lead to close.",
      technologies: ["Next.js", "NestJS", "Typescript", "PostgreSQL", "AWS"],
      links: [
        { type: "Website", href: "https://irev.com.au/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Residentia Group B2B Platform",
      href: "https://residentia.group/",
      dates: "2025",
      active: true,
      description:
        "B2B web platform for an Australian appliance distributor, managing global supply chain and after-sales support with inventory and customer service tools.",
      technologies: ["React", "Next.js", "Typescript", "Node.js"],
      links: [
        { type: "Website", href: "https://residentia.group/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Humanised Tech HR Platform",
      href: "https://gethumanised.com/",
      dates: "2024",
      active: true,
      description:
        "Cloud-based HR and payroll platform for Sri Lanka, automating core HR functions and ensuring compliance with local regulations.",
      technologies: ["React", "Node.js", "Typescript"],
      links: [
        { type: "Website", href: "https://gethumanised.com/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Dialog Genie App",
      href: "https://genie.lk/",
      dates: "2024",
      active: true,
      description:
        "A leading Sri Lankan fintech super app integrating digital payments, financial services, and a marketplace for savings, lending, and investment.",
      technologies: ["React Native", "Node.js"],
      links: [
        { type: "Website", href: "https://genie.lk/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Clean Control Hygiene Platform",
      href: "https://zuivertotaalhygiene.nl/",
      dates: "2024",
      active: true,
      description:
        "Hygiene and food safety compliance platform for the Dutch food service industry; digitises, manages, and monitors cleaning protocols with a companion mobile app.",
      technologies: ["React", "Next.js", "Node.js"],
      links: [
        { type: "Website", href: "https://zuivertotaalhygiene.nl/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Takso Outcomes SaaS",
      href: "https://takso-outcomes.com/",
      dates: "2024",
      active: true,
      description:
        "Online SaaS for the cultural sector enabling better planning, execution, and evaluation of project outcomes with survey tools and reporting.",
      technologies: ["React", "Node.js", "Typescript"],
      links: [
        { type: "Website", href: "https://takso-outcomes.com/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "SLIIT Hackathon 2024",
      dates: "2024",
      location: "SLIIT, Sri Lanka",
      description: "Participated in SLIIT Hackathon 2024, placing in the last 10 finalists. Developed innovative solutions within a 24-48 hour timeframe.",
      image: "",
      links: [],
    },
    {
      title: "SLIIT Hackathon 2023",
      dates: "2023",
      location: "SLIIT, Sri Lanka",
      description: "Secured 3rd place at SLIIT Hackathon 2023, building a functional prototype with modern tech stack.",
      image: "",
      win: "3rd Place",
      links: [],
    },
    {
      title: "SLIIT Hackathon 2022",
      dates: "2022",
      location: "SLIIT, Sri Lanka",
      description: "Competed in SLIIT Hackathon 2022, placing in the last 10 finalists. Collaborated with a team to deliver a working solution under time constraints.",
      image: "",
      links: [],
    },
  ],
} as const;
