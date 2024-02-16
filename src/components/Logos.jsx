import { useState } from "react"
import React from 'react'
import { ReactComponent as GithubLogo } from '../assets/icons/github2.svg';
import { ReactComponent as TwitterLogo } from '../assets/icons/twitter.svg';
import { ReactComponent as WhatsAppLogo } from '../assets/icons/whatsapp.svg';
import { ReactComponent as LinkedInLogo } from '../assets/icons/linkedin.svg';

const Logos = () => {

    const [isActive, setIsActive] = useState({
        github: false,
        twitter: false,
        whatsapp: false,
        linkedin: false,
    });


    const logoClickHandler = (logo)=> {
         setIsActive((prevState) => ({
            ...prevState,
            [logo]: !prevState[logo],
         }));
    }

  return (
    <div className='logoDiv'>
    <GithubLogo className={`logo ${isActive.github ? 'active' : ''}`} onClick={()=> logoClickHandler('github')}  />
    <TwitterLogo className={`logo ${isActive.twitter ? 'active' : ''}`} onClick={()=> logoClickHandler('twitter')} />
    <WhatsAppLogo className={`logo ${isActive.whatsapp ? 'active' : ''}`} onClick={()=> logoClickHandler('whatsapp')}  />
    <LinkedInLogo className={`logo ${isActive.linkedin ? 'active' : ''}`} onClick={()=> logoClickHandler('linkedin')}  />
    </div>
  )
}

export default Logos;