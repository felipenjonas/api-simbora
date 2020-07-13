
exports.up = function(knex) {
  return knex.schema.createTable('attractions', function (table) {
      table.increments();
      table.string('category').notNullable();
      table.string('attraction_name').notNullable();
      table.string('link_attraction').notNullable();
      table.integer('total_assessment').notNullable();
      table.integer('excellent_score').notNullable();
      table.integer('great_score').notNullable();
      table.integer('fair_score').notNullable();
      table.integer('bad_score').notNullable();
      table.integer('horrible_score').notNullable();
      table.string('address').notNullable();
      table.string('web_site_external').notNullable();
      table.string('phone').notNullable();
      table.string('source_url').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('attractions')
};
