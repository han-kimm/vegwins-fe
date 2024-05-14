'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

const Deferring = ({ children }: PropsWithChildren) => {
  const [isDeferred, setIsDeferred] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearInterval(timeOut);
  }, []);
  if (!isDeferred) return null;
  return <>{children}</>;
};

export default Deferring;
