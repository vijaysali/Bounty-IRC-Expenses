const pg = require('pg');

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'expense_tracker',
  password: 'pass1234',
  port: 5432,
})

client.connect();
const query = client.query(
  'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(250) UNIQUE NOT NULL, user_source VARCHAR(250));');

query.on('end', () => { client.end(); });
