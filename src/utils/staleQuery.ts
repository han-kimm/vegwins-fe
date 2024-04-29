import { getSessionStorage } from '@/utils/browserStorage';
import { refreshTag } from '@/utils/revalidate';

export const staleSearchQuery = () => {
  const previousPath = getSessionStorage('pp');
  const searchParams = new URLSearchParams(previousPath.slice(8));
  const c = searchParams.get('c');
  const k = searchParams.get('k');
  console.log(previousPath);
  console.log(c);
  console.log(k);
  c && refreshTag(c);
  k && refreshTag(k);
  c || k || refreshTag('search');
};

export const staleCommentQuery = () => {};
