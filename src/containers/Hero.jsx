import { useRef, useEffect } from 'react';
import Link from '../components/Link';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Software',
        'TypeScript',
        'React/Redux',
        'Node/Express',
        'SQL',
        'NoSQL',
        'RESTful',
        'GraphQL',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    };

    typed.current = new Typed(el.current, options);
  });

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Eric Park</h1>
        <p id="typed" style={{ fontSize: 25 }}>
          <span ref={el}></span>
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
