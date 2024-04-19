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
  rating: {
    [key in 0 | 1 | 2 | 'length']: number;
  };
  imageUrl?: string;
  hashtag?: string[];
};

export type Rating = -1 | 0 | 1 | 2;

export type PaperUser = {
  isWriter: boolean;
  rating: Rating;
};
