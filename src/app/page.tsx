import AuthChecker from '@/components/AuthChecker';
import Hero from '@/components/Hero';
import SearchLink from '@/components/SearchLink';

export default function Home() {
  return (
    <div className="min-h-screen px-40 py-16">
      <header className="mb-8 flex h-40 w-full items-center justify-end">
        <AuthChecker />
      </header>
      <main className="flex-center flex-col gap-32">
        <Hero />
        <SearchLink />
      </main>
    </div>
  );
}
