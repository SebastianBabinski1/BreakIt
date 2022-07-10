import Carousel from './components/Carousel/Carousel';
import { Navbar } from './components/Navbar';
import { carouselLanding, flag, installation, smartphone } from '../../assets/images';
import { MobileAppAd } from './components/MobileAppAd';

export const LandingPage = () => {
  const slides = [
    { image: carouselLanding, text: '' },
    {
      image: flag,
      text: 'Шукаєте роботу? Зареєструйтеся як фахівець на Fixly',
    },
    { image: smartphone, text: 'Skorzystaj z Płatności Fixly - zleć usługę i zapłać bezpiecznie w aplikacji!' },
    { image: installation, text: 'Zamów montaż wybranych mebli IKEA na Fixly' },
  ];

  return (
    <div>
      <Navbar />
      <Carousel slides={slides} indicators={true} controls={false} interval={3000} autoPlay={true} />
      <MobileAppAd />
    </div>
  );
};
