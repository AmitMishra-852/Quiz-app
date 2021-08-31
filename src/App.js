import React, { useState } from "react"
import './App.css';
import Quiz from "./Quiz";
import Start from "./component/Start";


function App() {
  const [quizPlayer , setQuizPlayer] = useState(null)
  console.log(quizPlayer)
  return (
    <div className="app">
      {
        quizPlayer ? <Quiz setQuizPlayer={setQuizPlayer}/> : <Start setQuizPlayer={setQuizPlayer}/>
      }
    </div>
  );
}

export default App;
