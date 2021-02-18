import express from 'express'

import { Crag } from '../../../models/index.js'
import CragSerializer from '../../../serializers/CragSerializer.js'

const cragsRouter = new express.Router()

cragsRouter.get('/', async (req, res) => {
  try {
    const crags = await Crag.query()
    const serializedCrags = crags.map(crag => {
      return CragSerializer.getSummary(crag)
    })
    return res.status(200).json({ crags: serializedCrags })
  } catch (error) {
    return res.status(500).json({errors: error})
  }
})

cragsRouter.get('/:id', async (req, res) => {
  try {
    const cragId = req.params.id
    const crag = await Crag.query().findById(cragId)
    const serializedCrag = await CragSerializer.getDetails(crag)
    return res.status(200).json({ crag: serializedCrag })
  } catch(error) {
    return res.status(500).json({ errors: error })
  }
})

//cragsRouter.use('/:cragId/climbs', newClimbRouter)

export default cragsRouter
