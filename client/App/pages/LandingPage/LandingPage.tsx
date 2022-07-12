import { Carousel } from './components/Carousel';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { MobileAppAd } from './components/MobileAppAd';

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousel indicators={true} controls={false} interval={3000} autoPlay={false} />
      <Header />
      <MobileAppAd />
    </div>
  );
};
