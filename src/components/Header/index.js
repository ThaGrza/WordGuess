import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <Link className="site-header-container" to="/">
                <h1 className="site-header">Pop Culture Hangman</h1>
            </Link>
        </div>
    );
}

export default Header;
