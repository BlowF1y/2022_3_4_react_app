import logo from './LGM_ingame_2.jpg';
import './App.css';
import { faker } from "@faker-js/faker";

function App() {
  const h1Element = <h1>제목 태그 입니다</h1>
  const imgElement = <img src={logo} className="App-logo" alt="logo" />

        testData.map(function(contents){
          return <li>{contents}</li>
        })

        testData.map((contents)=><li>{contents}</li>)
  return (
   
    <div className="App">
      <header className="App-header">
      { h1Element }
      { imgElement }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>

        </ul>
      </header>
    </div>
  );
}

export default App;
