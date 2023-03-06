// import React, { useState } from 'react';
import React from 'react';
import Plus from './Plus';
 
const array = [
  {name:"Mahend" , Age:"23"},
  {name:"Muthu" , Age:"20"},
  {name:"vicky" , Age:"21"},
  {name:"raj" , Age:"22"},
  {name:"kutty" , Age:"24"},
  {name:"manasa" , Age:"18"}
]

export default function App() {
  <>
  </>
  // const [counter, setCounter] = useState(0)

  // const incrementCounter = () => setCounter(counter + 1);
  // let decrementCounter = () => setCounter(counter - 1);
 console.log(array);
  return (
    // <Plus ButtonIncrement={incrementCounter} initialValue={counter} ButtonDecrement={decrementCounter}></Plus>
  <Plus value={array}/>
    );
}
