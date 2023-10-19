import React, { useEffect } from 'react'
import "./Header.css"
const Header = (props) => {

  
   

  return (
    
      <div className='mainContainer4'>
        <div className='headerContainer'>
         <div className='headerMatter'>
          <div className='headerHeading'>
            <p>Empowering Voters Defending<span> Democracy</span></p>
          </div>
          <div className='headerText'>
          Welcome to Lokarth, where traditional democracy meets modern connectivity. We are pioneering a revolutionary platform that acts as a bridge, connecting citizens, political parties, and elected representatives in a dynamic and meaningful way. 
          </div>
          </div>
        </div> 

        <div className='headerLogin'>
        <form>
            <p className='loginHead'>Login to your <span>Account</span></p>
            <p className='smallHead'>Already have an account? <span>Sign In</span></p>


            <div className='email'>
            <div>
            <label>Email</label>
            </div>
            <input type='text' name='email' ></input>
            </div>
            <div className='email'>
            <div>
            <label>Password</label>
            </div>
            <input type='password' name='password' ></input>
            </div>
            <div className='rememberMe'>
              <input type='checkbox'></input>
              <p className='rememberMeText'>Remember me on this device</p>
            </div>


            <button href="">Sign In</button>
          </form>
        </div>
      </div>
   
  )
}

export default Header
