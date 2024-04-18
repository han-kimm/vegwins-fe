export type SearchItem = {
  _id: string;
  title: string;
  end: string;
  imageUrl?: string;
  hashtag?: string[];
  rated?: number;
};

export type Paper = {
  _id: string;
  title: string;
  end: string;
  category: string[];
  description: string;
  writer: {
    _id: string;
    nickname: string;
  };
  createdAt: string;
  updatedAt: string;
  isWriter?: boolean;
  imageUrl?: string;
  hashtag?: string[];
};
