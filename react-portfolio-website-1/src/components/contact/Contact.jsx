import React from "react";
import "./contact.scss";
import { AiOutlineMail } from "react-icons/ai"
import { RiMessengerLine } from "react-icons/ri"
import { FiFacebook } from "react-icons/fi"

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ffz7042', 'template_emkuhob', form.current, 'uAshLqfP4B_dIjzIO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option--icon" />
            <h4>Email</h4>
            <h5>tranleconghau772001@gmail.com</h5>
            <a href="mailto:tranleconghau@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option--icon" />
            <h4>Messenger</h4>
            <h5>Hau Tran</h5>
            <a href="https://m.me/hau772001" target="_blank" rel="noreferrer">Send a message</a>
          </article><article className="contact__option">
            <FiFacebook className="contact__option--icon" />
            <h4>Facebook</h4>
            <h5>Hau Tran</h5>
            <a href="https://www.facebook.com/hau772001" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
