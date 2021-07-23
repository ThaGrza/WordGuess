import React from 'react'


function Gamepage(props) {

    return (
        <div className="game-container">
            <h1 className="header">hello{props.title}</h1>
        </div>
    )
    
}

export default Gamepage
