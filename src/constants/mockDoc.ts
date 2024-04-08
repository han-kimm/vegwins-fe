export const MOCK_DOC = {
  id: '1',
  title: '풀무원',
  imageUrl: '/image/default.webp',
  hashtag: ['#웃어', '#좋아'],
  rating: {
    [0]: 11,
    [1]: 3,
    [2]: 31,
  },
  caution: ['밀', '대두'],
  category: ['편의점', '마트', '주간 조회수', '영화관', '서점'],
  description:
    '맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.',
};

export type MockDoc = typeof MOCK_DOC;
