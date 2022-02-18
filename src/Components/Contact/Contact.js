import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from '@mui/material';
import './Contact.css';
import { Icon } from '@iconify/react';


export default function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5gpnfnk', 'template_sgmp2xj', e.target, 'user_YeUwC6WQsK1xiMGVBrKzC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
          alert('Thanks for contacting me! I will reply you soon! 📧') 
          
  };

  return (
    <>
      <header className="contact_header">
        <hr />
          <Icon icon="clarity:email-line" color="#5987b6" width="50" height="50" />
          <h3>Contact</h3>
        <hr />
      </header>
      <Container fluid className="contact_container mt-5">                
        <form  className="form_box" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Container>
    </>
  );
};

