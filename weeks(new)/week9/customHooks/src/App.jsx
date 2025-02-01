import React from 'react'
import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [mount, setMount] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setMount(prev => !prev); // Correct way to toggle state
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return <div>{mount && <MyClassMountComponent />}</div>;
}


function MyFuncComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
   
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

function MyFuncMountComponent() {
  useEffect(() => {
    console.error("component mounted")

    return () => {
      console.log("component unmounted")
    };
  }, []);

  return <div>From inside my component</div>
}

class MyClassMountComponent extends React.Component {
  componentDidMount() {
    console.log("mounted")
  }

  componentWillUnmount() {
    console.log("unmounted")
  }

  render() {
    return <h1>hello</h1>
  }
}


export default App
