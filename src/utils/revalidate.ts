'use server';

import { revalidateTag } from 'next/cache';

export const refreshTag = (tag: string) => {
  revalidateTag(tag);
};
