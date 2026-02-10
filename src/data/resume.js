import perfectaImg from '../assets/projects/perfecta_v2.png';
import eurogripImg from '../assets/projects/eurogrip_v2.png';
import hoosierImg from '../assets/projects/hoosier_v2.png';
import pegasusImg from '../assets/projects/pegasus_v2.png';
import drivingImg from '../assets/projects/driving_app_v2.png';
import splusmImg from '../assets/projects/splusm_v2.png';
import hiddenImg from '../assets/projects/hidden_kingdoms_v2.png';
import pttiImg from '../assets/projects/ptti_v2.png';
import optxImg from '../assets/projects/optx_v2.png';
import spaidImg from '../assets/projects/spaid_v2.png';
import timekeeperImg from '../assets/projects/timekeeper_console_v2.png';
import coachesCornerImg from '../assets/projects/coaches_corner_v2.png';
import spotOnlineImg from '../assets/projects/spot_online_v2.png';
import alkepediaImg from '../assets/projects/alkepedia_v2.png';
import crayfishSfaImg from '../assets/projects/crayfish_sfa_v2.png';
import kiranaStoreImg from '../assets/projects/kiranastore_pos_v2.png';
import tuneemImg from '../assets/projects/tuneem_helpdesk_v2.png';
import iNoCarbonImg from '../assets/projects/i_nocarbon_v2.png';
import audiacademyImg from '../assets/projects/audiacademy_v2.png';
import ultratechImg from '../assets/projects/ultratech_v2.png';
import tvseMealImg from '../assets/projects/tvse_meal_v2.png';
import tvseEposImg from '../assets/projects/tvse_epos_v2.png';
import profileImg from '../assets/profile.png';

export const resumeData = {
  personalInfo: {
    name: "Marlen Franto",
    title: "Senior Mobile Application Developer",
    profileImage: profileImg,
    email: "marlenfranto0716@gmail.com",
    phone: "+91 8098173149",
    location: "Chennai, Tamil Nadu 600043",
    summary: "To obtain a creative and challenging position in an organization that gives me an opportunity for self-improvement and leadership, while contributing to the symbolic growth of the organization with my technical, innovative, and logical skills.",
    social: [
      { name: "GitHub", url: "https://github.com/Marlenfranto" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/marlen-franto-bb2571158/" }
    ]
  },
  experience: [
    {
      company: "Mako IT Lab",
      location: "Chennai, Tamil Nadu",
      period: "January 2024 to Present",
      role: "Senior Software Engineer",
      // Responsibilities inferred from general description or similar roles if not explicitly separated
      description: "Working on advanced mobile applications."
    },
    {
      company: "OPTX",
      location: "Chennai, Tamil Nadu",
      period: "July 2023 to January 2024",
      role: "Senior Software Engineer",
      description: "Developed OPTX mobile app providing on-the-go access to Player Profiles, Live Floor Monitor, and Reservations. Involved in Sprint planning, API integration, UI design, and critical module development."
    },
    {
      company: "CI Global Technologies",
      location: "Chennai, Tamil Nadu",
      period: "May 2021 to June 2023",
      role: "Software Engineer",
      description: "Worked on sports management apps like SPAID and Timekeeper Console. Responsibilities included Sprint planning, API integration, UI design, and Live score streaming."
    },
    {
      company: "RSalesARm Pvt Ltd",
      location: "Chennai, Tamil Nadu",
      period: "May 2019 to May 2021",
      role: "Mobile Application Developer",
      description: "Worked on various Android and Flutter projects including digital learning platforms and sales automation tools."
    }
  ],
  education: [
    {
      degree: "B.C.A (Bachelor of Computer Application)",
      institution: "Don Bosco College, Yelagiri Hills (Affiliated by Thiruvalluvar University)",
      period: "2016-2019",
      details: "First Class with 68.3%"
    },
    {
      degree: "HSC in Computer Science",
      institution: "Don Bosco Higher Secondary School, Varadarajan Pet",
      period: "2016",
      details: "63.75%"
    },
    {
      degree: "SSLC",
      institution: "Little Flower Higher Secondary School, Kumbakonam",
      period: "2014",
      details: "82.8%"
    }
  ],
  skills: {
    languages: ["Java", "Kotlin", "Dart", "Python", "C#", "C", "C++", "PHP", "JavaScript", "SQL"],
    frameworks: ["Flutter", "Android SDK", "Jetpack", "Swift UI", "Django", "QT Framework"],
    web: ["HTML", "CSS", "JSON", "XML", "REST API", "SOAP"],
    tools: ["Android Studio", "VS Code", "Xcode", "Git", "GitHub", "Bitbucket", "Azure DevOps", "Jira", "Trello", "ClickUp", "Firebase"],
    databases: ["MySQL", "SQLite", "PostgreSQL", "PL/SQL"]
  },
  projects: [
    {
      name: "Perfecta – Smart Grilling Companion App",
      image: perfectaImg,
      description: "Architected a high-performance Flutter mobile application integrated with the VIAM SDK to provide real-time control and monitoring for the Perfecta smart grill hardware.",
      techStack: ["Flutter", "VIAM SDK", "Bluetooth/Wi-Fi Protocols"],
      modules: ["Remote Chef Mode", "Live Telemetry System", "Error & Notification Engine", "User Feedback Loop"],
      responsibilities: [
        "Architected and developed the high-performance Flutter application.",
        "Integrated VIAM SDK for real-time robot control and monitoring.",
        "Implemented Bluetooth and Wi-Fi communication protocols."
      ],
      links: []
    },
    {
      name: "Eurogrip – TVS Eurogrip tyre catalog",
      image: eurogripImg,
      description: "Developed a native mobile application for Android and iOS providing instant access to tyre catalog data with offline-first architecture.",
      techStack: ["Flutter", "Serverpod", "MVVM", "SQFlite", "Firebase Remote Config"],
      responsibilities: [
        "Developed the native mobile app using Flutter and Serverpod.",
        "Implemented offline-first architecture using SQFlite.",
        "Integrated Firebase Remote Config for dynamic app updates."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.tvseurogrip.catalogtest" },
        { label: "App Store", url: "https://apps.apple.com/in/app/eurogrip/id6758019844" }
      ]
    },
    {
      name: "Hoosier – Surgical Sales Digital Platform",
      image: hoosierImg,
      description: "Designed and developed a cross-platform mobile app to digitize surgical case management, inventory tracking, and billing.",
      techStack: ["Flutter", "Brother Printers Integration"],
      responsibilities: [
        "Designed and developed the cross-platform application.",
        "Integrated Brother Printers for seamless inventory labeling.",
        "Implemented modules for surgical case management and billing."
      ],
      links: []
    },
    {
      name: "Pegasus – Construction Project Management App",
      image: pegasusImg,
      description: "Developed a mobile extension of an existing web platform for construction project management with offline-first functionality.",
      techStack: ["Flutter", "Intercom", "Segment", "Knock"],
      responsibilities: [
        "Developed the mobile extension for the construction management platform.",
        "Implemented offline functionalities for on-site usage.",
        "Integrated Intercom, Segment, and Knock for enhanced user engagement."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.morfcrop.pegasus" },
        { label: "App Store", url: "https://apps.apple.com/us/app/pegasus-mobile/id6739350999" }
      ]
    },
    {
      name: "Driving App – Ultimate Driving Course Ecosystem",
      image: drivingImg,
      description: "Built a complete digital learning ecosystem for driving education with interactive quizzes and video streaming.",
      techStack: ["Flutter", "Vimeo"],
      responsibilities: [
        "Built the complete digital learning ecosystem using Flutter.",
        "Integrated Vimeo for high-quality video streaming.",
        "Implemented interactive quizzes and progress tracking modules."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.driving.ultimatedriving" },
        { label: "App Store", url: "https://apps.apple.com/us/app/ultimate-driving-course/id6504559690" }
      ]
    },
    {
      name: "SplusM – FoodWays Mobile App",
      image: splusmImg,
      description: "Created a location-based platform to improve community access to food resources.",
      techStack: ["Flutter", "Google Maps"],
      responsibilities: [
        "Created the location-based platform to connect communities.",
        "Integrated Google Maps for precise location tracking and resource finding.",
        "Implemented user-friendly interfaces for resource sharing."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.splusm.foodways" },
        { label: "App Store", url: "https://apps.apple.com/us/app/fooodways/id6748836353" }
      ]
    },
    {
      name: "Hidden Kingdoms – Mindful Navigation App",
      image: hiddenImg,
      description: "Developed a native mobile app to support anxious travelers through mindful navigation using spatial audio and location tracking.",
      techStack: ["Android Jetpack", "iOS SwiftUI"],
      responsibilities: [
        "Developed the native mobile app using Android Jetpack and SwiftUI.",
        "Implemented spatial audio features for mindful navigation.",
        "Integrated location tracking to support anxious travelers."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=uk.org.bom.hidden_kingdoms" },
        { label: "App Store", url: "https://apps.apple.com/gb/app/hidden-kingdoms/id6499024026" }
      ]
    },
    {
      name: "PTTI – Smart Walkie-Talkie Ecosystem",
      image: pttiImg,
      description: "Led full-stack development for IoT-enabled rugged communication devices.",
      techStack: ["Android", "Media Codec"],
      responsibilities: [
        "Led full-stack development for the IoT-enabled communication devices.",
        "Worked on Media Codec for high-quality audio transmission.",
        "Optimized application performance for rugged hardware."
      ],
      links: []
    },
    {
      name: "OPTX",
      image: optxImg,
      description: "Developed OPTX mobile app providing on-the-go access to Player Profiles, Live Floor Monitor, and Reservations. Enables real-time casino floor management and player interaction tracking.",
      techStack: ["Flutter"],
      responsibilities: [
        "Developed Player Profiles and Live Floor Monitor modules.",
        "Involved in API integration and UI/UX design.",
        "Participated in Sprint planning and story estimation."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.optx.optx" },
        { label: "App Store", url: "https://apps.apple.com/nz/app/optx/id1541337661" }
      ]
    },
    {
      name: "SPAID",
      image: spaidImg,
      description: "Digital sports management app for ice hockey.",
      techStack: ["Flutter"],
      responsibilities: [
        "Developed the app for ice hockey digital sports management.",
        "Implemented live score streaming features.",
        "Involved in UI design and REST API integration."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.spaid.ciglobal" },
        { label: "App Store", url: "https://apps.apple.com/pg/app/sports-central/id1588072260" }
      ]
    },
    {
      name: "Timekeeper Console",
      image: timekeeperImg,
      description: "Digital sports management app for tracking game timing and scores.",
      techStack: ["Flutter"],
      responsibilities: [
        "Developed modules for tracking game timing and scores.",
        "Integrated APIs for real-time reliable data synchronization.",
        "Ensured high app performance and responsiveness during games."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.ciglobal.timekeeper" },
        { label: "App Store", url: "https://apps.apple.com/pg/app/timekeeperspaid/id1612315135" }
      ]
    },
    {
      name: "Coaches Corner",
      image: coachesCornerImg,
      description: "Coaches Corner is a digital drill and practices plan creation tool for ice hockey. It allows the user to select rings and draw different shapes and lines, add ice hockey-related images from the list, add coach instructions, and share.",
      techStack: ["Flutter", "Canvas API"],
      responsibilities: [
        "Involved in Sprint planning and story estimation.",
        "Involved in API integration and UI design.",
        "Involved in developing critical modules."
      ],
      links: []
    },
    {
      name: "SPOT Online",
      image: spotOnlineImg,
      description: "SPOT is a Digital Learning Platform that aggregates all the training interventions for an employee within an Enterprise. The training interventions covered are Classroom training, Digital training, and On the Job training (FCQ and ICQ). It also provides an engagement platform for employees to share best practices, and allows leaders to address their workforce about achievements.",
      techStack: ["Android", "SQLite", "FCM", "REST API"],
      responsibilities: [
        "Worked on rest web service and Implemented SQLite for the offline app.",
        "Worked on FCM-based push notification and OTP-based authentication.",
        "Involved in implementing RBAC."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.rsa.synnergy" }
      ]
    },
    {
      name: "Alkepedia",
      image: alkepediaImg,
      description: "Alkepedia is a Digital Learning Platform that aggregates all the training interventions for all types of employees within an Enterprise. The training interventions covered are Classroom training, Digital training, and On the Job training. It also provides an engagement platform for employees to share best practices.",
      techStack: ["Android", "SQLite", "FCM", "REST API"],
      responsibilities: [
        "Worked on rest web service and Implemented SQLite for the offline app.",
        "Worked on FCM-based push notification and OTP-based authentication.",
        "Involved in implementing RBAC."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.rsa.alkemvfive" }
      ]
    },
    {
      name: "CrayFish SFA",
      image: crayfishSfaImg,
      description: "CrayFish is a wholesalers business app. This allows users to purchase products from the shop and pay using a payment gateway and gift cards.",
      techStack: ["Android", "Google Maps API", "Payment Gateway"],
      responsibilities: [
        "Worked on Location capturing with distance Api using GPS, Network Enabled, and Fused Location.",
        "Worked on UI/UX client tracking.",
        "Worked on Full flow functionality of FMCG."
      ],
      links: []
    },
    {
      name: "KiranaStore-POS",
      image: kiranaStoreImg,
      description: "KiranaStore is based on a POS application. This allows users to purchase products from the shop and pay using a payment gateway and gift cards.",
      techStack: ["Android", "Bluetooth SDK", "Barcode Scanner", "Payment Gateway"],
      responsibilities: [
        "Worked on the payment gateway, Bluetooth printing, and barcode scanner.",
        "Worked on UI/UX design.",
        "Worked on Full flow functionality of FMCG."
      ],
      links: []
    },
    {
      name: "Tuneem-HelpDesk",
      image: tuneemImg,
      description: "Ticket tracking system for managing client requirements and bugs.",
      techStack: ["Android", "REST API"],
      responsibilities: [
        "Involved in creating rest API services."
      ],
      links: []
    },
    {
      name: "i-NoCarbon",
      image: iNoCarbonImg,
      description: "i-NoCarbon is used to calculate a person and family's carbon footprint. It will give suggestions on how to reduce your carbon footprint and allows sharing of results.",
      techStack: ["Android", "REST API"],
      responsibilities: [
        "Worked on DB design and Creation.",
        "Worked on rest API service.",
        "Worked on UI design."
      ],
      links: [
        { label: "Website", url: "https://i-nocarbon.com/services/" }
      ]
    },
    {
      name: "Audiacademy",
      image: audiacademyImg,
      description: "Audiacademy is a Digital Assessment platform used by Audi for dealer employee training. The App allows users to view the training assigned, complete assessments & view training scores and progress.",
      techStack: ["Android", "REST API"],
      responsibilities: [
        "Involved in rest API service."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.rsa.audiv5" }
      ]
    },
    {
      name: "UltraTech",
      image: ultratechImg,
      description: "Attendance tracking and distance calculation system.",
      techStack: ["Android", "Location Services"],
      responsibilities: [
        "Involved in location capturing and distance calculation."
      ],
      links: []
    },
    {
      name: "TVS-E Pay Meal",
      image: tvseMealImg,
      description: "TVSEPAY eMeal solutions are designed for IRCTC vendors who distribute food in trains and on platforms. The solution enables vendors to bill travelers for their purchases and aids vendors in the management of waiters, trains, trips, and invoices.",
      techStack: ["Android"],
      responsibilities: [
        "Worked on UI/UX design.",
        "Worked on Full flow functionality of FMCG."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.tvse.meal" }
      ]
    },
    {
      name: "TVSEPAY e-POS",
      image: tvseEposImg,
      description: "The TVSEPAY e-POS application assists retailers with digital invoice generation, payment collection, reconciliation, reporting and business insight, and various hardware access.",
      techStack: ["Android"],
      responsibilities: [
        "Worked on UI/UX design.",
        "Worked on Full flow functionality of FMCG."
      ],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.tvse.tvsepay" }
      ]
    }
  ]
};
