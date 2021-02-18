import React, { useState, useEffect } from 'react'

import CragTile from './CragTile'

const CragIndex = props => {
  const[crags, setCrags] = useState([])

  const getCrags = async () => {
    try {
      const response = await fetch(`/api/v1/crags`)

      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }

      const body = await response.json()
      setCrags(body.crags)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCrags()
  }, [])

  const cragTiles = crags.map(crag => {
    return (
      <CragTile
      key={crag.id}
      crag={crag}
      />
    )
  })

  return (
    <div className='grid-container text-center' id='crag-index'>
      <h1>Climbing areas:</h1>
      <div className='grid-x grid-margin-x small-up-2'>
        {cragTiles}
      </div>
    </div>
  )
}

export default CragIndex
