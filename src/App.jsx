import { useState } from 'react';

import './App.css'

function App() {
  const [state,setState] = useState(0)
 

  const addFun=()=>{
    // setState((final)=>final+1) 
    setState(()=>state+1);
    
    
  }

  const decFun=()=>{
    setState((final)=>final-1)
  
  }

  console.log(state);

  return (
    <>
      <h1>Chai Or hooks</h1>
      <h2>Counter Value: {state} </h2>
      <button onClick={addFun}>Add</button>
      <button onClick={decFun}>Remove</button>
      
    </>
  )
}

export default App
