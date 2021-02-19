const Model = require('./Model')

class Attempt extends Model {
  static get tableName() {
    return 'attempts'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['attemptNumber'],
      properties: {
        attemptNumber: {
          type: ['integer', 'string'],
          minimum: 1
        },
        completed: {
          type: 'boolean'
        },
        notes: {
          type: 'string',
          minLength: 0,
          maxLength: 1250
        }
      }
    }
  }

  static get relationMappings() {
    const { User, Climb } = require('./index.js')

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'attempts.userId',
          to: 'users.id'
        }
      },
      climb: {
        relation: Model.BelongsToOneRelation,
        modelClass: Climb,
        join: {
          from: 'attempts.climbId',
          to: 'climbs.id'
        }
      }
    }
  }
}

module.exports = Attempt
