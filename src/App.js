import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';

function App(props) {
  const [color, setColor] = useState(props.color);

  function ColorButtons() {
    const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'violet'];
    
      let test = colors.map((color, i) => {
        return (<div className='Color-buttons-container'>
              <button key={color} style={{backgroundColor: color}} onClick={() => handleClick(color)}>{color}</button>
              </div>)
      })
  
      return test;
  }

  function handleClick(color) {
    console.log(color);
    setColor(color);
  }

    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: color }}>
          <ColorButtons/>
        </header>
      </div>
    );
}

export default App;
