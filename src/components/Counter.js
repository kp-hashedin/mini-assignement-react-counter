import { useState } from "react";
import './Counter.css'

const Counter = () => {
  const [Count, setCount] = useState(0);

  return (
    <div className="container">
      <div>
        <h1>Counter</h1>
        <div>
          <span>{Count}</span>
        </div>
        <button
          onClick={() => {
            setCount(Count - 1);
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(Count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
        <div>
        <button onClick={() =>{
            alert(Count)
        }}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;