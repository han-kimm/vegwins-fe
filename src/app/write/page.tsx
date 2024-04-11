import ReturnLink from '@/components/common/ReturnLink';
import AddForm from '@/components/write_main/AddForm';

const Commit = () => {
  return (
    <div className="max-h-max min-h-dvh px-20 pb-28 pt-16">
      <header className="flex justify-end">
        <ReturnLink href="/" text="취소하기" icon="cancel" reverse />
      </header>
      <main className="w-full">
        <AddForm />
      </main>
    </div>
  );
};
export default Commit;
