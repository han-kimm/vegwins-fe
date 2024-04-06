import Footer from '@/components/home_footer';
import AuthChecker from '@/components/home_header';
import Hero from '@/components/home_hero';
import CategoryLink from '@/components/home_link/CategoryLink';
import FeedLink from '@/components/home_link/FeedLink';
import SearchLink from '@/components/home_link/SearchLink';

export default function Home() {
  return (
    <div className="flex h-dvh flex-col">
      <header className="flex h-60 w-full items-center justify-end px-40 py-20">
        <AuthChecker />
      </header>
      <main className="flex-center mb-100 flex-col gap-28">
        <Hero />
        <SearchLink />
        <CategoryLink />
        <FeedLink />
      </main>
      <footer className="mt-auto bg-black-80 px-40 py-12 text-14 text-white">
        <Footer />
      </footer>
    </div>
  );
}
