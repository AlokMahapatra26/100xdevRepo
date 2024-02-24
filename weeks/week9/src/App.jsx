
//CUSTOM HOOKS 


import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(n){
    const [todos, setTodos] = useState([])
    const [loading , setLoading] = useState(true);
 
  useEffect(() => {

    const val = setInterval(()=>{
        axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
    },n*1000)

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })

    return  (
        clearInterval(val)
    )  

  }, [n])
  return {todos , loading};
}

function useIsOnline(){
    const [isOnline , setIsOnline] = useState(navigator.onLine);

    useEffect(()=>{
        const x = setInterval(()=>{
            setIsOnline(navigator.onLine);
        },5000)

        return (
            clearInterval(x)
        )
        
    },[])

    
    return isOnline
}





function App() {
  
   
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App