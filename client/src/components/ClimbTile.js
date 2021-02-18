import React from 'react'
import { Link } from 'react-router-dom'

const ClimbTile = ({ climb }) => {
  return (
    <div className="cell">
      <div className="card" id='climb-card'>
        <div className="card-section">
        <Link to={`/climbs/${climb.id}`}>
          <h4>{climb.name}, {climb.grade}{climb.gradeMod}</h4>
          <p>{climb.crag}</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default ClimbTile
