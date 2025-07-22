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

const updateTransaction = (pk_transaction, fk_user, description, amount) => {
  return postgresql.public.one(`
    UPDATE transactions 
    SET fk_user = ${fk_user}, description = '${description}', amount = ${amount}
    WHERE pk_transaction = ${pk_transaction}
    RETURNING *;
  `);
};

const getTransactions = async (fk_user) => {
  return await postgresql.public.query(
    `SELECT * FROM transactions WHERE fk_user = ${fk_user}`
  );
};

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction,
  getTransactions
};
