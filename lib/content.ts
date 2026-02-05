export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  price: number;
  stripePriceId?: string;
  amazonUrl?: string;
  appleBooksUrl?: string;
  excerpt?: string;
}

export interface Author {
  name: string;
  bio: string;
  photo?: string;
}

export const author: Author = {
  name: "Manzulli",
  bio: "Author of thoughtful non-fiction exploring consciousness, healing, and the human experience. Currently launching a trilogy beginning with The New Medicine of Consciousness.",
};

export const books: Book[] = [
  {
    id: "nmoc",
    title: "The New Medicine of Consciousness",
    description: "A thoughtful exploration of consciousness and its role in healing. This book examines the intersection of traditional medicine and expanded awareness, offering readers a contemplative journey into understanding how consciousness shapes our experience of health and wellness.",
    coverImage: "/images/nmoc-cover.jpg",
    price: 9.99,
    stripePriceId: "price_placeholder",
    amazonUrl: "https://www.amazon.com/dp/placeholder",
    appleBooksUrl: "https://books.apple.com/us/book/placeholder",
    excerpt: "In the quiet spaces between thought and action, between symptom and healing, lies a territory that modern medicine has only begun to map. This book invites you into that territory—not as a patient or a practitioner, but as a conscious being exploring the relationship between awareness and wellness.",
  },
];

export const contactEmail = "contact@manzulli.com";

export const futureSections = {
  lifeHealingFoundation: {
    name: "Life Healing Foundation",
    url: "#",
    comingSoon: true,
  },
  ter: {
    name: "TER",
    url: "#",
    comingSoon: true,
  },
};
