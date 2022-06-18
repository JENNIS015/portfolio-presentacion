import React, { useState } from "react";
import IconMail from "./Icon";
import styles from "./contact.module.css";
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
 
    let response =  fetch("/contact", {
      method: "POST",
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="fifty">
          <IconMail />
        </div>
        <div className="fifty">
          <form
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <h1 className={styles.title}>Talk to Us</h1>

            <div className={styles.formAction}>
              <label htmlFor="name" className="d-block">
                <i className="icon" data-feather="user"></i>
              </label>
              <input
                type="text"
                id="name"
                className={styles.formControl}
                placeholder="Name"
              />

              <label htmlFor="email" className="d-block">
                <i className="icon" data-feather="mail"></i>
              </label>
              <input
                type="email"
                id="email"
                className={styles.formControl}
                placeholder="Email"
              />

              <textarea
                id="message"
                className={styles.message}
                rows="7"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className={styles.btnPrimary} tabIndex="-1">
                {status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
