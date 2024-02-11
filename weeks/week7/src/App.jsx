import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { TotalNotificationSelector, notifications } from "./store/atoms/atoms";

function App() {

  
   
  

  return (
    <RecoilRoot>
       <NavBar/>
    </RecoilRoot>
   
  )
}

function NavBar(){

  const [notification , setNotification] = useRecoilState(notifications)

  

  console.log(notification.messages)

  return (
    <>
    <button>Home</button>
    <button>My network ({notification.networks})</button>
    <button>Jobs ({notification.jobs})</button>
    <button>Messages ({notification.messages})</button>
    <button>Notification ({notification.notifications})</button>
    <button>Me</button>
    </>
  )
}

export default App