import React from 'react'
import Themecard from '../../Themecard'
import Themes from '../../../words.json';
import './style.css';

function Homepage(props) {

    return (
        <div className="homepage-container">
            <p className="site-info">
                Choose a theme you would like to play! All words will be directly related to the theme.
            </p>
            <div className="theme-selection">
                {Themes.map(Themes => (
                    <Themecard
                    title={Themes.title}
                    image={Themes.image}
                    difficulty={Themes.difficulty}
                    themeWords={Themes.words}
                    themeTitle={Themes.title}
                    themeBck={Themes.themeBackground}
                    />
                ))}
            </div>
        </div>
    )
}
export default Homepage;