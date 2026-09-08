export const SITE_CONFIG = {
  name: "CNI Global",
  shortName: "CNI",
  description:
    "Your trusted partner for visa consulting, international travel, and global opportunities.",
  url: "https://cniglobal.com",
  email: "info@cniglobal.com",
  phone: "+94 77 000 0000",
  location: "Sri Lanka",
} as const;

export const COLORS = {
  primary: "#0F4C81",
  primaryDark: "#0B355A",
  primaryLight: "#EAF3FA",

  accent: "#FF6B57",
  accentDark: "#E65342",
  accentLight: "#FFF0ED",

  dark: "#0E1726",
  light: "#F8FAFC",
  white: "#FFFFFF",

  border: "#E2E8F0",
  muted: "#64748B",
  text: "#334155",
  textLight: "#94A3B8",

  success: "#16A34A",
  warning: "#F59E0B",
  error: "#DC2626",
} as const;

export const NAVIGATION_LINKS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Destinations",
    href: "#destinations",
  },
  {
    label: "About Us",
    href: "#about",
  },

  {
    label: "Contact",
    href: "#footer",
  },
] as const;

export const HERO_CONTENT = {
  eyebrow: "Your Journey Starts Here",
  title: "Explore the World With Confidence",
  description:
    "We help you turn your international travel dreams into reality with reliable visa consulting, travel guidance, and personalized support.",
  primaryButton: {
    label: "Explore Destinations",
    href: "#destinations",
  },
  secondaryButton: {
    label: "Contact Us",
    href: "#contact",
  },
} as const;

export const HERO_IMAGES = [
  {
    id: "1541417904950-b855846fe074",
    alt: "Tropical beach",
    width: 340,
    height: 290,
  },
  {
    id: "1533240332313-0db49b459ad6",
    alt: "Mountain hike",
    width: 340,
    height: 180,
  },
  {
    id: "1766938975952-a97583120896",
    alt: "Cultural temple",
    width: 340,
    height: 200,
  },
  {
    id: "1619118986411-29b465253365",
    alt: "Palm beach",
    width: 340,
    height: 260,
  },
] as const;

export const TRUST_STATS = [
  {
    value: 10,
    label: "Years of Experience",
     icon : '+'
  },
  {
    value: 5.000,
    label: "Successful Applications",
    icon : '+'
  },
  {
    value: 25,
    label: "Destination Countries",
    icon : '+'
  },
  {
    value: 98,
    label: "Client Satisfaction",
    icon : '%'
  },
] as const;

export const DESTINATIONS = [
  {
    header: "United Kingdom",
    imageUrl:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=85",
    duration: 7,
    rating: 4.9,
    category: "cultural",
    price: 1200,
  },
  {
    header: "Australia",
    imageUrl:
      "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: 10,
    rating: 4.8,
    category: "adventure",
    price: 1800,
  },
  {
    header: "Canada",
    imageUrl:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=85",
    duration: 8,
    rating: 4.9,
    category: "luxury",
    price: 1500,
  },
  {
    header: "Europe",
    imageUrl:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=85",
    duration: 12,
    rating: 4.7,
    category: "Beach",
    price: 2000,
  },
] as const;

export const FEATURES = [
  {
    title: "Expert Guidance",
    description:
      "Get reliable advice from experienced consultants throughout your journey.",
    icon: "compass",
  },
  {
    title: "Personalized Support",
    description:
      "Every application is handled according to your individual goals and requirements.",
    icon: "users",
  },
  {
    title: "Transparent Process",
    description:
      "Understand every step of the process with clear communication and honest guidance.",
    icon: "file-check",
  },
  {
    title: "Higher Confidence",
    description:
      "Prepare your documents correctly and submit your application with confidence.",
    icon: "shield-check",
  },
] as const;

export const MISSION_CONTENT = {
  eyebrow: "Our Mission",
  title: "Making Global Opportunities Accessible",
  description:
    "Our mission is to make international travel and migration simpler, clearer, and more accessible. We guide our clients through every stage with professionalism, transparency, and care.",
  button: {
    label: "Learn More About Us",
    href: "#about",
  },
} as const;

export const GOALS = [
  {
    number: "01",
    title: "Simplify the Process",
    description:
      "Remove confusion from visa applications through clear guidance and organized documentation.",
  },
  {
    number: "02",
    title: "Build Trust",
    description:
      "Maintain honest communication and provide dependable support from start to finish.",
  },
  {
    number: "03",
    title: "Create Opportunities",
    description:
      "Help clients access education, careers, travel, and new experiences around the world.",
  },
] as const;

export const SERVICES = [
  {
    title: "Visa Consultation",
    description:
      "Professional guidance to help you understand visa requirements and application procedures.",
    icon: "passport",
  },
  {
    title: "Document Assistance",
    description:
      "Support with preparing, reviewing, and organizing the documents required for your application.",
    icon: "files",
  },
  {
    title: "Travel Consultation",
    description:
      "Personalized travel planning and destination advice for your international journey.",
    icon: "plane",
  },
  {
    title: "Application Support",
    description:
      "Step-by-step assistance throughout the application and submission process.",
    icon: "clipboard-check",
  },
] as const;

export const PACKAGES = [
  {
    name: "Basic",
    description: "Ideal for clients who need initial guidance.",
    price: "$80",
    popular: false,
    features: [
      "Initial consultation",
      "Visa requirement overview",
      "Basic document checklist",
      "General application guidance",
    ],
    buttonLabel: "Choose Basic",
    href: "#contact",
  },
  {
    name: "Standard",
    description: "Complete support for a smoother application.",
    price: "$150",
    popular: true,
    features: [
      "Everything in Basic",
      "Detailed document review",
      "Personalized application guidance",
      "Application preparation support",
      "Email and phone assistance",
    ],
    buttonLabel: "Choose Standard",
    href: "#contact",
  },
  {
    name: "Premium",
    description: "End-to-end assistance for your journey.",
    price: "$250",
    popular: false,
    features: [
      "Everything in Standard",
      "Complete application support",
      "Personalized consultation sessions",
      "Priority communication",
      "Pre-submission review",
      "Travel preparation guidance",
    ],
    buttonLabel: "Choose Premium",
    href: "#contact",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Fernando",
    role: "Student Visa Applicant",
    message:
      "The team made the entire process simple and easy to understand. Their guidance gave me confidence throughout my application.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=85",
  },
  {
    name: "Dilan Perera",
    role: "Travel Visa Applicant",
    message:
      "The service was professional, transparent, and very helpful. I received clear answers whenever I had questions.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=85",
  },
  {
    name: "Nethmi Silva",
    role: "Migration Consultation Client",
    message:
      "I appreciated the personalized support and attention to detail. The team helped me prepare everything properly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=85",
  },
] as const;

export const CTA_CONTENT = {
  title: "Ready to Start Your Journey?",
  description:
    "Let our experienced team help you take the next step toward your international goals.",
  button: {
    label: "Get Started Today",
    href: "#contact",
  },
} as const;

export const FOOTER_LINKS = {
  company: [
    {
      label: "About Us",
      href: "#about",
    },
    {
      label: "Our Services",
      href: "#services",
    },
    {
      label: "Destinations",
      href: "#destinations",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  services: [
    {
      label: "Visa Consultation",
      href: "#services",
    },
    {
      label: "Document Assistance",
      href: "#services",
    },
    {
      label: "Travel Consultation",
      href: "#services",
    },
    {
      label: "Application Support",
      href: "#services",
    },
  ],
  legal: [
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms and Conditions",
      href: "/terms",
    },
  ],
} as const;

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
] as const;

export const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.15,
  viewportAmount: 0.2,
} as const;

export const IMAGE_CONFIG = {
  unsplashBaseUrl: "https://images.unsplash.com/photo-",
  defaultQuality: 85,
} as const;

export function getUnsplashImage(
  id: string,
  width = 800,
  height?: number,
  quality = IMAGE_CONFIG.defaultQuality,
) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(width),
    q: String(quality),
  });

  if (height) {
    params.set("h", String(height));
  }

  return `${IMAGE_CONFIG.unsplashBaseUrl}${id}?${params.toString()}`;
}
