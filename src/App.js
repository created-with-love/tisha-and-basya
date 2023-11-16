import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import TishaImg from './media/msg777000-220223.jpg';
import BasyaImg from './media/msg777000-220222.jpg';
import SoloTisha from './media/msg777000-220230.jpg';
import SoloBasya from './media/msg777000-220238.jpg';
import Hero from './media/hero.jpg';
import Hero2 from './media/hero2.jpg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="BannersContainer">
          <HeroBanner src={TishaImg} text="Це Тіша" />
          <HeroBanner src={BasyaImg} text="А це Бася" />
        </div>

        <div className="FullWidthBanner">
          <HeroBanner src={Hero} />
        </div>

        <div className="BannersContainer">
          <HeroBanner
            src={SoloTisha}
            text="Тіша романтичний кіт та любить на десерт квіти"
          />
          <HeroBanner src={SoloBasya} text="А Бася - це маленька леді" />
        </div>

        <div className="FullWidthBanner">
          <HeroBanner src={Hero2} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
