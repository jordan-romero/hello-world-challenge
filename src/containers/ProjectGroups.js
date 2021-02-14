import React from 'react'
import Projects from './Projects'
import ProjectHeader from '../components/ProjectHeader'

const ProjectGroups = (props) => {
    
    const projects = () => {
        return props.group.projects ? props.group.projects.map((project) => {return <Projects key={project.id} project={project} type={props.group.type} />}) : null
    }

    return (
        <div className='center-content'>
            <div>
                <ProjectHeader type={props.type} group={props.group}/>
                <div className='cards'>
                {projects()}
                </div>
            </div>
        </div>
    )
}

export default ProjectGroups
