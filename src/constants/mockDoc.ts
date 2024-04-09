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
  caution: ['팜유', '밀', '대두', '비건 의심', '물 사용량 높음'],
  category: ['편의점', '마트', '주간 조회수', '영화관', '서점'],
  description:
    '맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.맛있어요.',
  commiter: {
    id: '1',
    nickname: '아브라다카다브라',
  },
  createdAt: '2024-03-31T10:30:25+09:00',
};

export type MockDoc = typeof MOCK_DOC;
