export interface Program {
  id: string;
  number: string;
  name: string;
  target: string;
  duration: string;
  description: string;
  focus: string[];
}

export interface Coach {
  name: string;
  role: string;
  experience: string;
  credentials: string;
  bio: string;
  imageBrief: string;
}

export interface CaseStudy {
  name: string;
  age: number;
  profession: string;
  timeframe: string;
  startingState: string;
  resultState: string;
  honestNote: string;
  metric: string;
}

export interface PricingPlan {
  name: string;
  duration: string;
  price: string;
  rawPrice: number;
  cadence: string;
  isPopular?: boolean;
  features: string[];
  note: string;
}

export interface TimetableSlot {
  time: string;
  programId: string;
  programName: string;
  days: string[]; // "Mon-Sat", "Tue/Thu/Sat", etc.
  coach: string;
  isWomensOnly?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "IRONWORKS STRENGTH CLUB",
  city: "Kanpur",
  tagline: "BUILT, NOT GIVEN.",
  subTagline: "Raw, disciplined barbell strength and conditioning. Zero gimmicks, zero mirrors-for-selfies nonsense.",
  whatsapp: "+91 90000 00000",
  whatsappLink: "https://wa.me/919000000000?text=Hi%20IRONWORKS%20Kanpur%2C%20I%20want%20to%20book%20a%20free%20trial%20strength%20session.",
  phone: "+91 512 230 4499",
  address: "Plot 14/112, Mall Road, Opp. Green Park Gate 3, Civil Lines, Kanpur, UP 208001",
  hours: "Mon – Sat: 05:00 – 23:00 | Sun: 07:00 – 12:00",
  trustMetrics: [
    { label: "Active Lifters", value: "500+" },
    { label: "Strength Coaches", value: "8" },
    { label: "Daily Access", value: "5AM – 11PM" },
    { label: "Competition Platforms", value: "6 IPF Spec" },
  ],
};

export const PROGRAMS: Program[] = [
  {
    id: "strength-hypertrophy",
    number: "01",
    name: "BARBELL STRENGTH & HYPERTROPHY",
    target: "Lifters seeking structural mass, tendon density, and raw compound power.",
    duration: "75 MIN",
    description: "Periodized linear progression around the big four: Squat, Bench, Deadlift, and Overhead Press. Supplemental volume programmed with Eleiko barbells and calibrated iron.",
    focus: ["Periodized Block Loading", "RPE-based Autoregulation", "Barbell Mechanics Auditing"],
  },
  {
    id: "functional-conditioning",
    number: "02",
    name: "FUNCTIONAL ENGINE & CONDITIONING",
    target: "Athletes building aerobic threshold, grit, and high-work-capacity stamina.",
    duration: "60 MIN",
    description: "High-density intervals combining rogue Echo bikes, Concept2 rowers, sandbag carries, and kettlebell complexes. Built for work capacity, not burn-out fatigue.",
    focus: ["Zone 2 & Zone 5 Conditioning", "Strongman Carries", "Lactate Threshold Expansion"],
  },
  {
    id: "powerlifting",
    number: "03",
    name: "COMPETITIVE POWERLIFTING",
    target: "Tested athletes aiming for state/national platform totals.",
    duration: "90-120 MIN",
    description: "Specialized powerlifting coaching under IPF-compliant specs. Calibrated plates, Texas power bars, combo racks, and meet-day peaking strategies.",
    focus: ["Pause & Pin Variants", "Command Protocol Mastery", "Peaking & Attempt Selection"],
  },
  {
    id: "womens-strength",
    number: "04",
    name: "WOMEN'S STRENGTH BATCH",
    target: "Women demanding barbell mastery, progressive overload, and uncompromising coaching.",
    duration: "60 MIN",
    description: "Dedicated coach-led hours focusing on heavy compound lifting, hip hinge mechanics, bone density development, and functional capacity. Zero pink dumbbells.",
    focus: ["Form & Depth Mastery", "Compound Barbell Confidence", "Dedicated Female Strength Lead"],
  },
  {
    id: "personal-coaching",
    number: "05",
    name: "1-ON-1 COACH APPRENTICESHIP",
    target: "Individuals with severe structural imbalances, rehab protocols, or elite target goals.",
    duration: "60 MIN",
    description: "Bespoke programming by head coach. Includes video bar-path velocity tracking, nutritional intake oversight, and customized mobility prep.",
    focus: ["Biomechanical Form Breakdown", "Individual Load Prescription", "Weekly Velocity Auditing"],
  },
];

export const COACHES: Coach[] = [
  {
    name: "VIKRAM SINGH RATHORE",
    role: "HEAD STRENGTH COACH & FOUNDER",
    experience: "12 YRS COACHING",
    credentials: "CSCS, National Powerlifting Medallist (-93kg)",
    bio: "Former UP state powerlifting gold medallist. Has trained 40+ national qualifiers. Unforgiving on squat depth, obsessive about barbell mechanics.",
    imageBrief: "Lifter chalking hands over knurled bar, hard side industrial spotlight, gritty Kanpur warehouse gym, intense focus, monochrome.",
  },
  {
    name: "PRIYA KANNOJIA",
    role: "HEAD OF WOMEN'S STRENGTH",
    experience: "8 YRS COACHING",
    credentials: "USAW Level 2, FMS Certified",
    bio: "Specializes in posterior chain biomechanics and postpartum return-to-load lifting. Runs Kanpur's most disciplined women's barbell cohort.",
    imageBrief: "Female strength coach adjusting barbell collar, sweat on brow, industrial rack background, sharp silhouette, serious gaze.",
  },
  {
    name: "AMIT 'TANK' SHUKLA",
    role: "STRONGMAN & CONDITIONING LEAD",
    experience: "9 YRS COACHING",
    credentials: "CrossFit L2, Russian Kettlebell Cert (RKC)",
    bio: "Runs the Functional Engine floor. Believes cardiovascular capacity is built with heavy sandbags and air dynes, not elliptical screens.",
    imageBrief: "Coach hoisting a 70kg canvas sandbag onto shoulder, concrete floor, magnesium chalk dust in air, stark high-contrast lighting.",
  },
  {
    name: "DEVENDRA YADAV",
    role: "MOBILITY & REHAB SPECIALIST",
    experience: "7 YRS COACHING",
    credentials: "B.P.T (Physiotherapy), Precision Nutrition L1",
    bio: "Manages lifters through patellar tendinopathy, shoulder impingements, and hip mobility bottlenecks so training days are never lost.",
    imageBrief: "Coach assessing lifter's hip hinge angles against wooden dowel, technical posture audit, deep shadows, clinic-athletic setting.",
  },
];

export const TRANSFORMATIONS: CaseStudy[] = [
  {
    name: "RAHUL DIXIT",
    age: 34,
    profession: "Chartered Accountant, Swaroop Nagar",
    timeframe: "14 MONTHS",
    startingState: "Chronic lower back stiffness, 64kg bodyweight, couldn't squat 40kg without lumbar rounding.",
    resultState: "Bodyweight 76kg, Squat 150kg x 3 reps, Zero back episodes in 10 months.",
    honestNote: "Took 3 months just unlearning pelvic tilt and fixing ankle dorsiflexion before adding plates. Consistency, not quick fixes.",
    metric: "+85KG SQUAT 1RM",
  },
  {
    name: "SHREYA BANERJEE",
    age: 28,
    profession: "Dentist, Civil Lines",
    timeframe: "11 MONTHS",
    startingState: "Intimidated by barbell rooms, relied on light cardio machines for 4 years without body composition change.",
    resultState: "Deadlift 115kg x 1 rep, Conventional pull-ups 6 clean reps, restructured bone density and posture.",
    honestNote: "First 4 weeks were solely hollow-body holds, dowel rod hinges, and building grip tolerance. Now leads the 7 AM women's batch.",
    metric: "115KG DEADLIFT",
  },
  {
    name: "MANISH AGRAWAL",
    age: 42,
    profession: "Leather Goods Manufacturer, Jajmau",
    timeframe: "18 MONTHS",
    startingState: "Pre-diabetic HbA1c 6.8, chronic fatigue, 92kg with low lean mass.",
    resultState: "HbA1c 5.4, lost 11kg fat mass while adding 4.5kg muscle, completed first club mock powerlifting meet.",
    honestNote: "No magic supplements. 4 sessions weekly at 6 AM, strict sleep timing, and honest weigh-in accountability.",
    metric: "-11KG FAT / +4.5KG LBM",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "MONTHLY PASS",
    duration: "1 MONTH",
    price: "₹1,499",
    rawPrice: 1499,
    cadence: "per month billed monthly",
    features: [
      "Full gym floor & platform access (5AM - 11PM)",
      "General linear strength program template",
      "Lockers, shower & filtered water access",
      "No long-term commitment",
    ],
    note: "Ideal for visiting lifters or testing out the floor discipline.",
  },
  {
    name: "QUARTERLY PASS",
    duration: "3 MONTHS",
    price: "₹3,999",
    rawPrice: 3999,
    cadence: "₹1,333 / month equivalent",
    features: [
      "Full gym floor & all platforms access",
      "Individual 12-week progressive strength block",
      "Coach check-in & bar-path review every 3 weeks",
      "Free access to Saturday Open Engine session",
    ],
    note: "Sufficient runway to observe measurable compound strength gains.",
  },
  {
    name: "ANNUAL PASS",
    duration: "12 MONTHS",
    price: "₹11,999",
    rawPrice: 11999,
    cadence: "₹999 / month equivalent",
    isPopular: true,
    features: [
      "Year-round unrestricted floor & platform access",
      "Personalized 4-phase periodized program",
      "Quarterly 1RM testing protocol with head coach",
      "Official IRONWORKS heavy-blend member tee",
      "Free 30-day membership freeze allowance",
    ],
    note: "Highest commitment, lowest monthly cost. For lifters who don't quit.",
  },
  {
    name: "PERSONAL COACHING ADD-ON",
    duration: "MONTHLY ADD-ON",
    price: "FROM ₹6,000",
    rawPrice: 6000,
    cadence: "per month (12 sessions)",
    features: [
      "1-on-1 private coaching with assigned strength lead",
      "Real-time form correction & velocity auditing",
      "Nutrition macro adherence guidelines",
      "Requires active floor membership",
    ],
    note: "Limited to 15 concurrent lifters across the coaching roster.",
  },
];

export const TIMETABLE_SLOTS: TimetableSlot[] = [
  { time: "05:00 - 06:15", programId: "functional-conditioning", programName: "Early Engine & Conditioning", days: ["Mon", "Wed", "Fri"], coach: "Amit Shukla" },
  { time: "06:15 - 07:30", programId: "strength-hypertrophy", programName: "Barbell Foundations 1", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], coach: "Vikram Rathore" },
  { time: "07:30 - 08:30", programId: "womens-strength", programName: "Women's Strength Cohort", days: ["Mon", "Wed", "Fri"], coach: "Priya Kannojia", isWomensOnly: true },
  { time: "08:30 - 10:00", programId: "powerlifting", programName: "Open Barbell Platform Prep", days: ["Mon", "Wed", "Fri", "Sat"], coach: "Vikram Rathore" },
  { time: "11:00 - 16:00", programId: "personal-coaching", programName: "1-on-1 Coaching Hours & Open Floor", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], coach: "Roster Coaches" },
  { time: "17:00 - 18:00", programId: "womens-strength", programName: "Women's Evening Barbell", days: ["Tue", "Thu", "Sat"], coach: "Priya Kannojia", isWomensOnly: true },
  { time: "18:00 - 19:15", programId: "strength-hypertrophy", programName: "Heavy Barbell Strength II", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], coach: "Vikram Rathore" },
  { time: "19:30 - 20:30", programId: "functional-conditioning", programName: "Night Engine Interval Blitz", days: ["Mon", "Tue", "Thu", "Fri"], coach: "Amit Shukla" },
  { time: "20:30 - 23:00", programId: "powerlifting", programName: "Late Night Iron & Heavy Deadlifts", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], coach: "Floor Supervisor" },
];

export const FAQS: FAQItem[] = [
  {
    question: "I have never touched a barbell before. Can I train here?",
    answer: "Yes. 40% of our members started with zero barbell experience. Every new lifter undergoes a mandatory 3-session Barbell Primer covering bracing, hip hinge, squat depth, and barbell safety before moving to loaded barbells.",
  },
  {
    question: "What actually happens during the free trial session?",
    answer: "It is a real 60-minute session, not a sales pitch tour. A coach will assess your joint mobility, guide you through warm-up sets of squat or deadlift mechanics, and put you through an introductory work block. Bring flat shoes and water.",
  },
  {
    question: "What are the exact gym hours and peak rush times?",
    answer: "We are open Monday to Saturday from 5:00 AM to 11:00 PM uninterrupted. Sundays from 7:00 AM to 12:00 PM. Peak hours are 6:30 AM - 8:30 AM and 6:30 PM - 8:30 PM. Floor capacity is capped to maintain open platform access.",
  },
  {
    question: "Do your coaches provide diet charts or nutrition plans?",
    answer: "We provide honest macronutrient targets (protein, carbs, fats) and calorie ranges aligned with your training volume. We do not sell crash detoxes, fat burners, or overpriced herbal supplements. Real food cooked at home is what works.",
  },
  {
    question: "Can I train if I have an existing lower back or knee injury?",
    answer: "Our coach Devendra Yadav is a certified physiotherapist. We review your MRI/orthopedic clearance, adapt movement variations (e.g., trap bar deadlifts, box squats, safety squat bar), and rebuild your structural capacity without exacerbating pain.",
  },
  {
    question: "What is your membership freeze or cancellation policy?",
    answer: "Annual members can freeze their membership for up to 30 days for travel, medical emergencies, or exams with 48 hours prior notice via WhatsApp. Monthly and quarterly memberships are non-refundable but transferable with a one-time administrative fee.",
  },
];
