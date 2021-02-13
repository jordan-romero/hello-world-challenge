import React from 'react'

const ProjectCard = (props) => {
    // console.log(props)
    return (
        <div>
            <img src={props.project.image} alt={props.project.title} />
             {props.project.title}
        </div>
    )
}

export default ProjectCard
