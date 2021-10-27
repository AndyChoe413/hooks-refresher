import React, {useState,useEffect} from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const poop = <img style={{width: 100, height: 100}} src="https://elephant.art/wp-content/uploads/2019/11/poop-emoji.jpg" alt="" />
  

  return (
    <div className="App">
      <div>
        <button className='buttons' onClick={() => setCount(count - 1)}>-</button>
        <h1>{count}</h1>
        <button className='buttons' onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
          <h4 >{ poop }</h4>
      </div>
    </div>
  );
}

export default App;
