import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <p>
        <strong>Broward College</strong>
        <br />
        1234 Example Street
        <br />
        City, State ZIP
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:contact@example.com">contact@example.com</a>
        <br />
        <strong>Phone:</strong> <a href="tel:1234567890">(123) 456-7890</a>
      </p>
    </div>
  );
};

export default Contact;
