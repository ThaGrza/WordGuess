import React from 'react'
import Letters from '../../Letters';
import Alphabet from "../../../alphabet.json";
import { useSelector } from 'react-redux';
import './style.css';

const Gamepage = (props) => {
    const themeReducer = useSelector(state => state.themeReducer);
    const letterReducer = useSelector(state => state.letterReducer);

    for(let i = 0; i < themeReducer[2]; i++){
        var currentWord = themeReducer[i];
    }

    console.log(currentWord);





// Set current word from themeWord list

// for loop through current word (themeword) with letterreducer













    return (
        <div className="game-container" style={{ backgroundImage: "url(" + themeReducer[1] + ")"}}>
            <div className="game-title">
                <h1 className="header">{themeReducer[0]}</h1>
            </div>
            <div className="hangman-container">
                <div className="hangman">
                </div>
                <div className="current-word">
                    {/* {themeReducer[2]} */}
                </div>
            </div>
            <div className="tiles-container">
                {Alphabet.map(Alphabet => (
                    <Letters
                    letter2={Alphabet.letter}
                    letter={Alphabet.letter}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gamepage;