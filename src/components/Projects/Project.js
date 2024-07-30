/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
// import image4 from '../assets/image4.jpeg';
import './Project.css';

function Project() {
  const projectRef = useRef(null);

  useEffect(() => {
    const currentProjectRef = projectRef.current;

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

    if (currentProjectRef) {
      observer.observe(currentProjectRef);
    }

    return () => {
      if (currentProjectRef) {
        observer.unobserve(currentProjectRef);
      }
    };
  }, []);

  return (
    <div>
      <section className='project' ref={projectRef}>
        <h2 className='heading'>My <span>Projects</span></h2>

        <div className='container'>
          <div className='box'>
            <img src={image1} alt='image1' />
            <div className='layer'>
              <h6>Sports Schedular</h6>
              <p><b>TechStack:</b>Html,CSS,JS,<br />EJS,Node.js,Express.js,Postgres</p>
              <a href="https://github.com/Aasha03/stack_501" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faUpRightFromSquare} id='i' />
              </a>
            </div>
          </div>
          <div className='box'>
            <img src={image2} alt='image2' />
            <div className='layer'>
              <h6>AquaMap</h6>
              <p><b>TechStack:</b>Resnet-18,Expo,React.js</p>
              <a href="https://github.com/Aasha03/AquaMap" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faUpRightFromSquare} id='i' />
              </a>
            </div>
          </div>
          <div className='box'>
            <img src={image3} alt='image3' />
            <div className='layer'>
              <h6>Study Easy</h6>
              <p><b>TechStack:</b>Html,CSS,JS,<br />EJS,Node.js,Express.js,MongoDB</p>
              <a href="https://github.com/Aasha03/Study-Easy" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faUpRightFromSquare} id='i' />
              </a>
            </div>
          </div>
          {/* <div className='box'>
            <img src={image4} alt='image4' />
            <div className='layer'>
              <h4>Project4</h4>
              <p>loerrrr r rjjjie njhfuhegegghtjgheu</p>
              <a href="https://github.com/Aasha03" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faUpRightFromSquare} id='i' />
              </a>
            </div>
          </div> */}
        </div>

        <div className="btn-container">
          <a href="https://github.com/Aasha03" target="_blank" rel="noopener noreferrer"className="btn1">More Projects</a>
        </div>
      </section>
    </div>
  );
}

export default Project;
