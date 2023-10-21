import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAdress: "",
    phoneNumber: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t718xaq",
        "template_0dutpzc",
        form.current,
        "oEOrlsPcC_wE3uo5s"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            firstName: "",
            lastName: "",
            emailAdress: "",
            phoneNumber: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="section-title contact-title">Contact Me</h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="details-container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input "
              name="firstName"
              value={formData.firstName}
              id="first-name"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input "
              name="lastName"
              value={formData.lastName}
              id="last-name"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input "
              name="emailAdress"
              value={formData.emailAdress}
              id="email"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact-label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact-input "
              name="phoneNumber"
              value={formData.phoneNumber}
              id="phoneNumber"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="message-and-button">
          <label htmlFor="message" className="message contact-label">
            <span className="text-md">Message</span>
            <textarea
              className="contact-input text-md"
              id="message"
              rows="8"
              name="message"
              value={formData.message}
              placeholder="Type your message ..."
              onChange={handleChange}
            />
          </label>

          <div>
            <button className="btn ">Submit</button>
          </div>
        </div>
        <div className="contact-form-img-container">
          <img className="contact-form-img" src="./img/spaceCat.png" />
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
