import React from 'react'
import { useState } from 'react'

const SearchBar = ({
    getQuery
}) => {
   
    const [text, setText] = useState('')

    const onChange = q => {
        setText(q)
        getQuery(q)
    }

    return (
        <div className="searchbar-container">
            <form className="form">
                <input 
                    className='input'
                    type="text" 
                    placeholder='Search recipes'
                    value={text}
                    onChange={e => onChange(e.target.value)}
                    />
            {/* ----BUTTON NOT NECESSARY FOR FILTER FUNCTION */}
                {/* <button 
                    className="btn"
                    disabled={isLoading || !value}
                    type="submit"
                        >
                            Search
                </button> */}
            </form>
        </div>
    )
}

export default SearchBar
