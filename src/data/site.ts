import type { ImageMetadata } from 'astro';

import profileImage from '../assets/profile-galaxy-v2.png';
import perfectaImg from '../assets/projects/realistic/perfecta-realistic.png';
import eurogripImg from '../assets/projects/realistic/eurogrip-realistic.png';
import hoosierImg from '../assets/projects/realistic/hoosier-realistic.png';
import pegasusImg from '../assets/projects/realistic/pegasus-realistic.png';
import drivingImg from '../assets/projects/realistic/driving-app-realistic.png';
import splusmImg from '../assets/projects/realistic/splusm-realistic.png';
import hiddenImg from '../assets/projects/realistic/hidden-kingdoms-realistic.png';
import pttiImg from '../assets/projects/realistic/ptti-realistic.png';
import optxImg from '../assets/projects/realistic/optx-realistic.png';
import spaidImg from '../assets/projects/realistic/spaid-realistic.png';
import timekeeperImg from '../assets/projects/realistic/timekeeper-console-realistic.png';
import coachesCornerImg from '../assets/projects/realistic/coaches-corner-realistic.png';
import spotOnlineImg from '../assets/projects/realistic/spot-online-realistic.png';
import alkepediaImg from '../assets/projects/realistic/alkepedia-realistic.png';
import crayfishSfaImg from '../assets/projects/realistic/crayfish-sfa-realistic.png';
import kiranaStoreImg from '../assets/projects/realistic/kiranastore-pos-realistic.png';
import tuneemImg from '../assets/projects/realistic/tuneem-helpdesk-realistic.png';
import iNoCarbonImg from '../assets/projects/realistic/i-nocarbon-realistic.png';
import audiacademyImg from '../assets/projects/realistic/audiacademy-realistic.png';
import ultratechImg from '../assets/projects/realistic/ultratech-realistic.png';
import tvseMealImg from '../assets/projects/realistic/tvse-meal-realistic.png';
import tvseEposImg from '../assets/projects/realistic/tvse-epos-realistic.png';

export type SiteConfig = {
  url: 'https://www.marlenfranto.com';
  name: 'Marlen Franto';
  role: string;
  location: 'Chennai, India';
  availability: 'Open to India-based and global roles';
  email: string;
  social: {
    linkedin: string;
    github: string;
    stackOverflow?: string;
  };
  defaultSocialImage: string;
};

export type DeliveryDetails = {
  clientContext: string;
  discovery: string[];
  projectPlan: string[];
  sprintResponsibilities: string[];
  estimationApproach: string[];
  communicationCadence: string[];
  risksAndDependencies: string[];
  followUps: string[];
  releaseResponsibilities: string[];
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  role: string;
  period: string;
  platforms: string[];
  technologies: string[];
  heroImage: ImageMetadata;
  heroAlt: string;
  gallery: { image: ImageMetadata; alt: string }[];
  challenge: string;
  constraints: string[];
  approach: string[];
  responsibilities: string[];
  outcomes: string[];
  links: { label: string; url: string }[];
  publishedDate: string;
  updatedDate: string;
  featured: boolean;
  order: number;
  draft: boolean;
  caseStudy: boolean;
  delivery?: DeliveryDetails;
};

type ExperienceGroup = {
  company: string;
  location: string;
  period: string;
  role: string;
  bullets: {
    technical: string[];
    delivery: string[];
    communication: string[];
    coordination: string[];
    outcome: string[];
  };
};

type PortfolioSignal = {
  label: string;
  title: string;
  detail: string;
  evidence: string;
};

export const siteConfig: SiteConfig = {
  url: 'https://www.marlenfranto.com',
  name: 'Marlen Franto',
  role: 'Senior Flutter & Full-Stack Mobile Engineer',
  location: 'Chennai, India',
  availability: 'Open to India-based and global roles',
  email: 'marlenfranto0716@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/marlen-franto-bb2571158/',
    github: 'https://github.com/Marlenfranto',
  },
  defaultSocialImage: '/social-card.svg',
};

export const profile = {
  image: profileImage,
  title: 'Marlen Franto | Senior Flutter & Full-Stack Mobile Engineer',
  headline: 'Building Mobile Experiences That Work Beyond the Network.',
  summary:
    'Senior Flutter and full-stack mobile engineer with 7+ years across Android, iOS, Web, desktop, Serverpod APIs, analytics, offline-first, GIS, BLE, and cloud.',
  locationLine: 'Chennai, India · Open to India-based and global roles',
  resumePath: '/marlen-franto-resume.pdf',
};

export const deliveryCapabilities = [
  {
    title: 'Discovery to scope',
    detail:
      'Clarifies client requirements, maps business needs to mobile scope, and turns decisions into sprint-ready stories and acceptance criteria.',
    proof: 'Supported by senior delivery work on Perfecta, Pegasus, Eurogrip, and OPTX case studies.',
  },
  {
    title: 'Planning and ETA communication',
    detail:
      'Prepares milestones, estimates, sprint plans, and delivery ETAs while communicating progress, dependencies, blockers, and revised timelines.',
    proof: 'Experience data includes sprint planning, story estimation, API planning, and stakeholder-ready release coordination.',
  },
  {
    title: 'Client demos and follow-ups',
    detail:
      'Runs demos, captures feedback, tracks action items, and keeps follow-ups structured so engineering decisions stay connected to product goals.',
    proof: 'Case-study delivery sections document demos, feedback handling, follow-up actions, and release-readiness support.',
  },
  {
    title: 'Cross-functional release delivery',
    detail:
      'Coordinates mobile work across design, backend, QA, DevOps, and product teams through release planning, app-store submissions, and post-release monitoring.',
    proof: 'Public projects span Flutter, native Android, SwiftUI, Serverpod APIs, product analytics, IoT hardware, offline-first apps, and real-time dashboards.',
  },
];

export const portfolioSignals: PortfolioSignal[] = [
  {
    label: 'Role fit',
    title: 'Senior Flutter + full-stack delivery',
    detail: 'Builds production Flutter products while owning API integration, Serverpod API work, release readiness, and platform decisions.',
    evidence: 'Hero, resume, case studies, and skills now consistently position Marlen around full-stack mobile engineering.',
  },
  {
    label: 'Platform breadth',
    title: 'Android, iOS, Web, macOS, Windows, Linux',
    detail: 'Works across mobile-first Flutter delivery with experience extending product surfaces beyond phone-only releases.',
    evidence: 'Platform breadth is visible in the hero proof strip, skills constellation, About page, and resume.',
  },
  {
    label: 'Systems depth',
    title: 'Offline-first, GIS, BLE, analytics, cloud',
    detail: 'Frames projects through real constraints: sync, local storage, connected devices, product events, maps, APIs, and operational workflows.',
    evidence: 'Architecture Lab and case studies show the system shape behind the finished apps.',
  },
  {
    label: 'Client confidence',
    title: 'Planning, ETA reporting, demos, follow-ups',
    detail: 'Connects engineering delivery with stakeholder communication, sprint planning, risks, reviews, and release coordination.',
    evidence: 'Delivery sections and experience bullets support client-facing leadership without unsupported metrics.',
  },
];

export const skills = {
  'Flutter Platforms': ['Flutter', 'Dart', 'Android', 'iOS', 'Web', 'macOS', 'Windows', 'Linux'],
  Architecture: ['BLoC', 'Riverpod', 'Provider', 'GetX', 'Clean Architecture', 'MVVM', 'Offline-first'],
  'API & Cloud': ['Serverpod API development', 'REST APIs', 'Firebase', 'Azure', 'AWS', 'Remote Config', 'Push notifications'],
  'Data & Analytics': ['SQLite', 'SQFlite', 'Firestore', 'PostgreSQL', 'Local caching', 'Synchronization', 'Google Analytics', 'Meta events', 'Twilio Segment', 'Intercom events'],
  Specialized: ['ArcGIS', 'GIS', 'BLE', 'Bluetooth', 'CameraX', 'OpenCV', 'Video', 'PDF', 'Annotations', 'Payments'],
  DevOps: ['Git', 'GitHub', 'Bitbucket', 'Azure DevOps', 'CI/CD', 'Google Play', 'App Store'],
  'Leadership & Delivery': [
    'Client communication',
    'Requirements discovery',
    'Project planning',
    'Sprint planning',
    'Estimation and ETA management',
    'Stakeholder reporting',
    'Risk and dependency management',
    'Cross-functional coordination',
    'Client demonstrations',
    'Release planning',
    'Follow-ups and action tracking',
  ],
  Tools: ['Android Studio', 'Xcode', 'VS Code', 'Jira', 'Trello', 'ClickUp'],
};

export const engineeringCapabilities = [
  {
    title: 'Full-Stack Flutter Products',
    summary: 'Flutter apps paired with API development, integrations, analytics events, and release-ready platform delivery.',
    signal: 'Flutter · Serverpod · Analytics',
  },
  {
    title: 'Multi-Platform App Delivery',
    summary: 'Flutter and native product work across Android, iOS, Web, macOS, Windows, and Linux surfaces.',
    signal: 'Android · iOS · Web · Desktop',
  },
  {
    title: 'Offline-First Systems',
    summary: 'Mobile workflows designed to remain useful through weak connectivity, interrupted sync, and recovery states.',
    signal: 'SQLite · Cache · Sync queues',
  },
  {
    title: 'Enterprise Applications',
    summary: 'Complex permissions, forms, reporting, operational workflows, APIs, and cross-team integrations.',
    signal: 'Architecture · APIs · Delivery',
  },
  {
    title: 'Product Analytics & Events',
    summary: 'Event tracking and user-behavior instrumentation across Google Analytics, Meta events, Twilio Segment, and Intercom.',
    signal: 'GA · Meta · Segment · Intercom',
  },
  {
    title: 'Hardware-Connected Apps',
    summary: 'Applications that communicate with devices through BLE, Bluetooth, Wi-Fi, and native platform SDKs.',
    signal: 'BLE · SDKs · Telemetry',
  },
  {
    title: 'GIS Applications',
    summary: 'Location-aware field products with maps, layers, offline data, and synchronization workflows.',
    signal: 'ArcGIS · Location · Offline maps',
  },
  {
    title: 'Media & Document Workflows',
    summary: 'Camera, image processing, video, PDF, and annotation experiences built for real operational use.',
    signal: 'CameraX · OpenCV · PDF',
  },
];

export const experience: ExperienceGroup[] = [
  {
    company: 'Mako IT Lab',
    location: 'Chennai, India',
    period: 'January 2024 to Present',
    role: 'Senior Software Engineer',
    bullets: {
      technical: ['Leads full-stack Flutter delivery across Android, iOS, Web, macOS, Windows, and Linux surfaces, including Serverpod API development, analytics instrumentation, and advanced mobile applications across hardware, catalog, construction, and community products.'],
      delivery: ['Prepares delivery plans, milestone breakdowns, implementation scope, and release-readiness checkpoints for mobile work.'],
      communication: ['Works directly with stakeholders to clarify requirements, communicate progress, document blockers, align follow-up actions, and connect product events to measurable user behavior.'],
      coordination: ['Coordinates mobile implementation with backend, design, QA, and product contributors through sprint planning and review cycles.'],
      outcome: ['Shipped and supported public products across Play Store, App Store, web, and desktop targets with offline-first, native, connected-device, API, and product-analytics requirements.'],
    },
  },
  {
    company: 'OPTX',
    location: 'Chennai, India',
    period: 'July 2023 to January 2024',
    role: 'Senior Software Engineer',
    bullets: {
      technical: ['Developed Flutter modules for player profiles, live floor monitoring, reservations, API integration, and mobile UI workflows.'],
      delivery: ['Participated in sprint planning, story estimation, and critical-module sequencing for real-time casino operations features.'],
      communication: ['Shared progress, integration dependencies, and implementation constraints with product and technical stakeholders.'],
      coordination: ['Worked with API and product teams to align mobile screens with operational data and real-time usage expectations.'],
      outcome: ['Helped deliver on-the-go casino operations access through a production mobile app available on public app stores.'],
    },
  },
  {
    company: 'CI Global Technologies',
    location: 'Chennai, India',
    period: 'May 2021 to June 2023',
    role: 'Software Engineer',
    bullets: {
      technical: ['Built Flutter sports-management products including SPAID, Timekeeper Console, live score streaming, API integration, and UI workflows.'],
      delivery: ['Supported sprint planning, story estimation, implementation sequencing, and release preparation for sports operations products.'],
      communication: ['Clarified feature behavior with stakeholders and translated live-scoring requirements into mobile implementation tasks.'],
      coordination: ['Coordinated mobile work with backend and QA teams to keep event timing and scoring flows reliable during active games.'],
      outcome: ['Delivered mobile tools used for ice-hockey management, timing, score tracking, drills, and team operations.'],
    },
  },
  {
    company: 'RSalesArm Pvt Ltd',
    location: 'Chennai, India',
    period: 'May 2019 to May 2021',
    role: 'Mobile Application Developer',
    bullets: {
      technical: ['Developed Android and Flutter products across digital learning, sales automation, POS, support, and field-operation workflows.'],
      delivery: ['Converted assigned client requirements and bug reports into implementation tasks across REST APIs, local storage, and hardware integrations.'],
      communication: ['Worked with project stakeholders to clarify UI behavior, offline data needs, RBAC, push notifications, and operational flows.'],
      coordination: ['Partnered with backend and QA teams on API integration, database behavior, payment, barcode, Bluetooth printing, and release support.'],
      outcome: ['Contributed to mobile products for enterprise learning, FMCG workflows, digital invoices, attendance, and environmental reporting.'],
    },
  },
];

const sharedDelivery = (clientContext: string, focus: string): DeliveryDetails => ({
  clientContext,
  discovery: [
    `Clarified product goals, users, and the mobile workflows that mattered most for ${focus}.`,
    'Converted approved requirements into implementation scope, feature notes, and release checkpoints.',
  ],
  projectPlan: [
    'Broke mobile delivery into milestones covering core flows, integrations, QA, store readiness, and post-release checks.',
    'Kept scope visible so new feedback could be triaged without losing release focus.',
  ],
  sprintResponsibilities: [
    'Supported sprint planning, feature sequencing, story estimation, and acceptance-criteria preparation.',
    'Kept implementation tasks connected to API readiness, design states, and QA coverage.',
  ],
  estimationApproach: [
    'Prepared practical delivery estimates based on integration complexity, platform differences, and testing risk.',
    'Communicated ETA changes when blockers, dependency shifts, or feedback affected the plan.',
  ],
  communicationCadence: [
    'Shared progress, blockers, dependencies, and implementation decisions with stakeholders during delivery.',
    'Used demos and review points to gather feedback before release-critical decisions became expensive.',
  ],
  risksAndDependencies: [
    'Tracked API readiness, third-party SDK behavior, device differences, offline behavior, and app-store requirements.',
    'Escalated blockers with context, impact, and proposed next actions.',
  ],
  followUps: [
    'Captured client feedback, meeting notes, action items, and next decisions after reviews.',
    'Closed the loop on changes through implementation notes, QA handoff, and release follow-up.',
  ],
  releaseResponsibilities: [
    'Prepared release builds, store-facing checks, and post-release monitoring support where applicable.',
    'Coordinated fixes and follow-up actions after QA, stakeholder review, or public release feedback.',
  ],
});

export const projects: Project[] = [
  {
    slug: 'perfecta-smart-grill-flutter',
    title: 'Perfecta - Smart Grilling Companion App',
    shortTitle: 'Perfecta',
    summary: 'Flutter mobile app integrated with VIAM SDK, Bluetooth, and Wi-Fi protocols for real-time smart-grill control and monitoring.',
    seoTitle: 'Perfecta Flutter Case Study | Smart Grill Mobile App',
    seoDescription: 'A Flutter case study covering connected hardware, VIAM SDK integration, mobile delivery planning, stakeholder communication, and release support.',
    role: 'Lead Mobile Engineer',
    period: '2024',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'Dart', 'VIAM SDK', 'Bluetooth', 'Wi-Fi protocols'],
    heroImage: perfectaImg,
    heroAlt: 'Realistic visual of a smart grill companion app with connected hardware telemetry',
    gallery: [{ image: perfectaImg, alt: 'Realistic Perfecta project visual with grill controls and live telemetry' }],
    challenge: 'Create a reliable mobile control surface for connected grill hardware where real-time status, notifications, and device behavior needed careful coordination.',
    constraints: ['Hardware communication required resilient state handling.', 'SDK and device behavior needed testing across mobile platforms.', 'User feedback and error states had to be clear during active cooking sessions.'],
    approach: ['Built a Flutter architecture for device state, telemetry, notifications, and control flows.', 'Integrated VIAM SDK and wireless communication paths with user-facing status handling.', 'Structured implementation around demos, review feedback, and release-readiness checks.'],
    responsibilities: ['Architected and developed the Flutter application.', 'Integrated VIAM SDK for real-time robot control and monitoring.', 'Implemented Bluetooth and Wi-Fi communication protocols.', 'Supported planning, estimation, stakeholder updates, feedback follow-ups, and release coordination.'],
    outcomes: ['Delivered the mobile foundation for remote chef mode, live telemetry, error notifications, and user feedback loops.', 'Improved stakeholder visibility through milestone planning, demos, and tracked follow-up actions.'],
    links: [],
    publishedDate: '2026-09-16',
    updatedDate: '2026-09-16',
    featured: true,
    order: 1,
    draft: false,
    caseStudy: true,
    delivery: sharedDelivery('Connected-hardware product requiring close coordination between mobile app behavior, SDK integration, device feedback, and release readiness.', 'smart grill control'),
  },
  {
    slug: 'eurogrip-offline-first-flutter',
    title: 'Eurogrip - TVS Eurogrip Tyre Catalog',
    shortTitle: 'Eurogrip',
    summary: 'Offline-first Flutter catalog app for Android and iOS with SQFlite storage, Serverpod integration, and Firebase Remote Config.',
    seoTitle: 'Eurogrip Offline-First Flutter Case Study',
    seoDescription: 'A case study on delivering an offline-first tyre catalog app with Flutter, SQFlite, Serverpod, Remote Config, planning, ETA reporting, and release support.',
    role: 'Lead Mobile Engineer',
    period: '2024',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'Serverpod', 'MVVM', 'SQFlite', 'Firebase Remote Config'],
    heroImage: eurogripImg,
    heroAlt: 'Realistic visual of an offline tyre catalog app with sync and product data',
    gallery: [{ image: eurogripImg, alt: 'Realistic Eurogrip project visual with offline catalog and synchronization cues' }],
    challenge: 'Make tyre catalog data available quickly and reliably on mobile devices, including when field usage requires offline access.',
    constraints: ['Catalog data needed local persistence and sync-friendly behavior.', 'Remote configuration had to support controlled updates.', 'The app needed release parity across Android and iOS.'],
    approach: ['Implemented offline-first storage using SQFlite and a clear MVVM structure.', 'Used Serverpod and Remote Config integration to support dynamic catalog behavior.', 'Planned milestones around data access, offline behavior, QA, and store release readiness.'],
    responsibilities: ['Developed the Flutter app using Serverpod and MVVM.', 'Implemented offline-first catalog behavior with SQFlite.', 'Integrated Firebase Remote Config for dynamic updates.', 'Prepared delivery scope, sprint tasks, ETA communication, demos, and release follow-ups.'],
    outcomes: ['Released public Android and iOS catalog apps.', 'Provided a field-friendly app experience with offline catalog access and controlled update paths.'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.tvseurogrip.catalogtest' },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/eurogrip/id6758019844' },
    ],
    publishedDate: '2026-09-16',
    updatedDate: '2026-09-16',
    featured: true,
    order: 2,
    draft: false,
    caseStudy: true,
    delivery: sharedDelivery('Tyre-catalog product where mobile delivery had to align business catalog needs, offline behavior, platform release checks, and stakeholder review.', 'offline catalog access'),
  },
  {
    slug: 'pegasus-construction-mobile-app',
    title: 'Pegasus - Construction Project Management App',
    shortTitle: 'Pegasus',
    summary: 'Mobile extension of a construction project management platform with offline functionality and Intercom, Segment, and Knock integrations.',
    seoTitle: 'Pegasus Construction Mobile App Case Study',
    seoDescription: 'A case study on Flutter construction project management, offline mobile workflows, product coordination, sprint planning, ETA updates, and release readiness.',
    role: 'Lead Mobile Engineer',
    period: '2024',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'Intercom', 'Segment', 'Knock', 'Offline workflows'],
    heroImage: pegasusImg,
    heroAlt: 'Realistic visual of a construction project management mobile app with field workflows',
    gallery: [{ image: pegasusImg, alt: 'Realistic Pegasus project visual with job-site planning and mobile workflow panels' }],
    challenge: 'Bring construction project workflows from an existing web platform into a mobile app that remains useful on job sites.',
    constraints: ['Mobile workflows needed to stay aligned with an existing web product.', 'On-site usage required offline-friendly behavior.', 'Multiple engagement and notification integrations had to work together cleanly.'],
    approach: ['Developed a Flutter mobile extension around the highest-value field workflows.', 'Integrated Intercom, Segment, and Knock while protecting the core project-management experience.', 'Sequenced work through planning, demos, feedback, and release checkpoints.'],
    responsibilities: ['Developed the mobile extension for the construction management platform.', 'Implemented offline functionalities for on-site usage.', 'Integrated Intercom, Segment, and Knock.', 'Managed mobile scope, sprint sequencing, ETA updates, stakeholder demos, and follow-up actions.'],
    outcomes: ['Released public Android and iOS apps for mobile project management.', 'Improved field access to platform workflows with offline-capable mobile behavior.'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.morfcrop.pegasus' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/pegasus-mobile/id6739350999' },
    ],
    publishedDate: '2026-09-16',
    updatedDate: '2026-09-16',
    featured: true,
    order: 3,
    draft: false,
    caseStudy: true,
    delivery: sharedDelivery('Construction platform extension requiring alignment across existing product behavior, job-site usage, integrations, QA, and store release.', 'field project management'),
  },
  {
    slug: 'hidden-kingdoms-native-mobile-app',
    title: 'Hidden Kingdoms - Native Mobile App',
    shortTitle: 'Hidden Kingdoms',
    summary: 'Native Android Jetpack and iOS SwiftUI app supporting mindful navigation with spatial audio and location tracking.',
    seoTitle: 'Hidden Kingdoms Native Mobile App Case Study',
    seoDescription: 'A native mobile case study covering Android Jetpack, SwiftUI, mindful navigation, spatial audio, location tracking, planning, review, and release support.',
    role: 'Lead Mobile Engineer',
    period: '2024',
    platforms: ['Android', 'iOS'],
    technologies: ['Android Jetpack', 'SwiftUI', 'Location services', 'Spatial audio'],
    heroImage: hiddenImg,
    heroAlt: 'Realistic visual of mindful navigation with spatial audio and location paths',
    gallery: [{ image: hiddenImg, alt: 'Realistic Hidden Kingdoms project visual with calm navigation and spatial-audio cues' }],
    challenge: 'Support anxious travelers with a mobile experience that combines navigation, location awareness, and spatial audio in a calm interface.',
    constraints: ['Native implementations needed platform-specific care.', 'Location and audio behavior had to be reliable and understandable.', 'User experience needed to remain calm while handling permissions and movement.'],
    approach: ['Built native Android and iOS experiences using Jetpack and SwiftUI.', 'Integrated location tracking and spatial audio as core product behaviors.', 'Used review cycles to refine sensitive user flows and release readiness.'],
    responsibilities: ['Developed native Android and iOS apps.', 'Implemented spatial audio and location tracking features.', 'Coordinated planning, feedback capture, platform QA, release tasks, and post-review follow-ups.'],
    outcomes: ['Released public Android and iOS apps for mindful navigation.', 'Delivered platform-native behavior for location-driven audio experiences.'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=uk.org.bom.hidden_kingdoms' },
      { label: 'App Store', url: 'https://apps.apple.com/gb/app/hidden-kingdoms/id6499024026' },
    ],
    publishedDate: '2026-09-16',
    updatedDate: '2026-09-16',
    featured: true,
    order: 4,
    draft: false,
    caseStudy: true,
    delivery: sharedDelivery('Mindful travel product requiring sensitive user-flow review, native platform decisions, location/audio testing, and store-release coordination.', 'mindful navigation'),
  },
  {
    slug: 'optx-real-time-casino-operations',
    title: 'OPTX - Real-Time Casino Operations',
    shortTitle: 'OPTX',
    summary: 'Flutter app for on-the-go access to player profiles, live floor monitoring, reservations, and real-time casino operations data.',
    seoTitle: 'OPTX Real-Time Casino Operations Flutter Case Study',
    seoDescription: 'A Flutter case study covering real-time operational dashboards, API integration, sprint planning, stakeholder reporting, blockers, and release support.',
    role: 'Senior Software Engineer',
    period: '2023 to 2024',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'REST APIs', 'Real-time dashboards'],
    heroImage: optxImg,
    heroAlt: 'Realistic visual of real-time casino operations dashboards and mobile floor monitoring',
    gallery: [{ image: optxImg, alt: 'Realistic OPTX project visual with live operations and dashboard panels' }],
    challenge: 'Give casino teams mobile access to operational modules where live context, player information, and reservations needed fast, reliable interaction.',
    constraints: ['Real-time operational data needed careful API integration.', 'Critical modules required sequencing across sprint planning and stakeholder review.', 'Mobile workflows needed to remain usable under active floor-management conditions.'],
    approach: ['Developed player profiles, live floor monitor, and reservation modules in Flutter.', 'Aligned API integration, UI design, and sprint priorities with product needs.', 'Communicated dependencies and progress through planning and review cycles.'],
    responsibilities: ['Developed Player Profiles and Live Floor Monitor modules.', 'Handled API integration and UI implementation.', 'Participated in sprint planning and story estimation.', 'Reported blockers, dependencies, ETA shifts, and implementation progress.'],
    outcomes: ['Released public Android and iOS app access to real-time casino operations workflows.', 'Improved mobile availability for player profiles, live floor monitoring, and reservations.'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.optx.optx' },
      { label: 'App Store', url: 'https://apps.apple.com/nz/app/optx/id1541337661' },
    ],
    publishedDate: '2026-09-16',
    updatedDate: '2026-09-16',
    featured: true,
    order: 5,
    draft: false,
    caseStudy: true,
    delivery: sharedDelivery('Operational mobile product where sprint planning, API dependencies, stakeholder updates, and release-quality modules were central to delivery.', 'real-time casino operations'),
  },
];

const additionalProjects: Omit<Project, 'caseStudy' | 'delivery' | 'gallery' | 'publishedDate' | 'updatedDate' | 'featured' | 'draft'>[] = [
  {
    slug: 'hoosier-surgical-sales-platform',
    title: 'Hoosier - Surgical Sales Digital Platform',
    shortTitle: 'Hoosier',
    summary: 'Cross-platform mobile app for surgical case management, inventory tracking, billing, and Brother printer integration.',
    seoTitle: 'Hoosier Surgical Sales Mobile App',
    seoDescription: 'Cross-platform surgical sales mobile app built with Flutter and printer integration.',
    role: 'Mobile Application Developer',
    period: '2024',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'Brother Printers Integration'],
    heroImage: hoosierImg,
    heroAlt: 'Realistic visual of surgical case management, inventory, billing, and printer workflows',
    challenge: 'Digitize surgical case, inventory, and billing workflows for mobile users.',
    constraints: ['Inventory labels and case workflows required dependable hardware integration.'],
    approach: ['Built cross-platform flows for case management, billing, and inventory labels.'],
    responsibilities: ['Designed and developed the cross-platform app.', 'Integrated Brother printers for inventory labeling.', 'Implemented surgical case management and billing modules.'],
    outcomes: ['Supported mobile surgical-sales operations with case, inventory, and billing workflows.'],
    links: [],
    order: 6,
  },
  {
    slug: 'driving-app-learning-ecosystem',
    title: 'Driving App - Ultimate Driving Course Ecosystem',
    shortTitle: 'Driving App',
    summary: 'Flutter learning ecosystem for driving education with video streaming, quizzes, and learner progress flows.',
    seoTitle: 'Ultimate Driving Course Flutter App',
    seoDescription: 'Flutter driving education app with video streaming, interactive quizzes, and progress tracking.',
    role: 'Mobile Application Developer',
    period: '2024',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'Vimeo'],
    heroImage: drivingImg,
    heroAlt: 'Realistic visual of a driving education app with video lessons, quizzes, and progress tracking',
    challenge: 'Create a structured mobile learning experience for driving education.',
    constraints: ['Video, quiz, and progress flows needed to work together without confusing learners.'],
    approach: ['Integrated Vimeo, quiz interactions, and progress tracking in a Flutter app.'],
    responsibilities: ['Built the Flutter learning ecosystem.', 'Integrated Vimeo streaming.', 'Implemented quizzes and progress tracking.'],
    outcomes: ['Released public Android and iOS learning apps.'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.driving.ultimatedriving' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/ultimate-driving-course/id6504559690' },
    ],
    order: 7,
  },
  {
    slug: 'splusm-foodways-mobile-app',
    title: 'SplusM - FoodWays Mobile App',
    shortTitle: 'SplusM FoodWays',
    summary: 'Location-based Flutter app helping communities find and share food resources through Google Maps.',
    seoTitle: 'FoodWays Flutter Mobile App',
    seoDescription: 'Location-based Flutter app with Google Maps for community food-resource access.',
    role: 'Mobile Application Developer',
    period: '2024',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'Google Maps'],
    heroImage: splusmImg,
    heroAlt: 'Realistic visual of a location-based food resource app with map discovery',
    challenge: 'Improve access to food resources through location-aware mobile workflows.',
    constraints: ['Maps, resource locations, and usability had to stay clear for community users.'],
    approach: ['Built location-aware resource sharing and discovery workflows with Google Maps.'],
    responsibilities: ['Created the location-based platform.', 'Integrated Google Maps.', 'Implemented resource sharing interfaces.'],
    outcomes: ['Released public Android and iOS community-resource apps.'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.splusm.foodways' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/fooodways/id6748836353' },
    ],
    order: 8,
  },
  {
    slug: 'ptti-smart-walkie-talkie',
    title: 'PTTI - Smart Walkie-Talkie Ecosystem',
    shortTitle: 'PTTI',
    summary: 'Android communication product for IoT-enabled rugged devices, audio transmission, and hardware performance.',
    seoTitle: 'PTTI Android Walkie Talkie App',
    seoDescription: 'Android rugged-device communication app using media codec and IoT-enabled workflows.',
    role: 'Mobile Application Developer',
    period: '2023',
    platforms: ['Android'],
    technologies: ['Android', 'Media Codec'],
    heroImage: pttiImg,
    heroAlt: 'Realistic visual of rugged IoT communication hardware with audio telemetry',
    challenge: 'Support rugged communication devices with reliable audio behavior.',
    constraints: ['Device performance and audio behavior needed careful optimization.'],
    approach: ['Worked on Android communication flows and media codec behavior.'],
    responsibilities: ['Led full-stack development for IoT-enabled devices.', 'Worked on Media Codec audio transmission.', 'Optimized rugged hardware performance.'],
    outcomes: ['Supported communication-device workflows for rugged usage.'],
    links: [],
    order: 9,
  },
  {
    slug: 'spaid-sports-management',
    title: 'SPAID',
    shortTitle: 'SPAID',
    summary: 'Flutter sports-management app for ice hockey with live score streaming and team operations features.',
    seoTitle: 'SPAID Sports Management Flutter App',
    seoDescription: 'Flutter sports-management app with live score streaming, UI design, and REST API integration.',
    role: 'Software Engineer',
    period: '2021 to 2023',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'REST APIs'],
    heroImage: spaidImg,
    heroAlt: 'Realistic visual of hockey sports management with live scores and team operations',
    challenge: 'Bring ice-hockey team and event management into mobile workflows.',
    constraints: ['Live scoring and team information required dependable data integration.'],
    approach: ['Built Flutter modules and integrated live score APIs.'],
    responsibilities: ['Developed the ice-hockey management app.', 'Implemented live score streaming.', 'Handled UI design and API integration.'],
    outcomes: ['Released public Android and iOS sports-management apps.'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.spaid.ciglobal' },
      { label: 'App Store', url: 'https://apps.apple.com/pg/app/sports-central/id1588072260' },
    ],
    order: 10,
  },
  {
    slug: 'timekeeper-console',
    title: 'Timekeeper Console',
    shortTitle: 'Timekeeper Console',
    summary: 'Flutter sports operations app for game timing, score tracking, and real-time synchronization.',
    seoTitle: 'Timekeeper Console Flutter App',
    seoDescription: 'Flutter sports timing app for game timing, scores, and reliable synchronization.',
    role: 'Software Engineer',
    period: '2021 to 2023',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'REST APIs'],
    heroImage: timekeeperImg,
    heroAlt: 'Realistic visual of a sports timing console with score synchronization',
    challenge: 'Support timing and score tracking during live sports events.',
    constraints: ['Timing and score data needed to remain responsive and reliable.'],
    approach: ['Built timing modules and API synchronization flows.'],
    responsibilities: ['Developed timing and scoring modules.', 'Integrated APIs for data synchronization.', 'Maintained app performance during games.'],
    outcomes: ['Released public Android and iOS timekeeper apps.'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.ciglobal.timekeeper' },
      { label: 'App Store', url: 'https://apps.apple.com/pg/app/timekeeperspaid/id1612315135' },
    ],
    order: 11,
  },
  {
    slug: 'coaches-corner',
    title: 'Coaches Corner',
    shortTitle: 'Coaches Corner',
    summary: 'Flutter coaching tool for ice-hockey drill and practice-plan creation with canvas drawing features.',
    seoTitle: 'Coaches Corner Flutter App',
    seoDescription: 'Flutter ice-hockey coaching app with canvas tools for drill and practice-plan creation.',
    role: 'Software Engineer',
    period: '2021 to 2023',
    platforms: ['Android', 'iOS'],
    technologies: ['Flutter', 'Canvas API'],
    heroImage: coachesCornerImg,
    heroAlt: 'Realistic visual of a hockey coaching tool with drill planning and canvas drawing',
    challenge: 'Give coaches a mobile way to create, annotate, and share drill plans.',
    constraints: ['Canvas interactions needed to feel responsive on touch devices.'],
    approach: ['Built drawing, asset placement, and sharing workflows.'],
    responsibilities: ['Supported sprint planning and story estimation.', 'Integrated APIs and UI flows.', 'Developed critical modules.'],
    outcomes: ['Delivered mobile drill-planning workflows for hockey coaches.'],
    links: [],
    order: 12,
  },
  {
    slug: 'spot-online',
    title: 'SPOT Online',
    shortTitle: 'SPOT Online',
    summary: 'Android digital learning platform for enterprise training, engagement, RBAC, offline storage, and notifications.',
    seoTitle: 'SPOT Online Android Learning App',
    seoDescription: 'Android enterprise learning app using SQLite, FCM, REST APIs, OTP authentication, and RBAC.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android', 'SQLite', 'FCM', 'REST APIs'],
    heroImage: spotOnlineImg,
    heroAlt: 'Realistic visual of an enterprise learning app with training modules and offline access',
    challenge: 'Aggregate enterprise training and engagement workflows into a mobile learning app.',
    constraints: ['Offline storage, notifications, OTP, and RBAC needed to support enterprise usage.'],
    approach: ['Implemented REST integration, local storage, push notifications, and access-control flows.'],
    responsibilities: ['Worked on REST services and SQLite offline app behavior.', 'Worked on FCM push notifications and OTP authentication.', 'Implemented RBAC-related mobile flows.'],
    outcomes: ['Supported enterprise learning and employee engagement workflows.'],
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.rsa.synnergy' }],
    order: 13,
  },
  {
    slug: 'alkepedia',
    title: 'Alkepedia',
    shortTitle: 'Alkepedia',
    summary: 'Android digital learning platform for enterprise training, on-the-job learning, engagement, and offline access.',
    seoTitle: 'Alkepedia Android Learning App',
    seoDescription: 'Android enterprise learning app using SQLite, FCM, REST APIs, OTP authentication, and RBAC.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android', 'SQLite', 'FCM', 'REST APIs'],
    heroImage: alkepediaImg,
    heroAlt: 'Realistic visual of a digital learning knowledge library with mobile training modules',
    challenge: 'Support training and engagement workflows for enterprise employees.',
    constraints: ['Enterprise learning needed offline storage, notifications, authentication, and role-based behavior.'],
    approach: ['Implemented Android data, notification, API, and RBAC flows.'],
    responsibilities: ['Worked on REST services and SQLite offline app behavior.', 'Worked on FCM push notifications and OTP authentication.', 'Implemented RBAC-related mobile flows.'],
    outcomes: ['Supported digital learning and employee engagement on Android.'],
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.rsa.alkemvfive' }],
    order: 14,
  },
  {
    slug: 'crayfish-sfa',
    title: 'CrayFish SFA',
    shortTitle: 'CrayFish SFA',
    summary: 'Android wholesale business app with purchasing, payment, gift-card, location, and FMCG workflow support.',
    seoTitle: 'CrayFish SFA Android App',
    seoDescription: 'Android wholesale business app with payments, GPS location, maps, and FMCG workflows.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android', 'Google Maps API', 'Payment Gateway'],
    heroImage: crayfishSfaImg,
    heroAlt: 'Realistic visual of a sales force automation app for wholesale field workflows',
    challenge: 'Support wholesalers with mobile purchasing and field workflows.',
    constraints: ['Payments, location capture, and FMCG flows required reliable Android implementation.'],
    approach: ['Implemented location, UI, and purchase-flow functionality.'],
    responsibilities: ['Worked on GPS, network, and fused-location capture.', 'Worked on UI and client tracking.', 'Built FMCG workflow functionality.'],
    outcomes: ['Supported mobile wholesale operations and field tracking.'],
    links: [],
    order: 15,
  },
  {
    slug: 'kiranastore-pos',
    title: 'KiranaStore-POS',
    shortTitle: 'KiranaStore POS',
    summary: 'Android POS application with payment, barcode scanner, Bluetooth printing, and retail workflow support.',
    seoTitle: 'KiranaStore POS Android App',
    seoDescription: 'Android POS app with payment gateway, Bluetooth printing, barcode scanning, and retail workflows.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android', 'Bluetooth SDK', 'Barcode Scanner', 'Payment Gateway'],
    heroImage: kiranaStoreImg,
    heroAlt: 'Realistic visual of a retail POS app with barcode, payment, and Bluetooth printing workflows',
    challenge: 'Support retail purchases, payments, and print workflows on Android.',
    constraints: ['Hardware integrations needed stable interaction with POS flows.'],
    approach: ['Built payment, barcode, Bluetooth printing, and UI workflows.'],
    responsibilities: ['Worked on payment gateway integration.', 'Implemented Bluetooth printing and barcode scanner behavior.', 'Built retail workflow functionality.'],
    outcomes: ['Supported mobile POS workflows for retailers.'],
    links: [],
    order: 16,
  },
  {
    slug: 'tuneem-helpdesk',
    title: 'Tuneem-HelpDesk',
    shortTitle: 'Tuneem HelpDesk',
    summary: 'Android ticket tracking system for managing client requirements and bug reports.',
    seoTitle: 'Tuneem HelpDesk Android App',
    seoDescription: 'Android ticket tracking app for client requirements and bug management.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android', 'REST APIs'],
    heroImage: tuneemImg,
    heroAlt: 'Realistic visual of a helpdesk app with ticket tracking and bug workflow panels',
    challenge: 'Track client requirements and bugs through mobile support workflows.',
    constraints: ['Ticket data needed clear API-backed behavior.'],
    approach: ['Implemented Android flows connected to REST API services.'],
    responsibilities: ['Created REST API service integrations.'],
    outcomes: ['Supported requirement and bug tracking workflows.'],
    links: [],
    order: 17,
  },
  {
    slug: 'i-nocarbon',
    title: 'i-NoCarbon',
    shortTitle: 'i-NoCarbon',
    summary: 'Android carbon-footprint calculator with suggestions and sharing flows.',
    seoTitle: 'i-NoCarbon Android App',
    seoDescription: 'Android carbon footprint app with database design, REST APIs, suggestions, and sharing.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android', 'REST APIs'],
    heroImage: iNoCarbonImg,
    heroAlt: 'Realistic visual of a carbon-footprint app with sustainability and analytics cues',
    challenge: 'Help users calculate and share carbon-footprint information.',
    constraints: ['Calculation data and suggestions required clear database and API behavior.'],
    approach: ['Built database, API, and UI flows for carbon-footprint reporting.'],
    responsibilities: ['Worked on database design and creation.', 'Worked on REST API services.', 'Worked on UI design.'],
    outcomes: ['Supported carbon-footprint calculation, suggestions, and sharing.'],
    links: [{ label: 'Website', url: 'https://i-nocarbon.com/services/' }],
    order: 18,
  },
  {
    slug: 'audiacademy',
    title: 'Audiacademy',
    shortTitle: 'Audiacademy',
    summary: 'Android digital assessment app for dealer employee training, assigned assessments, scores, and progress.',
    seoTitle: 'Audiacademy Android Assessment App',
    seoDescription: 'Android digital assessment app for dealer training, assessments, scores, and progress tracking.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android', 'REST APIs'],
    heroImage: audiacademyImg,
    heroAlt: 'Realistic visual of a dealer training and assessment app with progress tracking',
    challenge: 'Bring dealer training assessments and progress tracking to Android.',
    constraints: ['Training, assessment, score, and progress flows needed API-backed behavior.'],
    approach: ['Integrated REST API services for training and assessment workflows.'],
    responsibilities: ['Implemented REST API service integrations.'],
    outcomes: ['Supported dealer training assessment workflows.'],
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.rsa.audiv5' }],
    order: 19,
  },
  {
    slug: 'ultratech',
    title: 'UltraTech',
    shortTitle: 'UltraTech',
    summary: 'Android attendance tracking and distance calculation app using location services.',
    seoTitle: 'UltraTech Android Attendance App',
    seoDescription: 'Android attendance tracking app using location capture and distance calculation.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android', 'Location Services'],
    heroImage: ultratechImg,
    heroAlt: 'Realistic visual of attendance tracking and distance calculation using mobile location services',
    challenge: 'Track attendance and distance through mobile location behavior.',
    constraints: ['Location capture needed reliable distance calculations.'],
    approach: ['Implemented location capture and distance-calculation flows.'],
    responsibilities: ['Implemented location capture and distance calculation.'],
    outcomes: ['Supported mobile attendance and distance tracking.'],
    links: [],
    order: 20,
  },
  {
    slug: 'tvsepay-meal',
    title: 'TVSEPAY eMeal',
    shortTitle: 'TVSEPAY eMeal',
    summary: 'Android food vendor billing and trip-management app for IRCTC train and platform meal operations.',
    seoTitle: 'TVSEPAY eMeal Android App',
    seoDescription: 'Android meal billing app for vendors with waiter, train, trip, invoice, and payment workflows.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android'],
    heroImage: tvseMealImg,
    heroAlt: 'Realistic visual of food vendor billing and train trip meal operations',
    challenge: 'Support train and platform food vendors with mobile billing and operations.',
    constraints: ['Vendor billing, waiter, train, trip, and invoice workflows needed mobile clarity.'],
    approach: ['Built UI and FMCG workflow functionality for vendor operations.'],
    responsibilities: ['Worked on UI design.', 'Built full-flow FMCG functionality.'],
    outcomes: ['Supported food-vendor billing and operations workflows.'],
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.tvse.meal' }],
    order: 21,
  },
  {
    slug: 'tvsepay-epos',
    title: 'TVSEPAY e-POS',
    shortTitle: 'TVSEPAY e-POS',
    summary: 'Android e-POS application for digital invoices, payment collection, reconciliation, reporting, and hardware access.',
    seoTitle: 'TVSEPAY e-POS Android App',
    seoDescription: 'Android e-POS app for invoice generation, payments, reconciliation, reporting, and hardware access.',
    role: 'Mobile Application Developer',
    period: '2019 to 2021',
    platforms: ['Android'],
    technologies: ['Android'],
    heroImage: tvseEposImg,
    heroAlt: 'Realistic visual of an e-POS app with invoices, payments, reconciliation, and reports',
    challenge: 'Help retailers handle invoices, payments, reconciliation, reporting, and hardware workflows on mobile.',
    constraints: ['Business and hardware workflows needed to remain dependable for POS usage.'],
    approach: ['Built UI and FMCG workflow functionality for e-POS operations.'],
    responsibilities: ['Worked on UI design.', 'Built full-flow FMCG functionality.'],
    outcomes: ['Supported digital invoice, payment, reconciliation, and reporting workflows.'],
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.tvse.tvsepay' }],
    order: 22,
  },
];

export const allProjects: Project[] = [
  ...projects,
  ...additionalProjects.map((project) => ({
    ...project,
    gallery: [{ image: project.heroImage, alt: project.heroAlt }],
    publishedDate: '2026-09-16',
    updatedDate: '2026-09-16',
    featured: false,
    draft: false,
    caseStudy: false,
  })),
].sort((a, b) => a.order - b.order);

export const visibleProjects = allProjects.filter((project) => !project.draft);
export const featuredCaseStudies = visibleProjects.filter((project) => project.caseStudy && project.featured);

export const education = [
  {
    degree: 'B.C.A (Bachelor of Computer Application)',
    institution: 'Don Bosco College, Yelagiri Hills',
    period: '2016 to 2019',
    details: 'First Class with 68.3%',
  },
  {
    degree: 'HSC in Computer Science',
    institution: 'Don Bosco Higher Secondary School, Varadarajan Pet',
    period: '2016',
    details: '63.75%',
  },
  {
    degree: 'SSLC',
    institution: 'Little Flower Higher Secondary School, Kumbakonam',
    period: '2014',
    details: '82.8%',
  },
];

export const insightArticles = [
  {
    slug: 'offline-first-flutter-apps',
    title: 'Designing Offline-First Flutter Apps: Sync, Cache, and Recovery',
    description:
      'A practical field guide to planning offline-first Flutter apps, from local data models and sync decisions to client ETA communication and release risk.',
    publishedDate: '2026-09-16',
    updatedDate: '2026-09-16',
  },
  {
    slug: 'flutter-native-sdks-connected-hardware',
    title: 'Integrating Flutter with Native SDKs and Connected Hardware',
    description: 'Article planned for the monthly publishing queue.',
    publishedDate: '',
    updatedDate: '',
    draft: true,
  },
  {
    slug: 'real-time-mobile-dashboards',
    title: 'Building Reliable Real-Time Mobile Dashboards',
    description: 'Article planned for the monthly publishing queue.',
    publishedDate: '',
    updatedDate: '',
    draft: true,
  },
  {
    slug: 'estimating-mobile-projects-etas',
    title: 'Estimating Mobile Projects and Communicating Realistic ETAs',
    description: 'Article planned for the monthly publishing queue.',
    publishedDate: '',
    updatedDate: '',
    draft: true,
  },
  {
    slug: 'effective-sprint-reviews',
    title: 'Running Effective Sprint Reviews with Technical and Client Teams',
    description: 'Article planned for the monthly publishing queue.',
    publishedDate: '',
    updatedDate: '',
    draft: true,
  },
  {
    slug: 'mobile-release-risks',
    title: 'Managing Mobile Release Risks Across Android and iOS',
    description: 'Article planned for the monthly publishing queue.',
    publishedDate: '',
    updatedDate: '',
    draft: true,
  },
];
