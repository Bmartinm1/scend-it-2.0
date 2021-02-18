/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Crag } from '../../models/index.js'

class CragSeeder {
  static async seed () {
    const cragsData = [
      {
        name: 'Hammond Pond',
        state: 'MA'
      },
      {
        name: 'Farley Ledge',
        state: 'MA'
      },
      {
        name: 'Rock House Reservation',
        state: 'MA'
      },
      {
        name: 'Cathedral Ledge',
        state: 'NH'
      },
      {
        name: 'Pawtuckaway',
        state: 'NH'
      },
      {
        name: 'Rumney',
        state: 'NH'
      },
      {
        name: 'Lincoln Woods',
        state: 'RI'
      },
      {
        name: 'Rocky Point',
        state: 'RI'
      },
      {
        name: 'Rome Point',
        state: 'RI'
      }
    ]

    for (const singleCragData of cragsData) {
      const currentCrag = await Crag.query().findOne(singleCragData)

      if (!currentCrag) {
        await Crag.query().insert(singleCragData)
      }
    }
  }
}

export default CragSeeder
