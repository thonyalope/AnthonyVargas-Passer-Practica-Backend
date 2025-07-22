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

  CREATE TABLE transactions (
    pk_transaction INTEGER PRIMARY KEY,
    fk_user INTEGER,
    description TEXT,
    amount FLOAT
  );

  INSERT INTO transactions (pk_transaction, fk_user, description, amount) 
  VALUES 
    (1, 123, 'Compra en línea', 150.75),
    (2, 123, 'Suscripción mensual', 19.99),
    (3, 456, 'Pago de servicio', 85.50);
`);

module.exports = {
  postgresql
};
