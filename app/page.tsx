import Banner from '@/components/Banner';
import Hero from '@/components/Hero';
import Promo from '@/components/Promo';
import Guide from '@/components/Guide';
import Testimonials from '@/components/Testimonial';
import Images from '@/components/Images';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <Guide />
      <Promo />
      <Testimonials />
      <Images />
      <Footer />
    </>
  );
}
