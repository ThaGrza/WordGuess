import React from 'react';
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Game from './components/Game';
import Footer from './components/Footer';
import words from './words.json';
import Themecard from './components/Themecard';



function App() {
  return (
    <div>
      <Wrapper >
        <Header />
        <Themecard
          word={words[0].name}
          image={words[0].image}
          soundbite={words[0].soundbite} 
          />
          <Themecard
          word={words[1].name}
          image={words[1].image}
          soundbite={words[1].soundbite} 
          />
          <Themecard
          word={words[2].name}
          image={words[2].image}
          soundbite={words[2].soundbite} 
          />
        {/* <Game /> */}
        {/* <Footer /> */}
      </Wrapper>
    </div>
  )
};

export default App;
