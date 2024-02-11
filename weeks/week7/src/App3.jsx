import { RecoilRoot , useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, evenSelector } from "./store/atoms/count"


function App() {


  return (
    <div>
      <RecoilRoot>
        <Button/>
      </RecoilRoot>
    </div>
  )
}

function Button(){
  return (
    <ButtonRender />
  )
}

function ButtonRender(){
  
  

  return (
    <>
    <ButtonRendererModule/>
    <ButtonID/>
    <EvenOddText/>
    
    </>
    
  )
}


function ButtonRendererModule(){

  const count = useRecoilValue(countAtom);
  return (
    <>
      <button>{count}</button><br />
      
    </>

  )
}

function ButtonID(){

  const  setCount = useSetRecoilState(countAtom);
  {
    console.log("button render")
  }
  return (
    <>
       <button onClick={()=>{setCount(c=>c+1)}}>increment</button>
      <button onClick={()=>{setCount(c=>c-1)}}>decrement</button>
    </>
 
  )
}

function EvenOddText(){
  const isEven = useRecoilValue(evenSelector);
  return(
    <div>
      {isEven ? "It is Even" : "It is Odd"}
    </div>
    
  )
}

export default App