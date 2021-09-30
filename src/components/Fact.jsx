import CountUp from 'react-countup';

const Fact = ({ iconClass, factCount, factName }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="count-box">
        <i className={iconClass}></i>
        <CountUp end={factCount} duration={4} useEasing={true}/>
        <p>{factName}</p>
      </div>
    </div>
  );
};

export default Fact;
