import React from 'react'

const BackBtn = (props) => {
    return (
        <button onClick={() => props.progressHandler('back')}>
            <img src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/back.svg'} />
            Back
        </button>
    )
}

export default BackBtn
