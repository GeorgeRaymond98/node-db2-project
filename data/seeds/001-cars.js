exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {plate: 'abc123', model: 'BMW', make: 'i8 model'},
        {plate: 'wer346', model: 'Audi', make:'A8'},
        {plate: 'mar224', model: 'Buick', make: 'Enclave'}
      ]);
    });
};
