import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ClimbTile from './ClimbTile.js'

const CragShowPage = props => {
  const [crag, setCrag] = useState({
    id: '',
    name: '',
    state: '',
    country: '',
    climbs: []
  })

  const cragId = props.match.params.id

  const getCrag = async () => {
    try {
      const response = await fetch(`/api/v1/crags/${cragId}`)
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setCrag(body.crag)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCrag()
  }, [])

  const climbTiles = crag.climbs.map((climb) => {
    return (
      <ClimbTile
        key={climb.id}
        climb={climb}
      />
    )
  })

  return (
    <div className='grid-container text-center' id='crag-show'>
      <div className='crag-show-content'>
        <h1>{crag.name}</h1>
        <div className='grid-x grid-margin-x small-2 medium-3'>
          {climbTiles}
        </div>
        <div className='grid-x grid-margin-x'>
          <div className='small-4 small-offset-4' id='new-climb-form-card'>
            <Link to={`/crags/${cragId}/climbs/new`}>
              <h4>Develop a new climb?</h4>
              <p>Submit it for review here!</p>
            </Link>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default CragShowPage

