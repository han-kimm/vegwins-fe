import Docs from 'public/icon/docs.svg';
import Anchor from '@/components/Anchor';
import Button from '@/components/Anchor';

export default function Home() {
  return (
    <main className="flex-center min-h-screen">
      <Anchor href="https://naver.com" target="_blank" className="text-20 font-medium text-white active:bg-black-100">
        <Docs />
        <span>첫걸음 안내서</span>
      </Anchor>
    </main>
  );
}
