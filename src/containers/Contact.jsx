import ContactItem from '../components/ContactItem';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">
          <div className="info">
            <ContactItem
              contactClass="address"
              iconClass="icofont-google-map"
              type="Location"
              value="8832 Williamsburg Ave, Westminster, CA 92683"
            />
            <ContactItem
              contactClass="email"
              iconClass="icofont-envelope"
              type="Email"
              value="ericparkmusic@gmail.com"
            />
            <ContactItem
              contactClass="phone"
              iconClass="icofont-phone"
              type="Call"
              value="+714 980 0080"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
