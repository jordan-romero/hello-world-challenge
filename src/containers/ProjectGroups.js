import React from 'react'
import Projects from './Projects'
import ProjectHeader from '../components/ProjectHeader'

const ProjectGroups = (props) => {
    const projects = () => {
        return props.group.projects ? props.group.projects.map((project) => {return <Projects key={project.id} project={project}/>}) : null
    }

    console.log(props.group)
    return (
        <>
        <ProjectHeader type={props.type} group={props.group}/>
        <div className='cards'>
           {projects()}
        </div>
        </>
    )
}

export default ProjectGroups
