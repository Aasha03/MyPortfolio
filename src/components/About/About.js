import React, { useEffect, useRef } from 'react';
import './About.css';
import image from '../assets/about.jpg';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const currentAboutRef = aboutRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optionally, stop observing after the element is visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (currentAboutRef) {
      observer.observe(currentAboutRef);
    }

    return () => {
      if (currentAboutRef) {
        observer.unobserve(currentAboutRef);
      }
    };
  }, []);

  return (
    <section className='about' ref={aboutRef}>
      <div className='about-img'>
        <img src={image} alt="" />
      </div>
      <div className='about-content'>
        <h2 className='heading'>ABOUT<span>Me</span></h2>
        <p>
          Ambitious graduate with a Bachelor's degree in Computer Science and Engineering. Eager to kickstart my career and
          contribute positively to a forward-thinking organization. Equipped with the skills necessary to thrive in a professional
          environment, I am seeking an entry-level position where I can apply my knowledge, learn new skills, and grow both
          personally and professionally.
        </p>
        <div className='about-skills'>
          <h2 className='heading'>Skills</h2>
          <ul className='skills-grid'>
            <li>Java</li>
            <li>Python</li>
            <li>Html</li>
            <li>Css</li>
            <li>React</li>
            <li>Node Js</li>
            <li>Spring Boot</li>
            <li>MySql</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
