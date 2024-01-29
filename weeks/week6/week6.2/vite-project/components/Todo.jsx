import { useEffect, useState } from "react";

function Todo({id}){
    const [todo , setTodo] = useState({});

    useEffect(()=>{
        (async()=>{
            try{
              const response = await fetch(`http://localhost:4000/api/todo?id=${id}`);
              if(!response.ok){
                throw new Error(`HTTP error! Status : ${response.status}`)
              }
              const data = await response.json();
              setTodo(data);
            }catch(error){
              console.log(`Error fetching todo: ${error.message}`)
            }
          })();
    },[id])

    return (
        <div>
            <h1>{todo.title}</h1>
            <h4>{todo.description}</h4>
        </div>
    )
}

export default Todo;