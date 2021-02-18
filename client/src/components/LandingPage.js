import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = (props) => {
  return (
    <div className='landing-page'>
      <div className="grid-container text-center landing-header grid-margin-y grid-y">
        <div className='cell'>
          <h3> <strong>Scend It</strong></h3>
        </div>
        <div className='cell'>
          <h5>
            <Link className='landing-link' to='/Crags'>Find your Crag</Link>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
