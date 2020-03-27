const knex = require('knex');
const configuration = require('../../knexfile');

const selected_config =
  process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(selected_config);

module.exports = connection;
