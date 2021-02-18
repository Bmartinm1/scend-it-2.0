import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const ClimbPage = () => {
  const [climb, setClimb] = useState({})

  const {id} = useParams()

  const getClimb = async() => {
    try {
      const response = await fetch(`/api/v1/climbs/${id}`)

      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setClimb(body.climb)
    } catch(errors) {
      console.error(errors)
      console.error(`Error in Fetch: ${errors.message}`)
    }
  }

  useEffect(() => {
    getClimb()
  }, [])

  return (
    <div className='climb-show'>
      <div className='grid-container'>
        <div className='callout small-up-6 medium-up-4 large-up-2' id='fa-grade'>
          <div className='climb-name text-center'>
            <h2> 
              {climb.name}
            </h2>
          </div>
          <h6>
            Grade: {climb.grade}{climb.gradeMod}
          </h6>
          <h6>
            FA: {climb.firstAscent || 'Unknown'}
          </h6>
        </div>
        <div className='callout' id='climb-info'>
          <h6>Beta:</h6>
            <p>{climb.beta}</p>
          <h6>Notes:</h6>
            <p>{climb.notes}</p>
          <h6>Safety:</h6>
            <p>{climb.safety}</p>
        </div>
      </div>
    </div>
  )

}

export default ClimbPage
