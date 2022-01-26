import { useState } from "react";
import GamesWon from "./GamesWon";
import Header from "./Header";
import Moves from "./Moves";
import Result from "./Result";
import SheldonMoves from "./SheldonMoves";


function App() {
  const [currentMove, setcurrentMove] = useState('');
  const [sheldonKaMove, setSheldonKaMove] = useState('');
  const [totalGames, setTotalGames] = useState(0);

  const increaseGames = () => {
    setTotalGames(totalGames + 1); 
  }

  const decesionMaking = (sheldonKaMove, currentMove) => {
    // if (sheldonKaMove === currentMove) {
    //   console.log(false, 'RESULT sh, cm', sheldonKaMove, currentMove);
    //   return false;
    // }
    console.log(currentMove, 'My Move');
    console.log(sheldonKaMove, "sheldon's Move");
    const graph = [{
      element: "Rock",
      wins: ["Lizzard", "Scissor"]
    },
    {
      element: "Paper",
      wins: ["Spock", "Rock"]
    },
    {
      element: "Scissor",
      wins: ["Paper", "Lizard"]
    },
    {
      element: "Lizard",
      wins: ["Spock", "Paper"]
    }, {
      element: "Spock",
      wins: ["Rock", "Scissor"]
    }];

    for (let i = 0; i < 5; i++) {
      if (graph[i].element === currentMove) {
        if (graph[i].wins[0] === sheldonKaMove || graph[i].wins[1] === sheldonKaMove) {
          console.log('I won');
          return 1;
        }
      }
    }

    for (let i = 0; i < 5; i++) {
      if (graph[i].element === sheldonKaMove) {
        if (graph[i].wins[0] === currentMove || graph[i].wins[1] === currentMove) {
          console.log('Sheldon Won');
          return 0;
        }
      }
    }


    console.log('DRAW');

    return -2;
  }
  const [result, setResult] = useState(-1);
  // decesionMaking();

  const [score, setscore] = useState(0);
  const increaseScore = () => {
    let newScore = score + 1;
    setscore(newScore);
  }
  return (
    <div className="App">
      <Header />
      <Moves currentMove={currentMove} setcurrentMove={setcurrentMove} />
      {currentMove && <SheldonMoves increaseGames = {increaseGames} increaseScore={increaseScore} result={result} setResult={setResult} sheldonKaMove={sheldonKaMove} setSheldonKaMove={setSheldonKaMove} decesionMaking={decesionMaking} currentMove={currentMove} />}
      {result !== -1 && <Result result={result} />}
      <GamesWon score={score} totalGames = {totalGames}/>
    </div>
  );
}

export default App;
