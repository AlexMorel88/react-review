import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function TodoList() {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    const div = document.createElement('div');
    div.textContent = inputValue;
    div.addEventListener('dblclick', handleDivDoubleClick); // Add event listener
    document.getElementById('container').appendChild(div);
  }

  function handleDivDoubleClick(e) {
    if (e.target.style.textDecoration === 'line-through') {
      e.target.style.textDecoration = 'none';
    } else {
      e.target.style.textDecoration = 'line-through';
    }
  }

  return (

    <div>
      <h1>Que souhaitez vous absolument faire ?</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Ajouter</button>
      <div id="container"></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>
      </header>
    </div>
  );
}


export default App;
