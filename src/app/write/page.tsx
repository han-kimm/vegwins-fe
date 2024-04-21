import ReturnLink from '@/components/common/LinkReturn';
import WriteForm from '@/components/write_main/WriteForm';

const Write = () => {
  return (
    <div className="max-h-max min-h-dvh px-28 pb-28 pt-16">
      <header className="mb-12 flex justify-end">
        <ReturnLink href="/" text="취소하기" icon="cancel" reverse />
      </header>
      <main className="h-full w-full">
        <WriteForm />
      </main>
    </div>
  );
};
export default Write;
