import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <div className='theme-card'>
            <Link to="/Gamepage" >
                <h2 className="themecard-header">{props.title}</h2>
                <img className="theme-image" alt={props.theme} src={props.image} />
                <p className="difficulty-rating">{props.difficulty}</p>
            </Link>
        </div>
    );
}