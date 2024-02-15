import React, { useState } from 'react';
import './Contact.css'; // Import your custom CSS file for styling

function Contact() {
  const [isMessageSent, setMessageSent] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const [fieldErrors, setFieldErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setFieldErrors((prevErrors) => ({ ...prevErrors, [name]: `${name} cannot be empty.` }));
    } else {
      setFieldErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check for errors before submitting the form
    const hasErrors = Object.values(fieldErrors).some((error) => error !== '');
    if (hasErrors) {
      // Handle errors, display a message, or prevent form submission
      console.log("Form has errors. Please correct them before submitting.");
      return;
    }

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
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            value={formState.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.name && <p className="error-message">{fieldErrors.name}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            value={formState.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.email && <p className="error-message">{fieldErrors.email}</p>}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            value={formState.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {fieldErrors.message && <p className="error-message">{fieldErrors.message}</p>}

          <button type="submit">Send Message</button>
        </form>
        {isMessageSent && <p className="confirmation-message">Message sent!</p>}
      </section>
    </div>
  );
}

export default Contact;
