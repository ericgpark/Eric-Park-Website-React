import PortItem from '../components/PortItem';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            When I'm not coding, I like to explore some of my other hobbies like
            photography and music production. Encountering and conquering my
            passions is my utmost priority because it helps me understand whom I
            should strive to become. <br /> Take a look!
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-projects">Projects</li>
              <li data-filter=".filter-photo">Photography</li>
              <li data-filter=".filter-music">Music</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200">
          <PortItem
            imgSrc="assets/img/portfolio/tetris.PNG"
            title="Tetris"
            subtitle="The all-time classic video game coded in Javascript"
            link="tetris.html"
            iconClass="img-fluid"
          />

          <PortItem
            imgSrc="assets/img/portfolio/openparking.PNG"
            title="OpenParking"
            subtitle="An Android application based in Java"
            link="https://github.com/open-parking/OpenParking"
            iconClass="icofont-external-link"
          />

          <PortItem
            imgSrc="assets/img/portfolio/statecraft.PNG"
            title="StateCraft"
            subtitle="A turn-based strategy game based in the Electron Framwork"
            link="https://github.com/diplomacy-cecs475"
            iconClass="icofont-external-link"
          />

          <PortItem imgSrc="" title="" subtitle="" link="" iconClass="" />

          <PortItem
            imgSrc="assets/img/portfolio/portfolio-1.jpg"
            title="Gaslamp Quarters"
            subtitle="San Diego, CA"
            link=""
            iconClass=""
          />

          <div className="col-lg-4 col-md-6 portfolio-item filter-photo">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Gaslamp Quarters</h4>
                <p>San Diego, CA</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 1">
                    <i className="icofont-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-photo">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Gaslamp Quarters</h4>
                <p>San Diego, CA</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Web 3">
                    <i className="icofont-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-music">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-11.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Knott's Merry Farm</h4>
                <p>Listen Now</p>
                <div className="portfolio-links">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://open.spotify.com/track/3dHc9XlMe1rodTefE6yXfT?si=xIbB_gNERSqIbMEsBNlMLg">
                    {' '}
                    <i className="icofont-spotify"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-photo">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Grand Central Market</h4>
                <p>Los Angeles, CA</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 2">
                    <i className="icofont-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-photo">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Ho Chi Minh City</h4>
                <p>Vietnam</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Card 2">
                    <i className="icofont-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-music">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-9.png"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>ISO EP</h4>
                <p>Listen Now</p>
                <div className="portfolio-links">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://open.spotify.com/album/36makQeqXJMTr70sL9gZG2?si=VtUu-GSxRY-HVPvKjV0XPw">
                    {' '}
                    <i className="icofont-spotify"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-photo">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>HB Pier</h4>
                <p>Huntington Beach, CA</p>
                <div className="portfolio-links">
                  <a
                    target="_blank"
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Web 2">
                    <i className="icofont-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-photo">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>HB Pier</h4>
                <p>Huntington Beach, CA</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="App 3">
                    <i className="icofont-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-photo">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Ho Chi Minh City</h4>
                <p>Vietnam</p>
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Card 1">
                    <i className="icofont-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-music">
            <div className="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-10.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>smiling like an idiot</h4>
                <p>Listen Now</p>
                <div className="portfolio-links">
                  <a
                    href="https://open.spotify.com/album/7ES0rZnWkcAdOI7GkA6HAx?si=-qqvBcYJTT2hm-QdThPDEw"
                    data-gall="portfolioGallery"
                    className="venobox"
                    title="Web 3">
                    <i className="icofont-spotify"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
