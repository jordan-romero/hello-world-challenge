import React from 'react'

const Footer = (props) => {
    return (
        <div>
            <button onClick={() => props.progressHandler('back')}>
            <img src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/back.svg'} />
                Back
            </button>
            <button onClick={() => props.progressHandler('next')}>
                Next
                <img src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/next.svg'} />
            </button>
            
            
        </div>
    )
}

export default Footer
