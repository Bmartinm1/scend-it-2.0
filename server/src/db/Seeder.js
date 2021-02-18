import { connection } from '../boot.js'
import CragSeeder from './seeders/CragSeeder.js'

class Seeder {
  static async seed () {
    console.log('seeding crags...')
    await CragSeeder.seed()

    // console.log('seeding climbs...')
    // await ClimbSeeder.seed()
  
    console.log('done')
    await connection.destroy()
  }
}

export default Seeder
