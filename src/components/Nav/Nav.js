import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {

  const [show, handleShow] = useState(false);

  const navigate = useNavigate();
  
  const transitionNavBar = () => {
    if(window.scrollY > 100){
      handleShow(true);
    }else{
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  },[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
          {show && <img src='/logo.png' className='nav__logo'/>}
          {!show && <img src='/logo_shadow.png' className='nav__logo_large'/>}    

          {show && <img onClick={() => navigate("/profile")} src='/avatar.png' className='avatar'/>}
          {!show && <img onClick={() => navigate("/profile")} src='/avatar.png' className='avatar__large'/>}    
          
        </div>
    </div>
  )
}

export default Nav