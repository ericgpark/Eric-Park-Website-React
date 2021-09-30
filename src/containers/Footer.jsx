import Link from '../components/Link';

const Footer = () => (
  <footer id="footer">
    <section className="container">
      <p>
        From the bottom of my heart, thank you for taking the time to look
        through my portfolio website.
        <br />
        If you happen to have any questions, feel free to contact me at
        ericparkmusic@gmail.com. I usually reply within 24 hours!
      </p>
      <div className="social-links">
        <Link url="https://www.linkedin.com/in/ericgpark" sns="linkedin" />
        <Link url="https://github.com/ericgpark" sns="github" />
        <Link url="https://www.instagram.com/ericparkstreet" sns="instagram" />
        <Link
          url="https://open.spotify.com/artist/4EptIy0EPkUR6pkbeRrkNF?si=KD-8D86hR6a-hCoZAZrEPA"
          sns="spotify"
        />
      </div>
      <div className="credits">Designed by Eric Park</div>
    </section>
  </footer>
);

export default Footer;
