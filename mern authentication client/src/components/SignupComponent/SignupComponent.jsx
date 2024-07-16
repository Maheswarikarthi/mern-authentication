import React, { useState } from 'react'
import './SignupComponent.css'
const SignupComponent = () => {
  const [FirstName,setFirstname]=useState('')
  const [lastName,setlastname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleSubmit=(event)=>
  {
    event.preventDefault();
    console.log("Firstname:",FirstName)
    console.log("lastname:",lastName)
    console.log("email:",email)
    console.log("password:",password)

  }
  return (
   <div className='sign'>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <div className='name'>
        <label htmlFor='Firstname'>FirstName : 
        </label>
        <input type="text"
        id="FirstName"
        value={FirstName}
        onChange={(e)=>setFirstname(e.target.value)}
        required
        />
      </div>
      <div className='class5'>
        <label htmlFor='Lastname'>LastName : 
        </label>
        <input type="text"
        id="lastname"
        onChange={(e)=>setlastname(e.target.value)}
        required
        value={lastName}
        />
      </div>
      <div className='class6'>
        <label htmlFor='Email'>Email : 
        </label>
        <input type="text"
        id="email"
        onChange={(e)=>setEmail(e.target.value)}
        required
        value={email}
        />
      </div>
      <div className='class7'>
        <label htmlFor='password'>Password : 
        </label>
        <input type="text"
        id="password"
        onChange={(e)=>setPassword(e.target.value)}
        required
        value={password}
        />
      </div>
      <div className='class8'>
        <button type="submit">Submit</button>
       </div>
    </form>
   </div>
  )
}

export default SignupComponent