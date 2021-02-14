import React from 'react'

const ProjectCard = (props) => {
    // console.log(props)
    return (
        <div className='card'>
            <img className='card__img' src={props.project.image} alt={props.project.title} />
            <h3 className='card__title'>{props.project.title}</h3>
        </div>   
    )
}

export default ProjectCard
