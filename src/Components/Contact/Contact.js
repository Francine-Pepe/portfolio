import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from '@mui/material';
import './Contact.css';
import { Icon } from '@iconify/react';
import Postit from './../Images/postit.png';

export default function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5gpnfnk', 'template_sgmp2xj', form.current, 'user_YeUwC6WQsK1xiMGVBrKzC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
          alert('Thanks for contacting me! I will reply you soon! 📧') 
          
  };
  
//   const onSubmit = (data, r) => {
//     alert(`Thank you for your message from ${data.email}`);
//     const templateId = 'template_l7s9qxd';
//     const serviceID = 'my_gmail';
//     sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
//     r.target.reset();
// }

  return (
    <>
      <header className="contact_header">
        <hr />
          <Icon icon="clarity:email-line" color="#5987b6" width="50" height="50" />
          <h3>Contact</h3>
        <hr />
      </header>
      <Container fluid className="contact_container mt-5"
        sx={{
          display: 'flex',
          marginTop: 5,
          
        }}
      
      >   
        {/* <div className='postit_text'>
          <p>Did you enjoy my work <br /> and would <br />like to develop a project?<br />Just drop me <br /> a line! <br /> Francine 🙂</p>
          
        </div>
        <img className="postit" src={Postit} alt="postit" width="500" height="500" /> */}
        
        <form  className="form_box" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <button type="submit" value="Send" ><Icon icon="fluent:send-28-regular" color="#F8F8F8" width="40" height="35" /></button>
        </form>
      </Container>
    </>
  );
};

