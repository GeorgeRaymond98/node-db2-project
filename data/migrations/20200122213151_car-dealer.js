
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();

      tbl.string('plate', 255).unique().index().notNullable();

      tbl.string('model', 255).notNullable();

      tbl.string('make', 100).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
