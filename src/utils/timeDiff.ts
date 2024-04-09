export const timeDiff = (createdAt: string) => {
  const start = new Date(createdAt);
  const end = new Date();

  const diff = (Number(end) - Number(start)) / 1000;

  const times = [
    { name: '달', seconds: 60 * 60 * 24 * 31 },
    { name: '일', seconds: 60 * 60 * 24 },
    { name: '시간', seconds: 60 * 60 },
    { name: '분', seconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.seconds);

    if (betweenTime > 0 && value.name === '달') {
      return `${start.toLocaleDateString()}`;
    }

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return '방금 전';
};
