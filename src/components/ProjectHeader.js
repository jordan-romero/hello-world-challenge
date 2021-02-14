import React from 'react'

const ProjectHeader = (props) => {
    return (
        <div className='header'>
            <h1 className='heading-1'>{props.type} Projects</h1>
            {props.type  === 'independent' ? <span className='heading-2 heading-2--blue'>Complete {props.group.required} of {props.group.projects.length}</span> : null}
            <h2 className='heading-2'>{props.group.title}</h2>
        </div>
    )
}

export default ProjectHeader
