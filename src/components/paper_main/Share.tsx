'use client';

import IconBase from '@/components/common/IconBase';
import IconShare from 'public/icon/share.svg';

const Share = () => {
  const popupShare = () => {
    navigator.share({
      url: document.location.href,
      title: '',
    });
  };

  return (
    <section className="flex min-w-72 max-w-100 justify-center rounded-md bg-white text-black-80 shadow-lg" aria-label="문서 공유">
      <button onClick={popupShare} className="flex flex-col items-center justify-between gap-8 pb-28 pt-20">
        <p className="text-18 font-bold">공유</p>
        <IconBase render={IconShare} name="" fontSize={14} />
      </button>
    </section>
  );
};
export default Share;
