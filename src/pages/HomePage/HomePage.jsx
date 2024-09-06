import { Hero } from '../../components/Hero/Hero.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { About } from '../../components/About/About.jsx';
import { Cases } from '../../components/Cases/Cases.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

function HomePage() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Cases/>
      <Footer/>
    </>
  );
}

export default HomePage;