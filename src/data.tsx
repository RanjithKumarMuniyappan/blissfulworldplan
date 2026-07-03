import { BodyIcon, CheckCircleIcon, ConsciousnessIcon, FacebookIcon, InstagramIcon, LinkedInIcon, MindIcon, PlanetIcon, PurposeIcon, RelationshipsIcon, YouTubeIcon } from "./icons";
import type { ActionPointItem, ApproachItem, BenefitItem, CoreAreaItem, DifferentiatorItem, FaqItem, ImpactFrameworkItem, PlanCoreAreaItem, PracticeItem, RepresentativeItem, SocialLinkItem, StoryItem } from "./types";

export const CORE_AREAS_DATA: CoreAreaItem[] = [
  { icon: "assets/icons/Blissful Consciousness.webp", title: 'Blissful Consciousness', description: 'Inner stillness and self-awareness as the foundation of life.', slug: '/plan/core-areas/blissful-consciousness' },
  { icon: "assets/icons/Blissful Mind.webp", title: 'Blissful Mind', description: 'Clarity, emotional balance, clear decision-making.', slug: '/plan/core-areas/blissful-mind' },
  { icon: "assets/icons/Blissful Body.webp", title: 'Blissful Body', description: 'Nutrition, movement, rest, and vitality.', slug: '/plan/core-areas/blissful-body' },
  { icon: "assets/icons/Blissful Relationships.webp", title: 'Blissful Relationships', description: 'Compassion, communication, trust, and community.', slug: '/plan/core-areas/blissful-relationships' },
  { icon: "assets/icons/Blissful Purpose.webp", title: 'Blissful Purpose', description: 'Aligning talents with service and contribution.', slug: '/plan/core-areas/blissful-purpose' },
  { icon: "assets/icons/Blissful Planet.webp", title: 'Blissful Planet', description: 'Living lightly, restoring nature, choosing sustainability.', slug: '/plan/core-areas/blissful-planet' },
];

export const ACTION_POINTS_DATA: ActionPointItem[] = [
    { title: 'Why we are doing this now', description: 'Stress, isolation, and burnout keep rising—people need a clear, proven path back to balance.' },
    { title: 'Why the world needs this', description: 'Polarization, health crises, and environmental strain require a holistic, human-centered response.' },
    { title: 'Why people need to join', description: 'Gain simple daily practices for peace, clarity, and health—and amplify results together.' },
    { title: 'Who it’s for', description: 'Students, professionals, families, elders—anyone seeking harmony, meaning, and service.' },
    { title: 'Why you must join', description: 'Your growth uplifts others. Together, we create peaceful communities and a thriving planet.' },
];

export const PRACTICES_DATA: PracticeItem[] = [
    { title: 'Meditation', description: 'simple guided routines you can keep' },
    { title: 'Health & Vitality', description: 'body rhythm, nutrition basics, rest hygiene' },
    { title: 'Harmony in Relationships', description: 'empathy tools and trust-building' },
    { title: 'Purpose in Action', description: 'discover strengths, serve your community' },
    { title: 'Planet Care', description: 'local green drives and sustainable consumption' },
];

export const STORIES_DATA: StoryItem[] = [
    { quote: "I found calm I can rely on.", author: "Community Member" },
    { quote: "Our family truly listens now.", author: "Participant" },
    { quote: "Small steps made sustainability feel natural.", author: "Volunteer" },
    { quote: "This plan reconnected me to my purpose.", author: "Professional" },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'YouTube', icon: YouTubeIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
];

export const FAQ_DATA: FaqItem[] = [
    { q: "How much time per day?", a: "Start with 10–20 minutes; build gradually." },
    { q: "Do I need prior experience?", a: "No. Guidance is step-by-step, beginner-friendly." },
    { q: "Is there a cost?", a: "Core materials are freely accessible; some programs may have minimal fees to cover logistics." },
];

export const IMPACT_FRAMEWORK_DATA: ImpactFrameworkItem[] = [
    { title: "Mind & Body", items: ["mood steadiness", "better sleep quality", "enhanced energy", "activity adherence"] },
    { title: "Relationships", items: ["empathy", "trust", "conflict prevention and reduction", "social support"] },
    { title: "Purpose", items: ["clarity of mind and direction", "volunteering/service hours"] },
    { title: "Planet", items: ["reduction in waste", "green participation", "plantation of trees on large scale", "save water", "clean-up drives"] },
];

export const OUR_APPROACH_DATA: ApproachItem[] = [
    { title: "Education & Practice", description: "Short, guided practices for daily use (breathing exercises–pranayam, Transcendental Meditation, reflection, simple body routines)." },
    { title: "Community Activation", description: "Small circles, peer support, and local service activities." },
    { title: "Partnerships", description: "Schools, colleges, knowledge centres, workplaces, and civic groups for scaled participation." },
    { title: "Measurement & Learning", description: "Simple well-being check-ins and feedback loops to improve programs." },
    { title: "Accessibility", description: "Low-cost, multilingual materials; online/offline formats." },
];

export const DIFFERENTIATORS_DATA: DifferentiatorItem[] = [
    { title: "Starts within, acts outward", description: "Inner balance that translates into healthier choices and social care." },
    { title: "Simple routines, high retention", description: "15–20 minute practices most people can keep." },
    { title: "Whole-life coverage", description: "Mind, body, relationships, purpose, and planet in one framework." },
    { title: "Community first", description: "People grow faster—and stay consistent—together." },
];

export const REPRESENTATIVES_DATA: RepresentativeItem[] = [
    { id: 1, name: 'Anya Sharma', location: 'Mumbai', country: 'India', imageUrl: 'https://picsum.photos/seed/rep1/300/300' },
    { id: 2, name: 'Ben Carter', location: 'London', country: 'UK', imageUrl: 'https://picsum.photos/seed/rep2/300/300' },
    { id: 3, name: 'Chloe Dubois', location: 'Paris', country: 'France', imageUrl: 'https://picsum.photos/seed/rep3/300/300' },
    { id: 4, name: 'David Kim', location: 'Seoul', country: 'S. Korea', imageUrl: 'https://picsum.photos/seed/rep4/300/300' },
    { id: 5, name: 'Elena Rodriguez', location: 'Madrid', country: 'Spain', imageUrl: 'https://picsum.photos/seed/rep5/300/300' },
    { id: 6, name: 'Fatima Al-Fassi', location: 'Dubai', country: 'UAE', imageUrl: 'https://picsum.photos/seed/rep6/300/300' },
    { id: 7, name: 'Gabriel Costa', location: 'São Paulo', country: 'Brazil', imageUrl: 'https://picsum.photos/seed/rep7/300/300' },
    { id: 8, name: 'Hana Tanaka', location: 'Tokyo', country: 'Japan', imageUrl: 'https://picsum.photos/seed/rep8/300/300' },
    { id: 9, name: 'Ivan Petrov', location: 'Moscow', country: 'Russia', imageUrl: 'https://picsum.photos/seed/rep9/300/300' },
    { id: 10, name: 'Javier Garcia', location: 'Mexico City', country: 'Mexico', imageUrl: 'https://picsum.photos/seed/rep10/300/300' },
    { id: 11, name: 'Ken Okoro', location: 'Lagos', country: 'Nigeria', imageUrl: 'https://picsum.photos/seed/rep11/300/300' },
    { id: 12, name: 'Liam Murphy', location: 'Dublin', country: 'Ireland', imageUrl: 'https://picsum.photos/seed/rep12/300/300' },
    { id: 13, name: 'Mei Lin', location: 'Shanghai', country: 'China', imageUrl: 'https://picsum.photos/seed/rep13/300/300' },
    { id: 14, name: 'Nora Schmidt', location: 'Berlin', country: 'Germany', imageUrl: 'https://picsum.photos/seed/rep14/300/300' },
    { id: 15, name: 'Olivia Chen', location: 'Sydney', country: 'Australia', imageUrl: 'https://picsum.photos/seed/rep15/300/300' },
    { id: 16, name: 'Pedro Santos', location: 'Lisbon', country: 'Portugal', imageUrl: 'https://picsum.photos/seed/rep16/300/300' },
    { id: 17, name: 'Quinn Taylor', location: 'Toronto', country: 'Canada', imageUrl: 'https://picsum.photos/seed/rep17/300/300' },
    { id: 18, name: 'Rania Zadeh', location: 'Cairo', country: 'Egypt', imageUrl: 'https://picsum.photos/seed/rep18/300/300' },
    { id: 19, name: 'Sofia Rossi', location: 'Rome', country: 'Italy', imageUrl: 'https://picsum.photos/seed/rep19/300/300' },
    { id: 20, name: 'Tom Miller', location: 'New York', country: 'USA', imageUrl: 'https://picsum.photos/seed/rep20/300/300' },
];

export const PLAN_CORE_AREAS_DATA: PlanCoreAreaItem[] = [
  { 
    icon: ConsciousnessIcon, 
    title: 'Blissful Consciousness', 
    aim: 'Inner stillness and self-awareness as the foundation of life.', 
    practices: [
        "15–20 min guided breath/meditation daily",
        "60-second silence between activities",
        "Evening reflection: “What brought peace today?”"
    ]
  },
  { 
    icon: MindIcon, 
    title: 'Blissful Mind', 
    aim: 'Clarity, emotional balance, mindful decisions.', 
    practices: [
      "5-minute focus reset (timed) before deep work",
      "Journaling prompt: name the feeling; choose a response",
      "Digital hygiene: 2 no-screen windows/day"
    ]
  },
  { 
    icon: BodyIcon, 
    title: 'Blissful Body', 
    aim: 'Nutrition, movement, rest, and vitality.', 
    practices: [
      "20-minute movement routine (walk, stretch, yoga)",
      "Hydration target + whole-food plate at one meal",
      "Sleep rhythm: consistent wind-down and wake time"
    ]
  },
  { 
    icon: RelationshipsIcon, 
    title: 'Blissful Relationships', 
    aim: 'Compassion, communication, trust, community.', 
    practices: [
      "Daily gratitude to one person (message or in person)",
      "Listen-first check-ins; reflect back before replying",
      "One device-free meal or conversation each day"
    ]
  },
  { 
    icon: PurposeIcon, 
    title: 'Blissful Purpose', 
    aim: 'Align talents with service and contribution.', 
    practices: [
      "Strengths map (3 strengths × weekly use)",
      "“Why” statement (1–2 lines) refined monthly",
      "2 hours/week of learning or service aligned to values"
    ]
  },
  { 
    icon: PlanetIcon, 
    title: 'Blissful Planet', 
    aim: 'Live lightly, restore nature, choose sustainability.', 
    practices: [
      "Personal waste/energy mini-audit (one habit to improve)",
      "Weekly green action (tree/clean-up/repair/reuse)",
      "Mindful consumption rule (pause before purchase)"
    ]
  }
];

export const HOW_PLAN_WORKS_DATA: ApproachItem[] = [
    { title: "Education & Practice", description: "Short, guided routines you can keep." },
    { title: "Circles", description: "Small peer groups that meet weekly/fortnightly." },
    { title: "Programs", description: "Intro tracks, deep-dive modules, and local service." },
    { title: "Partnerships", description: "Schools, workplaces, and civic groups." },
    { title: "Accessibility", description: "Low-cost, multilingual, online/offline paths." }
];

export const MEASURING_PROGRESS_DATA: ImpactFrameworkItem[] = [
    { title: "Mind & Body", items: ["mood steadiness", "better sleep", "enhanced energy", "fruitful activity"] },
    { title: "Relationships", items: ["empathy", "trust", "conflict prevention and reduction"] },
    { title: "Purpose", items: ["clarity", "contribution hours"] },
    { title: "Planet", items: ["waste reduction", "green actions"] }
];

export const PLAN_FAQ_DATA: FaqItem[] = [
    { q: "Do I need prior experience?", a: "No—everything is beginner-friendly." },
    { q: "How much time per day?", a: "Start with 15–20 minutes." },
    { q: "Is it religious?", a: "No. It’s practical and inclusive for all." },
    { q: "Is there a cost?", a: "Core materials are free; some programs may have minimal fees for logistics." }
];

export const JOIN_BENEFITS_DATA: BenefitItem[] = [
    { icon: CheckCircleIcon, title: "Guided Practices", description: "Access a library of simple, effective routines for daily calm and clarity." },
    { icon: RelationshipsIcon, title: "Supportive Community", description: "Connect with local circles and online groups to share and grow together." },
    { icon: PurposeIcon, title: "Structured Programs", description: "Follow clear, step-by-step guides to integrate the plan into your life." },
    { icon: PlanetIcon, title: "Meaningful Impact", description: "Participate in service activities that care for your community and the planet." },
];