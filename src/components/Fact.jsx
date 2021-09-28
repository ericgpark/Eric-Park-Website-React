const Fact = ({ iconClass, factCount, factName }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="count-box">
        <i className={iconClass}></i>
        <span data-toggle="counter-up">{factCount}</span>
        <p>{factName}</p>
      </div>
    </div>
  );
};

export default Fact;
