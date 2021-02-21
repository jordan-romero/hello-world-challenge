import React from 'react'
import BackBtn from '../components/BackBtn'
import NextBtn from '../components/NextBtn'

const Footer = (props) => {

    const conditionBtnRender = () => {
        if (props.counter <= 9 && props.counter > 0) {
            return (
                <div>
                    <BackBtn progressHandler={props.progressHandler} />
                    <NextBtn progressHandler={props.progressHandler} />
                </div>
            )
        } else if (props.counter === 0) {
            return (
                <NextBtn progressHandler={props.progressHandler} />
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
