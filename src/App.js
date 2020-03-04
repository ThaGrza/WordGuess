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
          theme={words[0].theme}
          word={words[0].word[0]}
          image={words[0].image}
          soundbite={words[0].soundbite} 
          />
          <Themecard
          theme={words[1].theme}
          word={words[1].word[1]}
          image={words[1].image}
          soundbite={words[1].soundbite} 
          />
          <Themecard
          theme={words[2].theme}
          word={words[2].word[2]}
          image={words[2].image}
          soundbite={words[2].soundbite} 
          />
          <Themecard
          theme={words[3].theme}
          word={words[3].word[3]}
          image={words[3].image}
          soundbite={words[3].soundbite} 
          />
        {/* <Game /> */}
        {/* <Footer /> */}
      </Wrapper>
    </div>
  )
};

export default App;
