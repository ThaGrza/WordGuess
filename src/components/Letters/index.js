import React from 'react'
import './style.css';

const Letters = (props) => {
    return (
        <div className="letters-box">
            <button className="letter-button">{props.letter}</button>
        </div>
    )
}

export default Letters;
