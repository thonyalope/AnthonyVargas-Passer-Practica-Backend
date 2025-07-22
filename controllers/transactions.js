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

module.exports = {
  createTransaction
};
