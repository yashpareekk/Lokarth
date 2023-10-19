import React from 'react'
import vote from "../../assets/vote.png"
import "./VoteIndia.css"

import line from "../../assets/Line.png"
const VoteIndia = () => {
  
  return (

    <div className='comp2'>
      <div className='mainContainer1'>
        <div className='know'>
          <p><img src={line} alt='line'/> A New Era of Democracy</p>
        </div>
        
        <div className='text'>
          <div className='ngo'>
            <p>We are a Non-Governmental Organization</p>
            <p className='new_heading'>Bridging Citizens, Parties, and Representatives</p>
          </div>
          <div className='matter1'>
            <p>As a society, we stand at the threshold of a new era where technology holds the key to unlocking the full potential of democracy. Lokarth is that key—a digital gateway that empowers citizens to voice their concerns, political parties to connect with their constituents, and elected representatives to deliver on their promises. With Lokarth, the traditional boundaries between voters and those who seek to represent them are transcended, forging a united front in the pursuit of a stronger, more vibrant democracy.</p>
          </div>
        </div>


        <div className='flag'>

          <div className='vote_image'>
            <img src={vote} alt='Vote India' />
          </div>
          <div className='lines'>
            <div className='orange' />
            <div className='blue' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoteIndia
