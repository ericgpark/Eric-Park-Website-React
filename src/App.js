import NavMenu from './containers/NavMenu';
import Hero from './containers/Hero';
import Footer from './containers/Footer';
import About from './containers/About';
import Facts from './containers/Facts';
import Skills from './containers/Skills';
import Resume from './containers/Resume';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';

const App = () => (
  <>
    <button type="button" className="mobile-nav-toggle d-xl-none">
      <i className="icofont-navigation-menu"></i>
    </button>

    <NavMenu />
    <Hero />
    <main id="main">
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
    <div id="preloader"></div>
  </>
);

export default App;
