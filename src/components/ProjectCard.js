import React from 'react'

const ProjectCard = (props) => {
    // console.log(props.type)
    return (
        <div className='card'>
            <img className='card__img' src={props.project.image} alt={props.project.title} />
            <h3 className='card__title'>{props.project.title}</h3>
            <img className='card__btn' src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/complete.svg'}/>
        </div>   
    )
}

export default ProjectCard
