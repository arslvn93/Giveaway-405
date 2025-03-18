// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwfGVufDB8fHx8MTc0MjI0NDc5M3ww&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1627627256672-027a4613d028?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsJTIwfGVufDB8fHx8MTc0MjI0NDc5M3ww&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwzfHxiYXNrZXRiYWxsJTIwfGVufDB8fHx8MTc0MjI0NDc5M3ww&ixlib=rb-4.0.3", 
];

export const prizeContent = {
  title: "$100 Family Barber Shop Gift Card",
  description: "Win a $100 gift card to our featured local barber shop—the perfect treat for a family day out. Enjoy a stylish haircut for your little ones or a fresh look for yourself, all while supporting a cherished community business.",
  features: [
    "Fresh new styles for the whole family",
    "Experience excellence at a beloved local barber shop",
    "Support a community favorite",
    "Simple entry process, no purchase necessary",
    "Exclusive offer available from March 19 to April 7, 2025",
  ],
  value: "$100",
};

// Header section
export const headerContent = {
  title: "Win a $100 Family Gift Card to [Local Barber Shop Name]!",
  description: "Treat your family to a fresh new look and a fun day out! Enter now for your chance to win a $100 gift card to our featured local barber shop. No purchase necessary.",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
  secondaryImage: prizeImages[1], // Add secondary image for the header
};

// Navigation section
export const navigationContent = {
  title: "Family Gift Card Giveaway",
  links: [
    { name: 'Home', href: '#' },
    { name: 'Prize Details', href: '#prize' },
    { name: 'How to Enter', href: '#howToEnter' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ]
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description: "Treat your family to a stylish experience! Follow these simple steps to enter our $100 gift card giveaway.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Enter your name and email address in the form and submit it."
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description: "Share this giveaway on social media for extra entries."
    },
    {
      icon: "Users",
      title: "Confirm Entry",
      description: "Check your email to confirm your entry and you're all set!"
    }
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Takes less than a minute" 
    },
    { 
      icon: "Trophy", 
      title: "Multiple Entries", 
      desc: "Share for more chances" 
    },
    { 
      icon: "Gift", 
      title: "Premium Prize", 
      desc: "Valued at $100" 
    }
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText: "By entering, you agree to our Terms & Conditions and Privacy Policy."
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry."
  },
  currentEntries: 0
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description: "Please review the following rules and eligibility requirements before entering the giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer: "Anyone 18 years or older located in our community can enter this giveaway."
    },
    {
      question: "How long does the giveaway run?",
      answer: "This giveaway runs from March 19, 2025 to April 7, 2025, as indicated by the countdown timer."
    },
    {
      question: "How will the winner be selected?",
      answer: "The winner will be selected randomly from all valid entries. We use a certified random selection tool to ensure fairness."
    },
    {
      question: "When and how will the winner be notified?",
      answer: "The winner will be notified via email within 48 hours after the giveaway ends. They must respond within 72 hours to claim their prize."
    },
    {
      question: "How many times can I enter?",
      answer: "Each person may enter once. Additional entries can be earned through sharing on social media (up to 3 additional entries)."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we take privacy seriously. Your information will only be used for this giveaway and will not be shared with third parties."
    },
  ],
  imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share on social media for additional entry opportunities",
    "Set a calendar reminder for the drawing date"
  ],
  importantNotice: "All winners will be contacted via the email provided during entry. Make sure to check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "support@giveaway.com",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF"
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  brokerage: {
    name: "Sales Genius Realty",
    address: "123 Main Street, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy"
};

// Footer section
export const footerContent = {
  aboutText: "The Sales Genius Giveaway specializes in offering exclusive community deals and family-friendly prizes.",
  email: "arslan@salesgenius.co",
  phone: "4166554850",
  quickLinks: ["Home", "About", "Listings", "Contact", "Privacy Policy"],
  newsletterText: "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "Sales Genius Realty",
    address: "123 Main Street, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "Sales Genius Realty",
  privacyPolicyText: "Privacy Policy"
};

// Countdown
export const countdownContent = {
  endDate: new Date("April 7, 2025")
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: 'amber-600',
    light: 'amber-400',
    dark: 'amber-800',
    gradient: 'from-amber-500 to-amber-700',
    text: 'amber-700',
    textLight: 'amber-500',
    textDark: 'amber-900',
    hover: 'amber-700',
    border: 'amber-200',
    background: 'amber-50',
    accent: 'amber-100',
    accentDark: 'amber-300',
  },
  secondary: {
    main: 'white',
    text: 'gray-700',
    textLight: 'gray-600',
    textDark: 'gray-800',
    border: 'gray-200',
    background: 'white',
    accent: 'gray-100',
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100',
  },
  gradients: {
    header: 'from-amber-100/70 via-amber-50/40 to-transparent',
    countdownBg: 'from-amber-800 to-amber-950',
    countdownText: 'from-amber-200 to-amber-400',
    prizeTitle: 'from-amber-700 to-amber-500',
    button: 'from-amber-500 to-amber-600',
    buttonHover: 'from-amber-600 to-amber-700',
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(251,191,36,0.3)]',
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
  }
};