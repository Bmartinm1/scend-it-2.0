import React from 'react'
import { Link } from 'react-router-dom'

const CragTile = ({ crag }) => {
  return (
    <div className='cell'>
      <Link to={ `/crags/${crag.id}` }>
        <div className='card' id='crag-card'>
          <div className='card-section'>
            <h4>{ crag.name }</h4>
          </div>
        </div>
      </Link>
      
    </div>
  )
}

export default CragTile
