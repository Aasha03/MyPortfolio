/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Nav.css';
// import Intro from "../Intro/Page"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import menu from '../assets/menu.png'
import {Link} from 'react-scroll';
import logo from '../assets/logo.png';
function Nav() {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <>  
    <nav className='navBar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='Menu'>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='link'>Home</Link>
              <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='link'>About</Link>
              <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='link'>Projects</Link>
              <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='link'>Contact</Link>
        </div>
        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display:showMenu? 'flex':'none'}}>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
              <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='listItem'  onClick={()=>setShowMenu(false)}>About</Link>
              <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(!false)}>Projects</Link>
              <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(!false)}>Contact</Link>
        </div>
        
      </nav>
      
    </>
  )
}

export default Nav
