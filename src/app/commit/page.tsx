import ReturnLink from '@/components/common/ReturnLink';
import AddForm from '@/components/post_main/AddForm';

const Commit = () => {
  return (
    <div className="max-h-max min-h-dvh px-40 pb-28 pt-16">
      <header className="flex justify-end">
        <ReturnLink href="/" text="취소하기" icon="cancel" reverse />
      </header>
      <main className="mx-auto flex flex-col">
        <AddForm />
      </main>
    </div>
  );
};
export default Commit;
