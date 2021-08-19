import React from 'react'
import { useSelector } from 'react-redux';
import './style.css';

const Gamepage = (props) => {

    const themeReducer = useSelector(state => state.themeReducer);

    return (
        <div className="game-container" style={{ backgroundImage: "url(" + themeReducer[1] + ")"}}>
            <div className="game-title">
                <h1 className="header">{themeReducer[0]}</h1>
            </div>
            <div className="theme-words">
                <p>{themeReducer[2]}</p>
            </div>
        </div>
    )
}

export default Gamepage;
