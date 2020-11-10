import React from 'react'

const Error = ({ message }) => {
    return (
        <div className="col d-flex justify-content-center">
            <h3>{message}</h3>
        </div>
    )
}

export default Error
