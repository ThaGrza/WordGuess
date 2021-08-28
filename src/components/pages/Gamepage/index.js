import React from 'react'
import Letters from '../../Letters';
import Alphabet from "../../../alphabet.json";
import { useSelector } from 'react-redux';
import './style.css';
import hangmanImage from "../../../images/hangman/hangman.png";

const lettersGuessed = [];
var publicWord = [];

const Gamepage = (props) => {
    const themeReducer = useSelector(state => state.themeReducer);
    const letterGuess = useSelector(state => state.guessedReducer[0]);
    var guessed = false;


// Sets current word to be guessed.
    var words = [];
    for(let i = 0; i < themeReducer[2].length; i++){
        words.push(themeReducer[2][i]);
    }
    var currentWord = words[0];
    var guessesLeft = 7;

    if(lettersGuessed.length === 0){
        console.log(lettersGuessed);
        hideCurrentWord();
    }
    function hideCurrentWord(){
        for(let i = 0; i < currentWord.length; i++){
            publicWord.push('_ ');
        }
    }

    function compareGuess(){
        console.log(publicWord);
        for(let i = 0; i < currentWord.length; i++){
            if(letterGuess === currentWord[i]){
                publicWord.splice(i, 1, letterGuess);
            }
        }
    }

    if(letterGuess !== " "){
        lettersGuessed.push(letterGuess);
        compareGuess();
    }


    return (
        <div className="game-container" style={{ backgroundImage: "url(" + themeReducer[1] + ")"}}>
            <div className="game-title">
                <h1 className="header">{themeReducer[0]}</h1>
            </div>
            <div className="hangman-container">
                <img className="hangmanImage" alt="hangman" src={hangmanImage} />
                <div className="guesses-left">Guesses Left: {guessesLeft}</div>
                <div className="guesses-letters">{lettersGuessed}</div>

                <div className="current-word">
                    {publicWord}
                </div>
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









// once a letter has been clicked display red X over letter tile or remove tile