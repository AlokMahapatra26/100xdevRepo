import { useEffect, useState } from 'react'
import TodoBox from '../components/TodoBox';
import Todo from '../components/Todo';

function App1() {
  

  const [todos , setTodos] = useState([]);
  const [id  ,setId] = useState('65b71a8f2860450c0558ea86');

  useEffect(()=>{
    (async()=>{
      try{
        const response = await fetch("http://localhost:4000/api/todos");
        if(!response.ok){
          throw new Error(`HTTP error! Status : ${response.status}`)
        }
        const data = await response.json();
        setTodos(data);
      }catch(error){
        console.log(`Error fetching todo: ${error.message}`)
      }
    })();
  },[])
   
  return (
    <>
    <button onClick={()=>{setId('65b71a8f2860450c0558ea86')}}>1</button>
    <button onClick={()=>{setId('65b71aa62860450c0558ea88')}}>2</button>
    <button onClick={()=>{setId('65b71b062860450c0558ea8b')}}>3</button>
    <button onClick={()=>{setId('65b71b2f2860450c0558ea8d')}}>4</button>
    {/* {
        todos.map((todo)=>{
          return (
            <TodoBox title={todo.title} description={todo.description} completed={todo.completed} createdAt={todo.createdAt}/>
          )
         
        })
    } */}

    <Todo id={id}/>

    
    </>
      
    
  )


}

export default App1
