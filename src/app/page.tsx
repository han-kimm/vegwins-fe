import Anchor from '@/components/Anchor';
import AuthChecker from '@/components/AuthChecker';
import SearchLink from '@/components/SearchLink';
import IconDocs from 'public/icon/docs.svg';

export default function Home() {
  return (
    <div className="min-h-screen px-40 py-16">
      <header className="flex h-40 w-full items-center justify-end ">
        <AuthChecker />
      </header>
      <main className="flex-center">
        <SearchLink />
      </main>
    </div>
  );
}
