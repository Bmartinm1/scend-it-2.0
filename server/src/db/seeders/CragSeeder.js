/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { Crag } from '../../models/index.js'

class CragSeeder {
  static async seed () {
    const cragsData = [
      {
        name: 'Hammond Pond',
        state: 'MA',
        longitude: '',
        latitude: ''
      },
      {
        name: 'Farley Ledge',
        state: 'MA',
        longitude: '',
        latitude: ''
      },
      {
        name: 'Rock House Reservation',
        state: 'MA',
        longitude: '',
        latitude: ''
      },
      {
        name: 'Cathedral Ledge',
        state: 'NH',
        longitude: '',
        latitude: ''
      },
      {
        name: 'Pawtuckaway',
        state: 'NH',
        longitude: '',
        latitude: ''
      },
      {
        name: 'Rumney',
        state: 'NH',
        longitude: '',
        latitude: ''
      },
      {
        name: 'Lincoln Woods',
        state: 'RI',
        longitude: '',
        latitude: ''
      },
      {
        name: 'Rocky Point',
        state: 'RI',
        longitude: '',
        latitude: ''
      },
      {
        name: 'Rome Point',
        state: 'RI',
        longitude: '',
        latitude: ''
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
