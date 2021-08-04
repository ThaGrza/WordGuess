import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { themeChange } from '../../actions';

export default function(props) {
    const dispatch = useDispatch();
    const themeWords = props.themeWords;
    // console.log(themeWords);

    return (
        <div className='theme-card'>
            <Link onClick={() => console.log(themeWords)} to="/Gamepage">
                <h2 className="themecard-header">{props.title}</h2>
                <img className="theme-image" alt={props.theme} src={props.image} />
                <p className="difficulty-rating">{props.difficulty}</p>
                {/* <button onClick={() => dispatch(themeChange())} className="themeButton">Click me</button> */}
            </Link>
        </div>
    );
}

// onClick={() => dispatch(themeChange(props.title))}