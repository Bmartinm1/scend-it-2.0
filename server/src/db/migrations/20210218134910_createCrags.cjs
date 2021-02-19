/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('crags', (table) => {
    table.bigIncrements('id')
    table.string('name')
      .notNullable()
    table.string('state')
      .notNullable()
    table.string('country')
    table.decimal('longitude')
      .notNullable()
    table.decimal('latitude')
      .notNullable()
    table.timestamp('createdAt')
      .notNullable()
      .defaultTo(knex.fn.now())
    table.timestamp('updatedAt')
      .notNullable()
      .defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('crags')
}
