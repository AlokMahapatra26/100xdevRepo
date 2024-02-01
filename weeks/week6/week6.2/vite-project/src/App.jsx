import { useEffect , useState , memo} from "react";


function App(){

    const [count , setCount] = useState(0);

    function logSomething(){
        console.log("child clicked")
    }

    return <div>
         <Child />
        <button onClick={()=>{
            setCount(count+1)
        }}>
            Click me {count}
        </button>
    </div>
        
    
}

const Child = memo(() => {
    console.log("child render")

    return <div>
        <button >Button clicked</button>
    </div>
})

export default App;