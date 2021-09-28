import Link from '../components/Link';

const Hero = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Eric Park</h1>
        <p>
          <span
            className="typed"
            data-typed-items="Software, TypeScript, React/Redux, Node/Express, SQL, NoSQL, REST, GraphQL"></span>{' '}
          Developer
        </p>
        <div className="social-links">
          <Link url="https://www.linkedin.com/in/ericgpark" sns="linkedin" />
          <Link url="https://github.com/ericgpark" sns="github" />
          <Link
            url="https://www.instagram.com/ericparkstreet"
            sns="instagram"
          />
          <Link
            url="https://open.spotify.com/artist/4EptIy0EPkUR6pkbeRrkNF?si=KD-8D86hR6a-hCoZAZrEPA"
            sns="spotify"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
