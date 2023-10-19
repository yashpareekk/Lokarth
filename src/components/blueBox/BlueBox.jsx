import React from 'react'
import "./BlueBox.css"
import Slider1 from '../../slider/Slider1'



const BlueBox = () => {
  return (
    <div className='comp_3'>
      <div className='container'>
        <div className='display'>
          <div className='left'>
            <p className='h1'>our mission</p>
            <p className='h2'>Empowering Democracy through Transformation</p>
            <p className='matter'>Our mission is simple yet profound: to empower voters with information, connect political entities with their constituents, and transform the democratic process into a more accessible and transparent endeavour. Lokarth is driven by the belief that when citizens are informed and political parties are accountable, the entire democratic ecosystem thrives.</p>
            <p className='h3'>Our Supporters</p>
          </div>
          <div className='right'>
            <p className='h1'>our Vision</p>
            <p className='h2'>Fostering a Vibrant Democracy for a United Voice</p>
            <p className='matter'>We envision a democracy where every voice resonates, where citizens are informed participants, and where political entities uphold the highest standards of accountability. Our vision is to create a cohesive platform that fosters meaningful connections and empowers individuals to play an active role in shaping their nation's destiny.</p>
          </div>

        </div>
        <Slider1 />
      </div>
    </div>
  )
}

export default BlueBox
