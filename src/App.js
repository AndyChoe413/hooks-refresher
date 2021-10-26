import React, {useState,useEffect} from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button className='buttons' onClick={() => setCount(count - 1)}>-</button>
       <h1>{ count }</h1>
      <button className='buttons' onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
