'use client';

import { getSessionStorage } from '@/utils/browserStorage';
import { ReactNode, useEffect } from 'react';
import ApiErrorBoundary from '@/components/errorHandling/ApiErrorBoundary';

interface Props {
  children: ReactNode;
}

const SearchResult = ({ children }: Props) => {
  useEffect(() => {
    const scroll = getSessionStorage('scroll');
    if (scroll) {
      window.scrollTo({ top: scroll });
    }
  }, []);

  return <ApiErrorBoundary>{children}</ApiErrorBoundary>;
};
export default SearchResult;
