import React from 'react'

const BackBtn = (props) => {
    return (
        <button onClick={() => props.progressHandler('back')} className='button button--back'>
            <img src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/back.svg'} />
            <span>Back</span>
        </button>
    )
}

export default BackBtn
