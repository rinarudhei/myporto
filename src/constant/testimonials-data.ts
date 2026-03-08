export type Testimony = {
  id: number;
  name: string;
  description: string;
  image: string;
  title: string;
  alt: string;
};

export const testimonials: Testimony[] = [
  {
    id: 1,
    name: 'Jasper Kim',
    title: 'UI/UX Designer at FitPool',
    description:
      "Partnering with Edwin Anderson on our rebranding was a fantastic decision. She streamlined our entire visual identity and created assets that perfectly captured our new direction. Couldn't be happier!",
    image: '/image/JasperKim.svg',
    alt: 'Jasper Kim profile picture svg',
  },
  {
    id: 2,
    name: 'Mario Lopez',
    title: 'Marketing Manager at Vivotech',
    description:
      "Hiring Edwin Anderson to fix our database was the best call we made. He optimized our slow queries and implemented a backup strategy we didn't know we needed. Absolutely top-notch!",
    image: '/image/MarioLopez.svg',
    alt: 'Mario Lopez profile picture svg',
  },

  {
    id: 3,
    name: 'Sarah Tan',
    title: 'Product Manager at Finovate',
    description:
      "Working with Edwin Anderson was a smooth experience from start to finish. He translated our design into clean, responsive code, and even suggested improvements we hadn't tought of. Highly recommended!",
    image: '/image/SarahTan.png',
    alt: 'Sarah Tan profile picture png',
  },
];
