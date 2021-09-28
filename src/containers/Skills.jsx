import Skill from '../components/Skill';

const Skills = () => {
  return (
    <div id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Here are some of the languages and technologies in which I'm most
            confident. I am always seeking and learning new languages. <br />{' '}
            I'm currently learning the language of Go!
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            <Skill skillName="Javascript" skillVal={98} />
            <Skill skillName="React" skillVal={95} />
            <Skill skillName="Node" skillVal={95} />
          </div>

          <div className="col-lg-6">
            <Skill skillName="Hooks" skillVal={92} />
            <Skill skillName="REST API" skillVal={88} />
            <Skill skillName="TypeScript" skillVal={85} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
