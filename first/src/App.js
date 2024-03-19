import './App.css';
import {useState} from 'react';

function App() {
  let[previous,current]=useState('')
  let Add = () =>{
    current('Rahul')
  }
  let Rem = () =>{
    current('')
  }

  return (
    <div className="App" style={{color:'red'}}>
        <h1>Hello Everyone I'm {previous}</h1>
        <button onClick={Add} style={{margin:'10px'}}>For Add</button>
        <button onClick={Rem}>For Remove</button>
    </div>
  );
}

export default App;
