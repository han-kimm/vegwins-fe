import ajax from '@/utils/fetching';
import Footer from '@/components/home_footer/Footer';
import AuthChecker from '@/components/home_header/AuthChecker';
import Carousel from '@/components/home_main/Carousel';
import LinkCategory from '@/components/home_main/LinkCategory';
import LinkSearch from '@/components/home_main/LinkSearch';
import LinkWrite from '@/components/home_main/LinkWrite';

const Home = async () => {
  const carousels = await ajax.get({ path: '/carousel' });
  return (
    <>
      <meta property="og:image" content="og-thumbnail.webp" />
      <div className="max-h-max min-h-dvh">
        <header className="flex h-60 w-full items-center justify-end gap-60 px-40 py-20">
          <AuthChecker />
        </header>
        <main className="flex-center mb-100 flex-col gap-28">
          <Carousel data={carousels} />
          <LinkSearch />
          <LinkCategory />
          <LinkWrite />
        </main>
        <footer className="mt-auto bg-black-80 px-40 py-12 text-14 text-white">
          <Footer />
        </footer>
      </div>
    </>
  );
};
export default Home;
