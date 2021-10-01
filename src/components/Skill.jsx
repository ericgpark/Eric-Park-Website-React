import { useState } from 'react';
import { Waypoint } from 'react-waypoint';

const Skill = ({ skillName, skillVal }) => {
  const [width, setWidth] = useState(0);

  const handleWaypoint = () => {
    setWidth(skillVal);
  }

  return (
    <div className="progress">
      <span className="skill">
        {skillName} <i className="val">{skillVal + '%'}</i>
      </span>
      <div className="progress-bar-wrap">
        <Waypoint onEnter={handleWaypoint} />
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={skillVal}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width: width + '%'}}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
