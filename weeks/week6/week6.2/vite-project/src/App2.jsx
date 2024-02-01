import { useState , useEffect, useMemo } from "react";


function App2(){

    const [counter , setCounter] = useState(0);
    const [input , setInput] = useState(1);
    

    let count = useMemo(()=>{
     console.log("runned")
        let finalCount = 0;
        for(let i=1; i<=input; i++){
            finalCount = finalCount + i;
        }
        return finalCount;
    },[input])   

 return (
    <>
    <input onChange={(e)=>{setInput(e.target.value)}}/>

    <p>{count}</p>
    <button onClick={()=>{setCounter(counter + 1)}}>Counter : {counter}</button>
    </>
 )
}

export default App2;