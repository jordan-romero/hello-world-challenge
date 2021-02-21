import React from 'react'
import BackBtn from '../components/BackBtn'

const Footer = (props) => {

    const conditionBtnRender = () => {
        if (props.counter <= 9 && props.counter > 0) {
            return (
                <div>
                    <BackBtn progressHandler={props.progressHandler} />
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
                <BackBtn progressHandler={props.progressHandler} />
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
