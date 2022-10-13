import React, {FormEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    let repetition : number = 1;
    const [input, setInput] = useState("");
    let Array : string[] = input.split(' ');
    const listItem = Array.map((Array,index)=>
        <li key={index}>{
        Array
    }</li>);
    for (let i = 0; i < Array.length; i++){
        for (let j = 0; j < Array.length; j++){
            if (Array[i] === Array[j] && i !== j){
                repetition++;
                console.log("duplicate element",Array[j],"repetition",repetition);
            }
        }
        repetition = 1;
    }
    console.log(Array);

  return (
    <div className="App">
        <input type={"text"} value={input} onChange={(e)=> setInput(e.target.value)}/>
        <br/>
        <ul>
            {listItem}
        </ul>
    </div>
  );
}

export default App;
