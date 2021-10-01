import Fact from '../components/Fact';

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
          <Fact
            iconClass="icofont-code-alt"
            factCount={5}
            factName="Open-Source Organizations"
          />
          <Fact
            iconClass="icofont-gears"
            factCount={30}
            factName="Technologies and Counting"
          />
          <Fact
            iconClass="icofont-ui-folder"
            factCount={207}
            factName="Public contributions in the last 3 months"
          />
          <Fact
            iconClass="icofont-star"
            factCount={949}
            factName="Github Stars and Counting (Spearmint)"
          />
        </div>
      </div>
    </section>
  );
};

export default Facts;
