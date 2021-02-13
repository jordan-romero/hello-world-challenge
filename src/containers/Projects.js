import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = (props) => {
    console.log(props.project)
    return (
        <div>
            <ProjectCard project={props.project}/>
        </div>
    )
}

export default Projects
