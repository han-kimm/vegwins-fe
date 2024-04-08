export const MOCK_COMMENT = [
  {
    id: '1',
    nickname: '운명의사슬',
    comment: '웃기세요?',
    recomment: [
      {
        id: '1a',
        nickname: '홈플러스',
        comment: '웃음이 나오는 곳, 홈플러스입니다.',
      },
    ],
  },
  {
    id: '2',
    nickname: '청량보이',
    comment: '안녕하세요~ 지고지순',
  },
  {
    id: '4',
    nickname: '인간사료',
    comment: '서울의 중심, 메이저 도시 사당에 오신 걸 환영합니다.',
  },
  {
    id: '5',
    nickname: '궁극의버거킹',
    comment: '4월 14일 와퍼 종료세요.',
  },
  {
    id: '11',
    nickname: '홈플러스',
    comment: '30% 할인 중이세요',
  },
];

export type MockComment = typeof MOCK_COMMENT;

export const MOCK_COMMENT_ID = '2';
export const MOCK_COMMENT_NICKNAME = '청량보이';
