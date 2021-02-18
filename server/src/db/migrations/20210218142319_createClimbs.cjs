/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) =>
  knex.schema.createTable('climbs', (table) => {
    table.bigIncrements('id'),
    table.string('name')
      .notNullable()
      .unique(),
    table.string('grade')
      .notNullable(),
    table.string('gradeMod')
    table.string('dangerRating'),
    table.string('firstAscent'),
    table.text('beta'),
    table.text('notes'),
    table.text('safety')
    table.string('climbType')
      .notNullable(),
    table.bigInteger('cragId')
      .notNullable()
      .unsigned()
      .index()
      .references('crags.id')
    table.timestamp('createdAt')  
      .notNullable()
      .defaultTo(knex.fn.now()),
    table.timestamp('updatedAt')
      .notNullable()
      .defaultTo(knex.fn.now())
  });

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists('climbs')
};
