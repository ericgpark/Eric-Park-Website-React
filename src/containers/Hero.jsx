const Hero = () => (
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Eric Park</h1>
      <p>
        <span
          class="typed"
          data-typed-items="Software, TypeScript, React/Redux, Node/Express, SQL, NoSQL, REST, GraphQL"></span>{' '}
        Developer
      </p>
      <div class="social-links">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ericgpark/"
          class="linkedin">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a target="_blank" href="https://github.com/ericgpark" class="github">
          <i class="bx bxl-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/ericparkstreet/"
          class="instagram">
          <i class="bx bxl-instagram"></i>
        </a>
        <a
          target="_blank"
          href="https://open.spotify.com/artist/4EptIy0EPkUR6pkbeRrkNF?si=KD-8D86hR6a-hCoZAZrEPA"
          class="spotify">
          <i class="bx bxl-spotify"></i>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
