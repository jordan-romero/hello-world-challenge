import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = (props) => {
    
    return (
        <div>
            <ProjectCard project={props.project}/>
        </div>
    )
}

export default Projects
