import React from 'react'
import Logos from '../Logos';
import { data, intro } from '../../data/aboutData'

const About = () => {
  return (
    <>
    <h2>About</h2>
    <div className='about'>
    <div className='intro'>
      {
        intro.map((intro)=> (
          <p key={intro.id}>{intro.about}</p>
        ))
      }
    </div>
    <div className='details'>
    <div className='verticalLine'></div>
      {
        data.map((data)=> (
          <ul key={data.id}>
            <li className='name'>{data.name}</li>
            <li className='value'>{data.value}</li>
            </ul>
        ))
      }
      </div>
    </div>
    
    <Logos />
    </>
  )
}

export default About;