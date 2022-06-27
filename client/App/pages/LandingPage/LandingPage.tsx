import Carousel from './components/Carousel/Carousel';
import { Navbar } from './components/Navbar';
import { carouselLanding, flag, installation, smartphone } from '../../assets/images';
import Header from './components/Header/Header';
import styles from './LandingPage.module.scss';

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
      <div className={styles.pageContent}>
        <Carousel slides={slides} indicators={true} controls={false} interval={3000} autoPlay={true} />
        <Header />
      </div>
    </div>
  );
};
