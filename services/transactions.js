const transactionsModel = require('../models/transactions');

const createTransaction = async (pk_transaction, fk_user, description, amount) => {
  return transactionsModel.createTransaction(pk_transaction, fk_user, description, amount);
};

module.exports = {
  createTransaction
};
