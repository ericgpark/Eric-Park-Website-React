const ContactItem = ({ contactClass, iconClass, type, value }) => {
  return (
    <div className={contactClass}>
      <i className={iconClass}></i>
      <h4>{type}:</h4>
      <p>{value}</p>
    </div>
  );
};

export default ContactItem;
