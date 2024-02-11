import { useState , memo} from "react"

function App() {

 

  const [ count , setCount] = useState(0);



  return (
    <>
     <h1>Hello world</h1>
     <p>{count}</p>
     <button onClick={()=>{setCount(count+1)}}>increment</button>
     <Header/>
    </>
  )
}

const Header = memo(() =>{
  return (
   
    <>
    {console.log("renderrrrrrrrrr")}
     <h1>I am just a dummy head component</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, temporibus blanditiis soluta hic similique id animm dolor? Quasi voluptate consectetur suscipit ipsa perspiciatis neque veritatis libero quidem iste, blanditiis repudiandae minus laborum mollitia aliquam? Nihil repellat minima aliquam possimus consequatur cupiditate repellendus voluptate libero earum.</p>
    </>
  )
})
export default App
