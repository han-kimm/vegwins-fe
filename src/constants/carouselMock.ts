export const MOCK = [
  {
    id: 1,
    title: '비긴즈 이용 안내',
    className: 'bg-black-80 text-white',
    imageUrl: '/image/guide-dark.webp',
    href: '/search',
  },
  {
    id: 2,
    title: '봄 맞이 추천 제품',
    className: 'items-end',
    imageUrl: '/image/blossom.avif',
    href: '/search?q=#봄',
  },
  {
    id: 3,
    title: '젤리 추천 제품',
    className: 'items-end',
    imageUrl: '/image/haribo.jpg',
    href: '/search?q=#젤리',
  },
];

export const DOTS = MOCK.map((_, i, arr) => (i + 1) / arr.length);
