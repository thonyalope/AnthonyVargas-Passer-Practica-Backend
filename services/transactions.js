const transactionsModel = require('../models/transactions');
const { get } = require('../routes');

const createTransaction = async (pk_transaction, fk_user, description, amount) => {
  return transactionsModel.createTransaction(pk_transaction, fk_user, description, amount);
};

const getTransaction = async (pk_transaction) => {
  return transactionsModel.getTransaction(pk_transaction);
};

const updateTransaction = async (pk_transaction, fk_user, description, amount) => {
  return transactionsModel.updateTransaction(pk_transaction, fk_user, description, amount);
};

const getTransactions = async (fk_user) => {
  return transactionsModel.getTransactions(fk_user);
};

const getPaginatedTransactions = async (page) => {
  return await transactionsModel.getPaginatedTransactions(page);
};

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction,
  getTransactions,
  getPaginatedTransactions
};
