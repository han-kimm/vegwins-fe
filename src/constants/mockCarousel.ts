export const MOCK = [
  {
    id: 2,
    title: '봄 맞이 추천 제품',
    className: 'items-end',
    imageUrl: '/image/blossom.avif',
    href: '/search?k=#봄',
  },
  {
    id: 3,
    title: '젤리 추천 제품',
    className: 'items-end',
    imageUrl: '/image/haribo.jpg',
    href: '/search?k=#젤리',
  },
];

export const DOTS = MOCK.map((_, i, arr) => (i + 1) / arr.length);
