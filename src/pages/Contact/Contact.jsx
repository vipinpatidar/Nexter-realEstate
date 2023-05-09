// import React from "react";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import FandQ from "../../components/FandQ/FandQ";
import background from "../../assets/bigImg/contact.jpg";
import OpenOnTop from "../../components/OpenOnTop/OpenOnTop";

const ContactPage = () => {
  return (
    <>
      <OpenOnTop />
      <div className="container">
        <ContactHeader
          background={background}
          h3="Contact Us"
          h1="We’d Love To Hear From You."
          pera="We are here to answer any question you may have. As a partner of
        corporate, nexter has more than 1,000 offices of all sizes and all
        potential of session."
          btnText="Our Properties"
          isContact={true}
          isBright={true}
        />
        <ContactForm />
        <FandQ />
      </div>
    </>
  );
};

export default ContactPage;
