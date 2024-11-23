import React, { useState } from "react";
import "./style/Collection.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or API)
    console.log("Form submitted", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset form after submit
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <div className="contact-info">
        <p>Have questions? We'd love to hear from you!</p>
        <ul>
          <li>Email: support@haibo.com</li>
          <li>Phone: +1 (234) 567-890</li>
          <li>Address: 123 Haibo St, Sport City</li>
        </ul>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
