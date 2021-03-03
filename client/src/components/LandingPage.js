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
            Thanks for coming by! I am in the process of learning Typescript, Angular, and MySQL. Consequently, this app is a bit (a lot) broken and will remain that way for a little while longer. Please feel free to get in touch via my <a target='blank' href='https://github.com/Bmartinm1'>Github account</a> if you have questions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
