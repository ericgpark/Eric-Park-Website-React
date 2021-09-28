const Skill = ({ skillName, skillVal }) => {
  return (
    <div className="progress">
      <span className="skill">
        {skillName} <i className="val">{skillVal + '%'}</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={skillVal}
          aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
    </div>
  );
};

export default Skill;
