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

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      username: formData.username,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(
      "service_3t8edq8",      // 🔴 replace
      "template_urp9t3n",     // 🔴 replace
      templateParams,
      "Gw3YelfKY2DPQhdvE"       // 🔴 replace
    )
    .then(() => {
      alert("Message Sent Successfully ✅");

      setFormData({
        username: "",
        email: "",
        message: ""
      });
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send ❌");
    });
  };

  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={con} alt="Contact" />
      </div>

      <div className="rightcontact">
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            required
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <textarea
            placeholder="Message me"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>

          <input type="submit" id="btn" value="Submit" />

        </form>
      </div>
    </div>
  );
}

export default Contact;