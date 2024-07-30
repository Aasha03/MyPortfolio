import React, { useEffect, useRef, useState } from 'react';
import linkedin from '../assets/linkedin.png'; 
import github from '../assets/github.png'; 
import gmail from '../assets/gmail.png'; 
import './Contact.css'; 
import emailjs from '@emailjs/browser';


function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current; 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentSection); 
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9r8kkvf', 'template_0qqvxhi', form.current, 'e-Cggc6SGJKAyOUsK')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  return (
    <section ref={sectionRef} className={`contact ${isVisible ? 'fade-in' : ''}`}>
      <h2 className='head'>Contact <span className='me'>Me</span></h2>
      <form ref={form}  onSubmit={sendEmail}>
        <div className='input-box'>
          <input type='text' placeholder='Your Name' name='your_name'/>
          <input type='email' placeholder='Your Email' name='your_email'/>
        </div>
        <div className='input-box'>
          <input className='sub' type='text' placeholder='Email Subject' name='your_subject'/>
        </div>
        <textarea className='msg' name='message' cols="30" rows="5" placeholder='Your Message' />
        <button type='submit' className='submitBtn'>Submit</button>
        <div className='icons'>
          <a href="https://www.linkedin.com/in/ghantasala-aasha" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt='LinkedIn' className='icon' />
          </a>
          <a href="https://github.com/Aasha03" target="_blank" rel="noopener noreferrer">
            <img src={github} alt='GitHub' className='icon' />
          </a>
          <a href="mailto:ghantasala.aasha@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmail} alt='Gmail' className='icon' />
          </a>
        </div>
      </form>
    </section>
  );
}

export default Contact;
