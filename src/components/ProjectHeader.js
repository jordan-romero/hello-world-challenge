import React from 'react'

const ProjectHeader = (props) => {
    console.log(props.group)
    
    return (
        <div>
            {props.type  === 'independent' ? `${props.type} Complete ${props.group.required} of ${props.group.projects.length}` : props.type}
            {props.group.title}
        </div>
    )
}

export default ProjectHeader
