const { postgresql } = require('../databases/postgresql');

const createTransaction = (pk_transaction, fk_user, description, amount) => {
  try {
    const result = postgresql.public.one(`
      INSERT INTO transactions (pk_transaction, fk_user, description, amount)
      VALUES (${pk_transaction}, ${fk_user}, '${description}', ${amount})
      RETURNING *;
    `);
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getTransaction = (pk_transaction) => {
  return postgresql.public.one(`
    SELECT * FROM transactions WHERE pk_transaction = ${pk_transaction};
  `);
};

module.exports = {
  createTransaction,
  getTransaction
};
