import React from 'react'
import './style.css';
import { useDispatch } from 'react-redux';
import { letterGuessed } from '../../actions/letterGuessed';


const Letters = (props) => {
    const dispatch = useDispatch();
    
    return (
        <div className="letters-box">
            <button className="letter-button" onClick={() => dispatch(letterGuessed(props.letter))}>{props.letter}</button>
        </div>
    )
}

export default Letters;
