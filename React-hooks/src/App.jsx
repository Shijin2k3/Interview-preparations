import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContext } from './UserContext'
import { Component1 } from './Component1'

function App() {
  // const [count, setCount] = useState(0)
 // const [user,setUser]=useState("Jessie")
  // const [input,setInput]=useState("")
  // const count =useRef(0)
  // useEffect(()=>{
  //   count.current=count.current+1
  // })
  // const inputElement=useRef()

  // const focusInput=()=>{
  //   inputElement.current.focus()
  //}
  // const reducer=(state,action)=>{
  //   switch (action.type) {
  //     case 'increment':
  //       return { count: state.count + 1 };
  //     case 'decrement':
  //       return { count: state.count - 1 };
  //     case 'reset':
  //       return { count: 0 };
  //     default:
  //       throw new Error('Unknown action type');
  //   }
  // };
  


  //const [state,dispatch]=useReducer(reducer,{count:0})



  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Expensive computation function
  const expensiveComputation = (num) => {
    console.log('Computing...');
    return num * 2;
  };

  // Memoized value
  const computedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <>
    {/* useState */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
         counter --
        </button>
        <h2>{count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
         counter ++
        </button>
       </div> */}
       {/* useContext */}
       {/* <UserContext.Provider value={user}>
        <Component1 />

       </UserContext.Provider> */}

       {/* useRef */}
       {/* <input type="text" value={input}
       onChange={e =>setInput(e.target.value)} />
       <h1>Render Count :{count.current}</h1>
     
     */}
        {/* <input type="text" ref={inputElement}  />
        <button onClick={focusInput}>focus Input</button> */}
        {/* Usereducer */}
        {/* <h1>count :{state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button> */}


        {/* useMemo */}
        <h1>useMemo Example</h1>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
        <h2>Count: {count}</h2>
        <h2>Computed Value: {computedValue}</h2>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <h2>Text: {text}</h2>
      </div>
    </>
  )
}

export default App
