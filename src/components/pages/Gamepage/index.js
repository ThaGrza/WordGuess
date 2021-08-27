import React from 'react'
import Letters from '../../Letters';
import Alphabet from "../../../alphabet.json";
import { useSelector } from 'react-redux';
import './style.css';
import hangmanImage from "../../../images/hangman/hangman.png";

const Gamepage = (props) => {
    const themeReducer = useSelector(state => state.themeReducer);
    const letterGuessed = useSelector(state => state.guessedReducer[0]);

// Sets current word to be guessed.
    var words = [];
    for(let i = 0; i < themeReducer[2].length; i++){
        words.push(themeReducer[2][i]);
    }
    var currentWord = words[0];
    const guessedLetters = [];
    var displayCurentWord = ''
    var guessesLeft = currentWord.length + 5;

    function hideCurrentWord(){
        for(let i = 0; i < currentWord.length; i++){
            displayCurentWord += '_ ';
        }
    }

    function compareGuess(letter){
        for(let i = 0; i < currentWord.length; i++){
            if(letterGuessed === currentWord[i]){

            }
        }
    }

    hideCurrentWord();



    // function changeWord(){
    //     words.shift();
    // }


    // if(letterGuessed === 'E' ){
    //     changeWord();
    // }

    return (
        <div className="game-container" style={{ backgroundImage: "url(" + themeReducer[1] + ")"}}>
            <div className="game-title">
                <h1 className="header">{themeReducer[0]}</h1>
            </div>
            <div className="hangman-container">
                <img className="hangmanImage" alt="hangman" src={hangmanImage} />
                <div className="guesses-left">{guessesLeft}</div>
                <div className="current-word">
                    {displayCurentWord}
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