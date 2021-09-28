import NavMenu from './containers/NavMenu';
import Hero from './containers/Hero';
import Footer from './containers/Footer';
import About from './containers/About';
import Facts from './containers/Facts';

const App = () => (
  <>
    <NavMenu />
    <Hero />
    <main id="main">
      <About />
      <Facts />
    </main>
    <Footer />
  </>
);

export default App;
