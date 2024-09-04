import { Hero } from '../../components/Hero/Hero.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { About } from '../../components/About/About.jsx';

function HomePage() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
    </>
  );
}

export default HomePage;