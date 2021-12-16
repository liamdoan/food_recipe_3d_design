import React from 'react'
import LoadingSpinner from '../images/spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img 
                src={LoadingSpinner} 
                style={{
                    width: '200px',
                    margin:'auto',
                    display:'block'
                }}
                alt="loading" />
        </div>
    )
}

export default Spinner
