import React, { useState } from 'react'
import './LoginComponent.css'
const LoginComponent = () => {
const [userName,setuserName]=useState('')
const [password,setpassword]=useState('')
const submitHandler=(event)=>
{
  event.preventDefault();
  console.log('username:',userName);
  console.log('password:',password)
}

  return (
    <div className='class'>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
       <div className='class1'>
        <label htmlFor='userName'>Email : </label>
        <input type="text"
        id="username"
        value={userName}
        onChange={(e)=>setuserName(e.target.value)}
        required
        >
        </input>
       </div>
       <div className='class2'>
        <label htmlFor='password'>Password : </label>
        <input type="text"
        id="password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        required
        >
        </input>
       </div>
       <div className='class3'>
        <button type="submit">Login</button>
       </div>
      </form>
      
        
   
    </div>
  )
}

export default LoginComponent