const transactionsModel = require('../models/transactions');

const createTransaction = async (pk_transaction, fk_user, description, amount) => {
  return transactionsModel.createTransaction(pk_transaction, fk_user, description, amount);
};

const getTransaction = async (pk_transaction) => {
  return transactionsModel.getTransaction(pk_transaction);
};

module.exports = {
  createTransaction,
  getTransaction
};
