'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export const refreshTag = (tag: string) => {
  revalidateTag(tag);
};

export const refreshPath = (path: string) => {
  revalidatePath(path);
};
