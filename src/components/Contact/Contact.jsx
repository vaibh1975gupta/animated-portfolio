import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import con from "../../assets/contact.png";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      username: formData.username,
      email: formData.email,
      message: formData.message
    };

    emailjs
      .send(
        "service_3t8edq8",
        "template_urp9t3n",
        templateParams,
        "Gw3YelfKY2DPQhdvE"
      )
      .then(() => {
        setStatus("success");
        setFormData({
          username: "",
          email: "",
          message: ""
        });
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="leftcontact">
          <div className="contact-image-wrapper">
            <img src={con} alt="Contact" />
          </div>
        </div>

        <div className="rightcontact">
          <p className="contact-subtitle">Get In Touch</p>
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-description">
            Have a project idea, collaboration opportunity, or just want to say
            hello? Feel free to send me a message.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              required
              value={formData.username}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="success-message">Message sent successfully ✅</p>
            )}

            {status === "error" && (
              <p className="error-message">Failed to send message ❌</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;