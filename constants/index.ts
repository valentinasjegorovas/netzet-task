export interface Guide {
  src: string;
  text: string;
  span: string;
}

export const guide: Guide[] = [
  {
    src: '/star1.svg',
    text: 'the unique mysteries and challenges of childhood in the 21st century',
    span: 'Discover',
  },
  {
    src: '/star3.svg',
    text: 'to inspire and encourage your child instead of threatening and punishing them',
    span: 'Learn',
  },
  {
    src: '/star2.svg',
    text: 'the difference between motivation and pressure to raise happy, well-adjusted adults',
    span: 'Understand',
  },
];

export interface Customers {
  src: string;
  name: string;
  badge: string;
  stars: string;
  text: string;
}

export const customers: Customers[] = [
  {
    src: '/Customer-1.png',
    name: 'Ava S.',
    badge: '/badge.svg',
    stars: '/stars.svg',
    text: 'The Art of Smart Parenting is worth so much more than I paid for it! With every chapter, I got closer and closer with my daughter, and it"s great to know I CAN be the mom she deserves!',
  },
  {
    src: '/Customer-2.png',
    name: 'Gregory A.',
    badge: '/badge.svg',
    stars: '/stars.svg',
    text: 'I have to admit, I was a bit hesitant about The Art of Smart Parenting at first, but I"m so glad I tried it. I now understand what my children are going through so much better, and I don"t feel like I"m failing as a father. Definitely recommend to everyone looking to become a better parent!',
  },
];
