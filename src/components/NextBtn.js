import React from 'react'

const NextBtn = (props) => {
    return (
        <button onClick={() => props.progressHandler('next')}>
            Next
            <img src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/next.svg'} />
        </button> 
    )
}

export default NextBtn
