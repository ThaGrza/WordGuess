import React from 'react'
import Letters from '../../Letters';
import Alphabet from "../../../alphabet.json";
import { useSelector } from 'react-redux';
import './style.css';

const Gamepage = (props) => {
    const themeReducer = useSelector(state => state.themeReducer);
// {themeReducer[2]} => theme words;




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
            {/* Display word count for hidden word */}

            {/* Map through game tiles */}

            {/* Win / lose logic */}

            {/* Misses Letter hangman animation */}

        </div>
    )
}

export default Gamepage;
