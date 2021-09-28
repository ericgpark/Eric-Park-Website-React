import NavMenu from './containers/NavMenu';
import Hero from './containers/Hero';
import Footer from './containers/Footer';
import About from './containers/About';

const App = () => (
  <>
    <NavMenu></NavMenu>
    <Hero></Hero>
    <main id="main">
      <About></About>
    </main>
    <Footer></Footer>
  </>
);

export default App;
