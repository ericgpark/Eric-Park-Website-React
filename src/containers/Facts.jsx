const Facts = () => {
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Contributing to countless open-source communities and working
            day-to-day with the latest technologies have prepared me to tackle
            any task at hand with confidence, teamwork, humility, and curiosity.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="icofont-code-alt"></i>
              <span data-toggle="counter-up">5</span>
              <p>Open-Source Organizations</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="icofont-gears"></i>
              <span data-toggle="counter-up">30</span>
              <p>Technologies and Counting</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-ui-folder"></i>
              <span data-toggle="counter-up">207</span>
              <p>Public Contributions in the last 3 months</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-star"></i>
              <span data-toggle="counter-up">946</span>
              <p>Github Stars and Counting (Spearmint)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
