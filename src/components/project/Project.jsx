import React from 'react'
import Logos from '../Logos';
import { projectsData } from '../../data/projectsData';

const Project = () => {
  return (
    <>
    <h2>Projects</h2>
    <div className='projectDiv'>
   {
    projectsData.map((project)=> (
      <div key={project.id} className='project'>
        <img src={project.img} className='projectImg' alt='project_img' />
        <p>{project.name}</p>
        <p>{project.tech}</p>
      </div>
    ))
   }
    </div>

    <Logos />
    </>
  )
}

export default Project;