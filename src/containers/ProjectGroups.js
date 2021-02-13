import React from 'react'
import Projects from './Projects'
import ProjectHeader from '../components/ProjectHeader'

const ProjectGroups = (props) => {
    const projects = () => {
        return props.group.projects ? props.group.projects.map((project) => {return <Projects key={project.id} project={project}/>}) : null
    }
    return (
        <div>
           <ProjectHeader />
           {projects()}
        </div>
    )
}

export default ProjectGroups
