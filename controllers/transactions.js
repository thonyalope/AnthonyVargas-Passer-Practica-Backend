const transactionsService = require('../services/transactions');

const createTransaction = async (req, res, next) => {
  const { pk_transaction, fk_user, description, amount } = req.body;

  try {
    const tx = await transactionsService.createTransaction(pk_transaction, fk_user, description, amount);
    res.status(201).send(tx);
    next();
  } catch (e) {
    console.error(e.message);
    res.sendStatus(500) && next(e);
  }
};

const getTransaction = async (req, res, next) => {
  const { pk_transaction } = req.params;

  try {
    const tx = await transactionsService.getTransaction(pk_transaction);
    res.status(200).send(tx);
    next();
  } catch (e) {
    console.error(e.message);
    res.sendStatus(500) && next(e);
  }
};

const updateTransaction = async (req, res, next) => {
  const { pk_transaction } = req.params;
  const { fk_user, description, amount } = req.body;

  try {
    const tx = await transactionsService.updateTransaction(
      pk_transaction,
      fk_user,
      description,
      amount
    );
    res.status(200).send(tx);
    next();
  } catch (e) {
    console.error(e.message);
    res.sendStatus(500) && next(e);
  }
};

const getTransactions = async (req, res, next) => {
  const { fk_user } = req.query;

  try {
    const transactions = await transactionsService.getTransactions(fk_user);
    res.status(200).send(transactions);
    next();
  } catch (e) {
    console.error(e.message);
    res.sendStatus(500) && next(e);
  }
};

const getPaginatedTransactions = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;

  try {
    const result = await transactionsService.getPaginatedTransactions(page);
    res.status(200).send(result);
    next();
  } catch (e) {
    console.error(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction,
  getTransactions,
  getPaginatedTransactions
};
