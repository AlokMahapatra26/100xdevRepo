import "./App.css";
import useTodos from "./customHooks/useTodos";
import { useState } from "react";
import useIsOnline from "./customHooks/useIsOnline";
import axios from "axios";
import useCursorLocation from "./customHooks/useCursorLocation";
import useDebounce from "./customHooks/useDebounce";




function App2() {
    const [inputValue, setInputValue] = useState('');

    const {todos , loading } = useTodos(100);
    const isOnline = useIsOnline();
    const cursorLocation = useCursorLocation();
    const debouncedValue = useDebounce(inputValue, 1000);
    console.log(debouncedValue)

  return (
    <>  
     <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="debounced input field"
    />
    <p>{cursorLocation.x} , {cursorLocation.y}</p>
       <h3>{isOnline ? "🟢 Online You are connected to the internet" : "🔴 Offline , check your interenet connection"}</h3> 
      {loading ? <p>Loading...</p> : (
        todos.length > 0 ? (
          todos.map(todo => <Track key={todo.id || todo._id} todo={todo} />)
        ) : (
          <p>No todos available</p>
        )
      )}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      <strong>{todo.title}</strong>
      <br />
      {todo.description}
    </div>
  );
}

export default App2;
