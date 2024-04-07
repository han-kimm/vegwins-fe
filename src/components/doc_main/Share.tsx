import BaseIcon from '@/components/common/BaseIcon';
import IconShare from 'public/icon/share.svg';

const Share = () => {
  return (
    <div className="flex min-w-72 max-w-100 justify-center rounded-md bg-white text-black-80 shadow-lg">
      <button className="flex flex-col items-center justify-between gap-8 pb-28 pt-20">
        <p className="text-18 font-bold">공유</p>
        <BaseIcon render={IconShare} name="" fontSize={14} />
      </button>
    </div>
  );
};
export default Share;
