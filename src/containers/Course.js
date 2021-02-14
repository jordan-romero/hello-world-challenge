import React, { useState, useEffect } from 'react'
import ProjectGroups from './ProjectGroups'
import { getCourse } from '../services/service'
import Footer from './Footer'

const Course = () => {

    const [course, setCourse] = useState({})

    const [progress, setProgress] = useState({})

    const [counter, setCounter] = useState(1)

    const progressArr = [
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-01.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-02.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-03.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-04.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-05.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-06.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-07.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-08.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-09.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-10.json',
        'https://storage.googleapis.com/hw-challenge-assets/course-level-view/progress/course-progress-11.json'
    ]

    useEffect(() => {
        getCourse()
        .then(data => {
                setCourse(data)
        })
    }, [])

    useEffect(() => {
        fetch(progressArr[0])
        .then(response => response.json())
        .then(data => {
                setProgress(data)
        })
    }, [])

   const projGroups = () => {
       return course.project_groups ? course.project_groups.map((group) => {return <ProjectGroups key={group.id} group={group} type={group.type} progress={progress}/>}) : null 
   } 

   const progressHandler = (option) => {
        if (option === 'next') {
            setCounter(counter + 1)
            fetch(progressArr[counter])
            .then(response => response.json())
            .then(data => {
                    setProgress(data)
            })
        } else {
            setCounter(counter - 1)
            fetch(progressArr[counter])
            .then(response => response.json())
            .then(data => {
                    setProgress(data)
            })
        }
   }
   
    return (
        <div>
            {projGroups()}
            <Footer progressHandler={progressHandler}/>
        </div>
    )
}

export default Course
