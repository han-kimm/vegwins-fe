import CategoryLink from '@/components/CategoryLink';
import SearchLink from '@/components/SearchLink';
import AuthChecker from '@/components/home_header/AuthChecker';
import Hero from '@/components/home_hero/Hero';

export default function Home() {
  return (
    <div className="min-h-dvh">
      <header className="my-16 flex h-40 w-full items-center justify-end px-40">
        <AuthChecker />
      </header>
      <main className="flex-center flex-col gap-28">
        <Hero />
        <SearchLink />
        <CategoryLink />
      </main>
    </div>
  );
}
