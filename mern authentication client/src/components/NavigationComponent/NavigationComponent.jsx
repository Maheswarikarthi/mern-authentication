import React from 'react'
import { BrowserRouter as Router,Routes,Link, Route } from 'react-router-dom'
import LoginComponent from '../LoginComponent/LoginComponent'
import SignupComponent from '../SignupComponent/SignupComponent'
import './NavigationComponent.css'


const NavigationComponent = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to='' >Login </Link></li>
            <li><Link to='/SignUp'>SignUp</Link></li>
          
          </ul>
        </nav>
      </header>
     <Routes>
      <Route exact path='/' element={<LoginComponent/>}></Route>
      <Route  exact path='/SignUp' element={<SignupComponent/>}></Route>

     </Routes>
    </Router>
  )
}

export default NavigationComponent