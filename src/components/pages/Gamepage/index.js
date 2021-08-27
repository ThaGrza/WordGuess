import React, { useState } from 'react'
import Letters from '../../Letters';
import Alphabet from "../../../alphabet.json";
import { useSelector } from 'react-redux';
import './style.css';
import hangmanImage from "../../../images/hangman/hangman.png";

const lettersGuessed = [];
var newWord = '';



const Gamepage = (props) => {
    const themeReducer = useSelector(state => state.themeReducer);
    const letterGuess = useSelector(state => state.guessedReducer[0]);
    var publicWord = ''
    var guessed = false;

// Sets current word to be guessed.
    var words = [];
    for(let i = 0; i < themeReducer[2].length; i++){
        words.push(themeReducer[2][i]);
    }
    var currentWord = words[0];
    var guessesLeft = 7;

    function hideCurrentWord(){
        for(let i = 0; i < currentWord.length; i++){
            publicWord += '_ ';
        }
    }
    hideCurrentWord();


// last letter of word doesnt display letter ??????????
    function compareGuess(){
        lettersGuessed.push(letterGuess);
        console.log(publicWord);
        console.log(currentWord);
        for(let j = 0; j < lettersGuessed.length; j++){
            for(let i = 0; i < currentWord.length; i++){
                if(lettersGuessed[j] === currentWord[i]){
                    newWord += lettersGuessed[j];
                }else{
                    newWord += ' _ ';
                    publicWord = newWord;
                }
            }
        }
        console.log(publicWord);
        console.log(lettersGuessed);
    }

    compareGuess();






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
                    letter2={Alphabet.letter}
                    letter={Alphabet.letter}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gamepage;









// once a letter has been clicked display red X over letter tile or remove tile
