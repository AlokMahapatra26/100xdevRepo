import React , { useState , useEffect } from 'react'

function App() {
  const [render, setRender] = useState(true)

  useEffect(()=>{
    setInterval(()=>{
      setRender(r => !r);
    },1000)
  },[])

  return (
    <>
     {render ? <MyComponent/> : <div>2nd div</div>}
    </>
  )
}

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component mounted")
  }

  componentWillUnmount() {
    console.log("Component unmounted")
  }

  render() {
   return (
    <>
      <h1>Hello</h1>
    </>
   )
  }
}

export default App
