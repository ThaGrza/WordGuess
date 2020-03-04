import React from 'react';
import './style.css';

export default function(props) {
    return (
        <div className='themecard'>
            <div className='img-container'>
                <img alt={props.theme} src={props.image} />
            </div>
            <div className='theme-content'>
                <ul>
                    <p>
                        <strong className='theme-name'> {props.theme} </strong>
                    </p>
                </ul>
            </div>
        </div>
    );
}
