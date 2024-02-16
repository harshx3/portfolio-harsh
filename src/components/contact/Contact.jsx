import React from 'react'
import Logos from '../Logos'

const Contact = () => {
  return (
    <>
    <form className='form'> 
       <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' className='input' />
        </div>
        <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' className='input' />
        </div>
        <div>
        <label htmlFor="story" className='story'>About Yourself:</label>
        <textarea id="story" name="story" rows="5" cols="33">
        </textarea>
        </div>
<button className='sentBtn'>Sent</button>
    </form>
   <Logos />
    </>
  )
}

export default Contact