import Footer from '@/components/home_footer/Footer';
import AuthChecker from '@/components/home_header/AuthChecker';
import Hero from '@/components/home_hero/Hero';
import CategoryLink from '@/components/home_link/CategoryLink';
import FeedLink from '@/components/home_link/FeedLink';
import SearchLink from '@/components/home_link/SearchLink';

export default function Home() {
  return (
    <div className="flex h-dvh flex-col gap-16">
      <header className="my-16 flex h-40 w-full items-center justify-end px-40">
        <AuthChecker />
      </header>
      <main className="flex-center flex-col gap-28">
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
