const PortItem = ({ imgSrc, title, subtitle, link, iconClass }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-projects">
      <div className="portfolio-wrap">
        <img src={imgSrc} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{subtitle}</p>
          <div className="portfolio-links">
            <a target="_blank" rel="noreferrer" href={link}>
              <i className={iconClass}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortItem;
