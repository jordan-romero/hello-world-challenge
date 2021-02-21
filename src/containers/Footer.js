import React from 'react'

const Footer = (props) => {

    const conditionBtnRender = () => {
        if (props.counter <= 9 && props.counter > 0) {
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
        } else if (props.counter === 0) {
            return (
            <button onClick={() => props.progressHandler('next')}>
                Next
                <img src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/next.svg'} />
            </button> 
            )
        } else {
            return (
            <button onClick={() => props.progressHandler('back')}>
                    <img src={'https://storage.googleapis.com/hw-challenge-assets/course-level-view/icons/back.svg'} />
                    Back
            </button>
            )
        }
    }
    return (
        <div className='footer'>
            {conditionBtnRender()}
        </div>
    )
}

export default Footer
