export const productImages = [
  "/images/t1.jpeg",
  "/images/t2.jpeg",
  "/images/t3.jpeg",
  "/images/t4.jpeg",
  "/images/t5.jpeg",
];

export const reviewImages = [
  "/images/review-1.jpg",
  "/images/review-2.jpg",
  "/images/review-3.jpg",
  "/images/review-4.jpg",
  "/images/review-5.jpg",
];

export type SizeOption = {
  label: string;
  price: number;
  originalPrice: number;
};

export const sizeOptions: SizeOption[] = [
  { label: "1 Pack (10 Patches)", price: 1199, originalPrice: 2499 },
];

export const reviews = [
  {
    name: "Priya Sharma",
    date: "15/02/2026",
    rating: 5,
    text: "Amazing results! Lost 3 kgs in just 2 weeks. The patches work really well for detox and weight loss. Highly recommended!",
    verified: true,
  },
  {
    name: "Rajesh Kumar",
    date: "12/02/2026",
    rating: 5,
    text: "Vedsutra foot patches are excellent! I've been using them for a month and noticed significant improvement in my energy levels and weight management.",
    verified: true,
  },
  {
    name: "Anita Desai",
    date: "08/02/2026",
    rating: 5,
    text: "Best foot patch I've ever used! Natural ingredients, easy to use, and great results. My sleep quality has improved too.",
    verified: true,
  },
  {
    name: "Vikram Singh",
    date: "05/02/2026",
    rating: 5,
    text: "Great product for fat loss and detox. The patches are comfortable to wear overnight. Worth every rupee!",
    verified: true,
  },
  {
    name: "Meera Patel",
    date: "01/02/2026",
    rating: 4,
    text: "Good quality product. Works as expected. I can see visible results in my weight loss journey. Will order again!",
    verified: true,
  },
];

export const productDescription = {
  brandName: "Vedsutra",
  productName: "Vedsutra Detox Foot Patch - Natural Fat Loss & Body Detoxification",
  tagline: "Transform Your Health Overnight with Ancient Ayurvedic Wisdom",
  
  heroSection: {
    title: "Experience Natural Weight Loss & Complete Body Detoxification",
    subtitle: "Wake up lighter, energized, and toxin-free with Vedsutra's premium foot patches",
    benefits: [
      "Natural Fat Loss Support",
      "Complete Body Detoxification",
      "Improved Sleep Quality",
      "Enhanced Energy Levels",
      "100% Natural Ingredients",
      "Easy Overnight Application"
    ]
  },

  features: [
    "Advanced Detoxification: Powerful natural ingredients work overnight to draw out toxins, heavy metals, and impurities from your body through the soles of your feet.",
    "Weight Loss Support: Helps boost metabolism and supports your fat loss journey naturally without harsh chemicals or side effects.",
    "Premium Quality: Each pack contains 10 individually sealed, medical-grade adhesive patches for maximum effectiveness and hygiene.",
    "Natural Ayurvedic Formula: Crafted with time-tested ingredients including Ginger, Salt, Bamboo Vinegar, Tourmaline, and Chitosan.",
    "Better Sleep: Many users report improved sleep quality and wake up feeling more refreshed and energized.",
    "Easy to Use: Simply apply before bed, sleep comfortably, and remove in the morning. No mess, no hassle.",
    "Visible Results: Watch the patches change color as they absorb toxins - proof that they're working!",
    "Safe & Gentle: Made with 100% natural ingredients, safe for regular use with no known side effects.",
  ],

  howItWorks: [
    {
      step: 1,
      title: "Apply Before Bed",
      description: "Clean and dry your feet, then apply the Vedsutra foot patch to the center of each sole."
    },
    {
      step: 2,
      title: "Sleep Comfortably",
      description: "Wear socks and sleep normally. The patches work while you rest, drawing out toxins through reflexology points."
    },
    {
      step: 3,
      title: "Remove in Morning",
      description: "After 7-10 hours, remove the patches. You'll notice they've darkened - this shows toxins have been absorbed."
    },
    {
      step: 4,
      title: "See Results",
      description: "With regular use, experience improved energy, better sleep, weight management, and overall wellness."
    }
  ],

  ingredients: {
    title: "Powerful Natural Ingredients",
    description: "Vedsutra foot patches are formulated with a unique blend of natural ingredients, each chosen for its specific detoxifying and wellness properties:",
    list: [
      {
        name: "Ginger Powder",
        benefit: "Boosts circulation, reduces inflammation, and enhances metabolic function"
      },
      {
        name: "Himalayan Salt",
        benefit: "Helps cleanse and balance the body's internal environment, draws out impurities"
      },
      {
        name: "Bamboo Vinegar",
        benefit: "Powerful natural detoxifier that helps eliminate toxins and heavy metals"
      },
      {
        name: "Tourmaline",
        benefit: "Releases negative ions that improve blood circulation and energy flow"
      },
      {
        name: "Chitosan",
        benefit: "Natural absorbent that helps pull out toxins, excess water, and impurities"
      },
      {
        name: "Ayurvedic Herbs",
        benefit: "Blend of traditional herbs known for their detoxifying and fat-burning properties"
      }
    ]
  },

  benefits: [
    {
      icon: "🔥",
      title: "Natural Fat Loss",
      description: "Supports your weight loss journey by boosting metabolism and helping eliminate excess water weight"
    },
    {
      icon: "🧹",
      title: "Complete Detox",
      description: "Removes toxins, heavy metals, and impurities that accumulate in your body from food, environment, and lifestyle"
    },
    {
      icon: "💤",
      title: "Better Sleep",
      description: "Improves sleep quality by promoting relaxation and reducing stress-related toxins"
    },
    {
      icon: "⚡",
      title: "More Energy",
      description: "Feel more energized and refreshed as your body becomes cleaner and more efficient"
    },
    {
      icon: "🌿",
      title: "100% Natural",
      description: "Made with pure, natural ingredients - no chemicals, no side effects, completely safe"
    },
    {
      icon: "✅",
      title: "Easy & Convenient",
      description: "Simple overnight application - no diet changes, no exercise required, works while you sleep"
    }
  ],

  howToUse: [
    "Wash and thoroughly dry your feet before application",
    "Peel off the protective backing from the adhesive patch",
    "Place the patch firmly on the center of each foot sole (the reflexology point)",
    "Wear comfortable socks to keep the patches in place",
    "Leave on for 7-10 hours, ideally overnight while you sleep",
    "In the morning, gently remove the patches and dispose of them",
    "Wash your feet with warm water to remove any residue",
    "Use 2-3 times per week for best results, or as recommended by your wellness advisor"
  ],

  results: {
    title: "What to Expect",
    timeline: [
      {
        period: "Week 1",
        results: "Improved sleep quality, increased energy levels, patches show visible toxin absorption"
      },
      {
        period: "Week 2-3",
        results: "Noticeable weight loss, better digestion, reduced bloating, enhanced overall wellness"
      },
      {
        period: "Week 4+",
        results: "Sustained weight management, improved skin health, better immunity, long-term detoxification benefits"
      }
    ],
    note: "Results may vary based on individual body composition, lifestyle, and consistency of use. For best results, combine with a balanced diet and regular exercise."
  },

  faqs: [
    {
      question: "What are Vedsutra Detox Foot Patches?",
      answer:
        "Vedsutra Detox Foot Patches are premium natural wellness patches designed to support your body's detoxification and weight loss journey. Made with a blend of Ayurvedic ingredients, they work overnight to draw out toxins, heavy metals, and impurities through the reflexology points on your feet, helping you achieve natural fat loss and complete body detoxification.",
    },
    {
      question: "How do the patches work for weight loss?",
      answer:
        "The patches work through multiple mechanisms: they help eliminate excess water weight, boost metabolism through improved circulation, support the body's natural detoxification process which can aid in fat metabolism, and help reduce bloating. Combined with a healthy lifestyle, they can significantly support your weight loss goals.",
    },
    {
      question: "Are the patches safe to use regularly?",
      answer:
        "Yes! Vedsutra foot patches are made with 100% natural ingredients and are completely safe for regular use. We recommend using them 2-3 times per week for optimal results. However, if you have sensitive skin or any medical conditions, please consult with your healthcare provider before use.",
    },
    {
      question: "Why do the patches change color?",
      answer:
        "The patches darken as they absorb toxins, moisture, and impurities from your body. This color change is a visible indicator that the patches are working. The darker the patch becomes, the more toxins have been drawn out. This is completely normal and expected.",
    },
    {
      question: "How long should I use the patches?",
      answer:
        "For best results, we recommend using the patches consistently for at least 4-6 weeks. Many users continue using them as part of their regular wellness routine. You can use them 2-3 times per week or as needed based on your wellness goals.",
    },
    {
      question: "Can I use these patches if I have diabetes or other health conditions?",
      answer:
        "While our patches are made with natural ingredients, if you have diabetes, circulatory issues, or any other medical conditions, we strongly recommend consulting with your healthcare provider before using the patches to ensure they're appropriate for your specific situation.",
    },
    {
      question: "What ingredients are used in Vedsutra patches?",
      answer:
        "Our premium formula includes: Ginger powder (circulation and metabolism), Himalayan Salt (cleansing and balance), Bamboo Vinegar (powerful detoxifier), Tourmaline (negative ions and energy flow), Chitosan (natural absorbent), and a blend of Ayurvedic herbs (traditional detoxifying properties). All ingredients are 100% natural and carefully selected for their effectiveness.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Many users notice improved sleep and energy levels within the first week. Weight loss and detoxification benefits typically become more noticeable after 2-3 weeks of consistent use. Results vary based on individual factors like body composition, lifestyle, and consistency of use.",
    },
    {
      question: "Do I need to change my diet or exercise?",
      answer:
        "While the patches work on their own, combining them with a balanced diet and regular exercise will enhance your results significantly. The patches support your body's natural processes, making it easier to achieve your wellness goals when combined with a healthy lifestyle.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Vedsutra foot patches are made with natural ingredients and are generally well-tolerated. Some users with very sensitive skin may experience mild redness, which typically resolves quickly. If you experience any irritation, discontinue use and consult a healthcare provider.",
    },
  ],

  shipping:
    "Fast & Free Shipping: All orders ship within 24 hours with full tracking via SMS (AWB number). Delivery within 5-7 working days across India. Free shipping on all orders. Easy Returns: We offer hassle-free returns within 48 hours of delivery. For any issues, contact us at care@vedsutra.com. Customer Support: Our team is available to assist you with any questions or concerns. Email: care@vedsutra.com",
};
