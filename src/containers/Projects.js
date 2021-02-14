import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = (props) => {
    
    return (
        <div className='projects'>
            <ProjectCard project={props.project}/>
        </div>
    )
}

export default Projects
