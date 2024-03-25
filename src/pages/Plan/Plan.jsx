import { Link } from 'react-router-dom';

import React from 'react'
import './plan.css'

function Plan() {
  return (
    <div className='plan-content'>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <div className='boxes'>
        <div className='box'>
        <h1>Icon</h1>

        <h5>Arcade</h5>
        <p>$9/mo</p>
        </div>

        <div className='box'>
        <h1>Icon</h1>

        <h5>Advanced</h5>
        <p>$12/mo</p>
        </div>

        <div className='box'>
        <h1>Icon</h1>

        <h5>Pro</h5>
        <p>$15/mo</p>
        </div>
        
      </div>

      <div className='mid'>

      </div>
      <div className='buttons'>
        <button className='btn back'><Link to='/'>Go Back</Link></button>
        <button className='btn'> Next </button>
      </div>
    </div>
  )
}

export default Plan;
