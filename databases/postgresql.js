const { newDb } = require('pg-mem');

const postgresql = newDb();

postgresql.public.none(`
  CREATE TABLE users (
    pk_user INTEGER PRIMARY KEY,
    name TEXT,
    status BOOLEAN
  );

  INSERT INTO users (pk_user, name, status) 
  VALUES 
    (123, 'Juan', true),
    (456, 'Maria', true);
`);

module.exports = {
  postgresql
};
