import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { themeChange } from '../../actions';

export default function(props) {
    const dispatch = useDispatch();
    const themeWords = props.themeWords;
    const themeTitle = props.themeTitle;
    const themeBck = props.themeBck;

    return (
        <div className='theme-card'>
            <Link onClick={() => dispatch(themeChange(themeTitle,themeBck,themeWords))} to="/Gamepage">
                <h2 className="themecard-header">{props.title}</h2>
                <img className="theme-image" alt={props.theme} src={props.image} />
                <p className="difficulty-rating">{props.difficulty}</p>
            </Link>
        </div>
    );
}