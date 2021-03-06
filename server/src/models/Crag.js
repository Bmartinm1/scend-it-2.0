const Model = require('./Model')

class Crag extends Model {
  static get tableName() {
    return 'crags'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name', 'state'],
      properties: {
        name: { type: 'string' },
        state: { type: 'string' }
      }
    }
  }

  static get relationMappings () {
    const Climb = require('./Climb.js')

    return {
      climbs: {
        relation: Model.HasManyRelation,
        modelClass: Climb,
        join: {
          from: 'crags.id',
          to: 'climbs.cragId'
        }
      }
    }
  }
}

module.exports = Crag
