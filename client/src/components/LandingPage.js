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
          <p>
            Thanks for coming by! I am in the process of learning Typescript, Angular, and MySQL. Consequently, this app is a bit (a lot) broken and will remain that way for a little while longer. Please feel free to <a target='blank' href='mailto: Ben.martinmooney@gmail.com'>get in touch</a> if you have questions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
