const Link = ({ url, sns }) => {
  const iconClass = 'bx bxl-' + sns;

  return (
    <a target="_blank" rel="noreferrer" href={url} className={sns}>
      <i className={iconClass}></i>
    </a>
  );
};

export default Link;
