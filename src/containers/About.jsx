import Bullet from '../components/Bullet';

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
                  <Bullet point="Birthday: " info="22 March 1997" />
                  <Bullet point="Phone: " info="714 980 0080" />
                  <Bullet point="City: " info="Los Angeles, CA" />
                  <Bullet point="Age: " info="24" />
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <Bullet point="GPA: " info="3.2" />
                  <Bullet point="Degree: " info="B.S. Computer Science" />
                  <Bullet point="Email: " info="ericparkmusic@gmail.com" />
                  <Bullet point="Freelance: " info="Available" />
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
