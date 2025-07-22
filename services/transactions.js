const transactionsModel = require('../models/transactions');

const createTransaction = async (pk_transaction, fk_user, description, amount) => {
  return transactionsModel.createTransaction(pk_transaction, fk_user, description, amount);
};

const getTransaction = async (pk_transaction) => {
  return transactionsModel.getTransaction(pk_transaction);
};

const updateTransaction = async (pk_transaction, fk_user, description, amount) => {
  return transactionsModel.updateTransaction(pk_transaction, fk_user, description, amount);
};

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction
};
