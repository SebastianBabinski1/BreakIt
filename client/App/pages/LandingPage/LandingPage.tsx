import Carousel from './components/Carousel/Carousel';
import { Navbar } from './components/Navbar';
import { carouselLanding, flag, installation, smartphone } from '../../assets/images';

export const LandingPage = () => {
  const slides = [
    { image: carouselLanding, text: undefined },
    { image: flag, text: 'flag' },
    { image: smartphone, text: 'smartphone' },
    { image: installation, text: 'installation' },
  ];

  return (
    <div>
      <Navbar />
      <Carousel slides={slides} indicators={true} controls={false} interval={3000} width={800} height={200} />
    </div>
  );
};
