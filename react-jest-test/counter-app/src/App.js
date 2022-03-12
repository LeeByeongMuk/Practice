import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="App">
      <h3 data-testid="counter">{counter}</h3>
      <div>
        <button
          data-testid="minus-button"
          disabled={isDisabled}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          disabled={isDisabled}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          data-testid="on/off-button"
          style={{
            backgroundColor: 'blue'
          }}
          onClick={() => setIsDisabled(prev => !prev)}
        >
          on/off
        </button>
      </div>
    </div>
  );
}

export default App;
