export type SearchItem = {
  _id: string;
  title: string;
  end: string;
  view: number;
  imageUrl?: string;
  hashtag?: string[];
  rating?: {
    length: number;
  };
  rated: number;
};

export type Paper = {
  _id: string;
  title: string;
  end: boolean;
  category: string[];
  description: string;
  view: number;
  writer: {
    _id: string;
    nickname: string;
  };
  createdAt: string;
  updatedAt: string;
  rating?: {
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

export type Comment = {
  _id: string;
  commenter: {
    _id: string;
    nickname: string;
  };
  content: string;
  recomment: Comment[];
  createdAt: string;
};

export type TargetComment = {
  status: 'edit' | 'recomment';
  comment: Comment;
};

export type Notification = {
  _id: string;
  paper: {
    _id: string;
    title: string;
  };
  comment: {
    content: string;
  };
  createdAt: string;
  type: 'comment' | 'recomment' | 'view' | 'rating';
};

export type CarouselData = {
  title: string;
  imageUrl: string;
  href: string;
  color: 'white';
};
