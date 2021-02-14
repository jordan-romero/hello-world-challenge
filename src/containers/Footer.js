import React from 'react'

const Footer = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={() => props.progressHandler('back')}>Back</button>
            <button onClick={() => props.progressHandler('next')}>Next</button>
        </div>
    )
}

export default Footer
