import ReturnLink from '@/components/common/ReturnLink';

const Commit = () => {
  return (
    <div className="max-h-max min-h-dvh px-16 pb-28 pt-16">
      <header>
        <ReturnLink href="/" text="취소하기" icon="cancel" reverse />
      </header>
    </div>
  );
};
export default Commit;
