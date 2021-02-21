import React from 'react'

const ProjectCard = (props) => {

    const projGroup = props.progress.project_groups 
    const projs = projGroup && Object.entries(projGroup).map(([key, value])  =>  {
        return  (
            key, value 
        );
    }) 
    // console.log(projs)
    
    const projects = projs && projs.map((project) => {
        return Object.entries(project.projects).filter((proj) => {
            return proj[0] === props.project.id
        })
    })
    const arr = []
    projects && projects.map((proj) => {
        if (proj.length > 0) {
            arr.push(proj)
        }
    })
    
    const statusObj = arr.length > 0 && arr[0][0][1]
    const status = statusObj && Object.entries(statusObj)[0][1]

    console.log(status)
    const renderButton = () => {
        switch (status) {
            case "not_started":
                return <img className='card__btn' src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/lock.svg'} alt={'btn'}/>
            case "in_progress":
                return <img className='card__btn' src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/play.svg'} alt={'btn'}/>
            case "completed":
                return <img className='card__btn' src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/complete.svg'} alt={'btn'}/>
        
            default:
                break;
        }
    }

    
    return (
        <div className='card'>
            <img className='card__img' src={props.project.image} alt={props.project.title} />
            <h3 className='card__title'>{props.project.title}</h3>
            {renderButton()}
        </div>   
    )
}

export default ProjectCard
