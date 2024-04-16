import Footer from '@components/layout/footer/Footer';
import HomeCarousel from './HomeCarousel';

function Home() {
  return (
    <>
      <main>
        <section>
          <HomeCarousel></HomeCarousel>
        </section>
      </main>
      <Footer />
    </>
    
  );
}

export default Home;
