import React from 'react'

const ContactMe = () => {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="section-title contact-title">Contact Me</h2>
      </div>
      <form className="contact--form--container">
        
        <div className="details-container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input "
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input "
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input "
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact-label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact-input "
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <div className='message-and-button'>
        <label htmlFor="message" className="message contact-label">
          <span className="text-md">Message</span>
          <textarea
            className="contact-input text-md"
            id="message"
            rows="8"
            placeholder="Type your message ..."
          />
        </label>
        
        <div>
            <button className="btn ">Submit</button>
        </div>
        </div>
        <div className="contact-form-img-container">
          <img className="contact-form-img"  src= "./img/spaceCat.png"/>
        </div>
        
      </form>
    </section>
  )
}

export default ContactMe