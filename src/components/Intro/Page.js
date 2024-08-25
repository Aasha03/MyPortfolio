/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import About from '../About';
import './Page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import bg from '../assets/img.png'
function Page() {
  return (
    <>
    <section className='intro'>
      <div className='introcontent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='name'>Ghantasala Asha</span> <br />Software Engineer</span>
          <p className='para'>A self-taught developer with a interest in Computer Science.</p>
          <div className='social-media'>
            <a href="https://github.com/Aasha03" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/ghantasala-aasha" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:ghantasala.aasha@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1g6G6p9gEfY9nwholN5jOK93CLCF4ry42/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn">My Resume</a>
      </div>
      <img src={bg} alt='profile' className='bg'/>
    </section>
      
      </>

  )
}

export default Page
