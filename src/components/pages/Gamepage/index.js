import React from 'react'
import Letters from '../../Letters';
import Alphabet from "../../../alphabet.json";
import { useSelector } from 'react-redux';
import './style.css';
import hangmanImage from "../../../images/hangman/hangman.png";

var lettersGuessed = [];
var publicWord = [];
var correctGuess = 0;
var guessesLeft = 7;
var inPlay = false;

const Gamepage = (props) => {
    const themeReducer = useSelector(state => state.themeReducer);
    const letterGuess = useSelector(state => state.guessedReducer[0]);

// CHANGE TO FUNCTION AND CALL FROM IF STATEMENT BASED ON THEME WORDS EQUALLING SOMETHING
    var words = [];
    for(let i = 0; i < themeReducer[2].length; i++){
        // FIGURE OUT THEMEREDUCER WORD POSITIONS AND SET VARIABLE TO GO TO NEXT WORD WHEN 
        words.push(themeReducer[2][i]);
    }
    var currentWord = words[0];
    // FIX THIS
    function wordSelector(count){
        for(count; count < themeReducer[2].length; count++){
            words.push(themeReducer[2][count]);
        }
    }

    if(inPlay === false){
        hideCurrentWord()
    }    

    function hideCurrentWord(){
        for(let i = 0; i < currentWord.length; i++){
            publicWord.push('_ ');
        }
    }

    function gameReset(){
        correctGuess = 0;
        guessesLeft = 7;
        publicWord = [];
        lettersGuessed = [];
    }

    function scoreKeeper(guess){
        if(guess === true){
            correctGuess += 1;
        }else if(guess === false){
            guessesLeft -= 1;
        }
        if(correctGuess === currentWord.length){
            alert("Round Won!");
            gameReset();

        }
        if(guessesLeft === 0){
            alert("You've been hung!")
            gameReset();
        }
    }

    function compareGuess(){
        let guess = false;
        for(let i = 0; i < currentWord.length; i++){
            if(letterGuess === currentWord[i]){
                publicWord.splice(i, 1, letterGuess);
                guess = true;
            }
        }
        scoreKeeper(guess);
    }
    
    // Starts the gameplay Loop
    if(letterGuess !== " "){
        wordSelector(0);
        inPlay = true;
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
                <div className="guesses-left">Correct Guesses: {correctGuess}</div>
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
