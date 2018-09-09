exports.seed = function(knex, Promise) {
  return knex('plants').del()
    .then(function () {
      return knex('plants').insert([
        {name: 'Sunflower', growingSeason: 'Spring'},
        {name: 'Tomato', growingSeason: 'Summer'}
      ]);
    });
};
