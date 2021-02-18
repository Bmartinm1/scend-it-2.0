import express from 'express'

import { Climb } from '../../../models/index.js'
import ClimbSerializer from '../../../serializers/ClimbSerializer.js'

const climbsRouter = new express.Router()

climbsRouter.get('/:id', async (req,res) => {
  const id = req.params.id
  try {
    const climb = await Climb.query().findById(id)
    const serializedClimb = await ClimbSerializer.getSummary(climb)
    return res.status(200).json({ climb: serializedClimb })
  } catch (errors) {
    return res.status(500).json({ errors })
  }
})

export default climbsRouter
