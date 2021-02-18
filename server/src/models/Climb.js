const Model = require('./Model')

class Climb extends Model {
  static get tableName() {
    return 'climbs'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'grade', 'climbType'],
      properties: {
        name: {
          type: 'string',
          minLength: 1,
          maxLength: 255
        },
        grade: {
          type: 'string'
        },
        gradeMod: {
          type: 'string'
        },
        firstAscent: {
          type: 'string'
        },
        beta: {
          type: ['text', 'string'],
          minLength: 0,
          maxLength: 1250
        },
        notes: {
          type: ['text', 'string'],
          minLength: 0,
          maxLength: 1250
        },
        safety: {
          type: ['text', 'string'],
          minLength: 0,
          maxLength: 1250
        },
        qualityRating: {
          type: ['string', 'integer']
        },
        climbType: {
          type: 'string'
        }
      }
    }
  }
  static get relationMappings() {
    const {Crag} = require('./index.js')

    return {
      crag: {
        relation: Model.BelongsToOneRelation,
        modelClass: Crag,
        join: {
          from: 'climbs.cragId',
          to: 'crags.id'
        }
      }
    }
  }
}

module.exports = Climb;
