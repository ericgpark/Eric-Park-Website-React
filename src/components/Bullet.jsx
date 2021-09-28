const Bullet = ({ point, info }) => {
  return (
    <li>
      <i className="icofont-rounded-right"></i>
      <strong>{point}</strong>
      {info}
    </li>
  );
};

export default Bullet;
