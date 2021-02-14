import React, { useState, useEffect } from 'react'
import ProjectGroups from './ProjectGroups'
import { getCourse } from '../services/service'
import Footer from './Footer'

const Course = () => {

    const [course, setCourse] = useState({})

    useEffect(() => {
        getCourse()
        .then(data => {
                setCourse(data)
        })
    }, [])
   const projGroups = () => {
       return course.project_groups ? course.project_groups.map((group) => {return <ProjectGroups key={group.id} group={group} type={group.type}/>}) : null 
   } 
    return (
        <div>
            {projGroups()}
            <Footer />
        </div>
    )
}

export default Course
