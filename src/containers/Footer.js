import React from 'react'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'

const Footer = (props) => {

    const conditionBtnRender = () => {
        if (props.counter <= 9 && props.counter > 0) {
            return (
                <div className='footer'>
                    <BackBtn progressHandler={props.progressHandler} />
                    <NextBtn progressHandler={props.progressHandler} />
                </div>
            )
        } else if (props.counter === 0) {
            return (
                <div className='footer'>
                    <NextBtn progressHandler={props.progressHandler} />
                </div>
            )
        } else {
            return (
                <div className='footer'>
                    <BackBtn progressHandler={props.progressHandler} />
                </div>
            )
        }
    }
    return (
        <div>
            {conditionBtnRender()}
        </div>
    )
}

export default Footer
