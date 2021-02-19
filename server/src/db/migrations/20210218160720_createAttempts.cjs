/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('attempts', (table) => {
    table.bigIncrements('id')
    table.integer('attemptNumber')
      .notNullable()
      .index()
      .unsigned()
    table.string('notes', 1250)
    table.boolean('completed')
    table.bigInteger('userId')
      .notNullable()
      .index()
      .unsigned()
      .references('users.id')
    table.bigInteger('climbId')
      .notNullable()
      .index()
      .unsigned()
      .references('climbs.id')
    table.timestamp("createdAt")
      .notNullable()
      .defaultTo(knex.fn.now())
    table.timestamp("updatedAt")
      .notNullable()
      .defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists('attempts')
}
