"use client"
import axios from 'axios'
import React, { useState } from 'react'

function Signup() {

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [email , setEmail] = useState("")

  return (
    <div>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder='name..' className='border p-2 m-2'/><br />
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' className='border p-2 m-2' /><br />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}  placeholder='password' className='border p-2 m-2' /><br />
        <button type='submit' className='bg-blue-300 p-2 m-2' onClick={()=>{
          axios.post("http://localhost:3000/api/user" , {
            username,
            email,
            password
          })
        }}>Sign up</button>
    </div>
  )
}

export default Signup
