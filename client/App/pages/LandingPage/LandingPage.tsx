import { Carousel } from './components/Carousel';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousel indicators={true} controls={false} interval={3000} autoPlay={false} />
      <Header />
      <Footer />
    </div>
  );
};
