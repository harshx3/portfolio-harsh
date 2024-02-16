import React from 'react';
import Logos from '../Logos';
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate = useNavigate();

    const contactHandler = ()=> {
        navigate('/contact');
    }

  return (
    <>
    <div className='homeOuterDiv'>
    <div className='homeDiv'>
        <span>Hi there, my name is</span>
        <p className='name'>Harsh Makwana</p>
        <p>I'm a Frontend Developer</p>

        <button className='contactButton' onClick={contactHandler}>
            Hire Me
        </button>
    </div>
    <Logos />
    </div>
    </>
  )
}

export default Home;