const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Eric Park</h4>
              <p>
                <em>
                  Passion-driven software developer with years of experience
                  coding front and back end programs in team-oriented settings.
                </em>
              </p>
              <ul>
                <li>8832 Williamsburg ave, Westminster, CA 92683 </li>
                <li>(714) 980-0080</li>
                <li>ericparkmusic@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science Computer Science</h4>
              <p>
                <em>California State University Long Beach, California</em>
              </p>
              <p>
                <b>3.2 GPA</b>
              </p>
              <p>Relevant Coursework: </p>
              <ul>
                <li>Object Oriented Programming and Data Structures</li>
                <li>Database Fundamentals</li>
                <li>Operating Systems</li>
                <li>User Interface Design</li>
                <li>Discrete Structures with Computer Application</li>
                <li>Software Development with Frameworks</li>
                <li>Computer Logic Design</li>
                <li>Networks and Distributed Computing</li>
                <li>Introduction to Computer Security Principles</li>
                <li>Computer Architectures and Organization</li>
                <li>Data Structures and Algorithms</li>
                <li>Digital Logic and Assembly Programming</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Graduated</h4>
              <p>
                <em>Fountain Valley High, California</em>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/open-source-labs/spearmint">
                  Spearmint <i className="icofont-external-link"></i>
                </a>
              </h4>
              <p>
                <em>React Hooks | Node | Express | NoSQL DB | Typescript</em>
              </p>
              <ul>
                <li>
                  Streamlined Node server logic and increased modularity by
                  utilizing the Express framework to integrate route handlers
                  that listen for precise client requests, monitor active users
                  to persist testing data, and handle asynchronous logic through
                  the execution of corresponding middleware chains contained in
                  various controller objects such as user, cookie, session, and
                  test state
                </li>
                <li>
                  Implemented an SPA with React for improved performance from
                  component rerenders rather than page reloads, and increased
                  modularity and maintainability through the separation of
                  concerns between stateful and presentational components
                </li>
                <li>
                  Reinforced state-management across various functional React
                  component trees by implementing hooks, such as useContext and
                  useReducer, to read-to and write-from the state using code
                  that is more clean, concise, and approachable to
                  co-developers.
                </li>
                <li>
                  Improved the security and integrity of user credential storage
                  with salting and hashing encryption algorithms on NoSQL
                  database
                </li>
                <li>
                  Achieved smooth development and deployment process by using
                  TravisCI to continuously and frequently integrate, build, and
                  test code throughout sprints, and Docker to containerize
                  server code to isolate the application from its environment
                </li>
                <li>
                  Developed product under tech accelerator organization OS Labs
                  (opensourcelabs.io)
                </li>
              </ul>
            </div>
            <h3 className="resume-title">Open Source Contributions</h3>
            <div className="resume-item">
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Stab-Rabit/watchr">
                  Watchr <i className="icofont-external-link"></i>
                </a>
              </h4>
              <p>
                <em>Webpack | React Hooks | Node | Express | SQL DB | Jest</em>
              </p>
              <ul>
                <li>
                  Implemented TDD with React for unit testing using Enzyme
                  utility to easily assert, manipulate, and traverse the output
                  of components, in addition to utilizing the Jest framework to
                  run snapshot tests with previously shallow rendered components
                </li>
                <li>
                  Accelerated productivity by using Webpack’s HMR to actively
                  display component changes in developer environment
                </li>
                <li>
                  Refactored React codebase from className to functional
                  component syntax to enhance understandability and testability
                </li>
                <li>
                  Designed a vertically-scalable, ACID-compliant SQL database
                  containing pre-structured tables to safely store critical
                  information such as encrypted user credentials and favorited
                  subscribed content
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MewtwoCS/Bite">
                  Bite <i className="icofont-external-link"></i>
                </a>
              </h4>
              <p>
                <em>
                  WebSockets | Webpack | React | React Hooks | Node | Express
                </em>
              </p>
              <ul>
                <li>
                  Modularized stateful data and socket connections by building
                  two globally shared states using React’s context API
                </li>
                <li>
                  Delivered a fully live experience to the user by establishing
                  a real-time connection between clients’ WebSockets to allow
                  sustained bi-directional flow of data between clients with
                  minimal system latency and transmission delays{' '}
                </li>
                <li>
                  Bundled advanced syntax code such as ES6 and React JSX into
                  uglified, minified, ES5 standard using Webpack with Babel to
                  compile all modules into a single file that is interpretable
                  by modern and legacy browser environments{' '}
                </li>
                <li>
                  Implemented component trees consisting of modular and
                  maintainable React components that make efficient internal
                  server requests, parse JSON response from RESTful API, and
                  display information in a coherent, interactive manner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
