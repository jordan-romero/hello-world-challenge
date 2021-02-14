import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = (props) => {
    // console.log(props.progress)
    return (
        <div className='projects'>
            <ProjectCard project={props.project} progress={props.progress}/>
        </div>
    )
}

export default Projects
