const About = () => {
  return (
    <div id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Software engineer experienced in React, Redux, Node, Express, SQL
            and NoSQL databases.{' '}
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src="assets/img/profile-img.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Developer</h3>
            <p className="font-italic">
              Enthusiastic contributor to open-source communities and developer
              of Spearmint, a developer tool that speeds up TDD by
              auto-generation of tests for popular technologies and necessary
              qualities, such as React, Redux, endpoint, Puppeteer,
              accessibility, and more.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Birthday:</strong> 22 March 1997
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Phone:</strong> +714 980 0080
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>City:</strong> Westminster, California
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Age:</strong> 24
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>GPA:</strong> 3.2
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Degree:</strong> BS Computer Science
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Email:</strong> ericparkmusic@gmail.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I'm constantly excited to learn new technologies, and I can't wait
              to challenge myself, learn valuable lessons, and make lifelong
              connections with the leaders of the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
