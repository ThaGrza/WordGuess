import React, { useState } from 'react'
import Letters from '../../Letters';
import Alphabet from "../../../alphabet.json";
import { useSelector } from 'react-redux';
import './style.css';

const Gamepage = (props) => {
    const themeReducer = useSelector(state => state.themeReducer);
    let letterGuessed = 'l';



    return (
        <div className="game-container" style={{ backgroundImage: "url(" + themeReducer[1] + ")"}}>
            <div className="game-title">
                <h1 className="header">{themeReducer[0]}</h1>
            </div>
            <div className="tiles-container">
                {Alphabet.map(Alphabet => (
                    <Letters
                    letter={Alphabet.letter}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gamepage;
