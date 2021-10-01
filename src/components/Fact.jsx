import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import CountUp from 'react-countup';

const Fact = ({ iconClass, factCount, factName }) => {
  const [factCountUp, setFactCountUp] = useState(<></>);

  const handleWaypoint = () => {
    setFactCountUp(<CountUp end={factCount} duration={4} useEasing={true}/>);
  }

  return (
    <div className="col-lg-3 col-md-6">
      <div className="count-box">
        <i className={iconClass}></i>
        <Waypoint onEnter={handleWaypoint} />
        {factCountUp}
        <p>{factName}</p>
      </div>
    </div>
  );
};

export default Fact;
