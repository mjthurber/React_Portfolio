import React, { useState } from 'react';
import './Contact.css'; // Import your custom CSS file for styling

function Contact() {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission (e.g., sending data to a server)

    // For demonstration purposes, just set the message sent state to true
    setMessageSent(true);

    // Reset the message sent state after a delay (you can adjust the delay as needed)
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <div className="contact-container">
      <section className="contact-content">
        <h2>Contact Me</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        {isMessageSent && <p className="confirmation-message">Message sent!</p>}
      </section>
    </div>
  );
}

export default Contact;
