import React, { useRef } from 'react';
import './contact.styles.scss';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cgq2iu7', 'template_xlgasvy', form.current, '24RlqRczSqN2G_sJe')
      .then((result) => {
          console.log(`${result.text} message sent`);
          alert("Message sent! Thank you for your contact. We'll get back to you as soon as possible.");
      }, (error) => {
          console.log(error.text);
          alert("Sorry. Something went wrong. We couldn't send your message. Please try again later or contact us using another method in our Contact me section.");
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>delanobmarques@gmail.com</h5>
            <a href="mailto:delanobmarques@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Delano Marques</h5>
            <a href="https://m.me/delano.brandesmarques" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>          
            <a href="https://web.whatsapp.com/send?phone=+19024833800" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>


      </div>
    </section>
  )
}

export default Contact;