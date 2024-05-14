'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export const refreshTag = (tag: string | string[]) => {
  if (typeof tag === 'string') {
    revalidateTag(tag);
    return;
  }

  for (const item of tag) {
    revalidateTag(item);
  }
};

export const refreshPath = (path: string) => {
  revalidatePath(path);
};
