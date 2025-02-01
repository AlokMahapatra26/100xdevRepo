import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
   
  
    useEffect(() => {
        // Fetch immediately
        axios.get("http://localhost:4000/api/todos")
            .then(res => {
                setTodos(res.data || []);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching todos:", error);
                setLoading(false);
            });
    
        // Start polling
        const intervalId = setInterval(() => {
            axios.get("http://localhost:4000/api/todos")
                .then(res => {
                    setTodos(res.data || []);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching todos:", error);
                    setLoading(false);
                });
        }, n * 1000);
    
        return () => clearInterval(intervalId);
    
    }, [n]); // Dependency on `n` so it updates if `n` changes
    
  
    return { todos, loading };
}

export default useTodos;
