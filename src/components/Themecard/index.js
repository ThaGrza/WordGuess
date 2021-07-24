import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { themeChange } from '../../actions';

export default function(props) {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <div className='theme-card'>
            <Link to="/Gamepage" onClick = {() => dispatch(themeChange)}>
                <h2 className="themecard-header">{props.title}</h2>
                <img className="theme-image" alt={props.theme} src={props.image} />
                <p className="difficulty-rating">{props.difficulty}</p>
            </Link>
        </div>
    );
}