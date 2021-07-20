import React, { useState } from 'react';
import Header from './comonents/Header';
import Play from './comonents/Play';
import Game from './comonents/Game';
import Footer from './comonents/Footer';
import {Switch, Route} from 'react-router-dom';

function App() {

  const [myChoice, setMyChoice] = useState("")
  const [score, setScore] = useState(0)
  return (
    <>
    <div className="container">
      <Header score={score} />
      <Switch>
        <Route path="/" exact>
          <Play setMyChoice={setMyChoice} />
        </Route>
        <Route path="/game">
          <Game myChoice={myChoice} score={score} setScore={setScore}/>
        </Route>
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
