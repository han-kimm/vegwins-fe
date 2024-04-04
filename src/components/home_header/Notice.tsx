import IconBell from 'public/icon/bell.svg';

const Notice = () => {
  return (
    <button className="relative">
      <IconBell />
      <div className="flex-center absolute -right-24 top-0 h-24 w-24 rounded-full bg-orange text-14 font-bold text-black-100">27</div>
    </button>
  );
};
export default Notice;
