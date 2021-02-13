import React from 'react'
import Projects from './Projects'
import ProjectHeader from '../components/ProjectHeader'

const ProjectGroups = (props) => {
    const projects = () => {
        return props.group.projects ? props.group.projects.map((projects) => {return <Projects key={projects.id} projects={projects}/>}) : null
    }
    return (
        <div>
           <ProjectHeader />
           {projects()}
        </div>
    )
}

export default ProjectGroups
