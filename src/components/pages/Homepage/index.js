import React, { useState } from 'react'
import Themecard from '../../Themecard'
import Themes from '../../../words.json';
import './style.css';


function Homepage(props) {
    const [themeTitle, setThemeTitle] = useState();



    return (
        <div className="homepage-container">
            <div className="theme-selection">
                {Themes.map(Themes => (
                    <Themecard
                    title={Themes.title}
                    image={Themes.image}
                    difficulty={Themes.difficulty}
                    />
                ))}
            </div>
        </div>
    )
}
export default Homepage;