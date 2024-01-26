import React from "react";
import ContactForm from "./ContactForm";
function Contact(props) {
  return (
    <div>
      <div className="container_wrapper">
        <div className="bg-[#777776] min-h-[75vh] w-full">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default Contact;
