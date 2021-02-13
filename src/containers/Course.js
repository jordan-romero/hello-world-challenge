import React, { useState, useEffect } from 'react'
import ProjectGroups from './ProjectGroups'
import { getCourse } from '../services/service'

const Course = () => {

    const [course, setCourse] = useState({})

    useEffect(() => {
        getCourse()
        .then(data => {
                setCourse(data)
        })
    }, [])
    console.log(course)
    return (
        <div>
            <ProjectGroups />
        </div>
    )
}

export default Course
