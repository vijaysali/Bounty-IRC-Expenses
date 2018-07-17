'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    amount: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    all: DataTypes.BOOLEAN,
    transactionDate: DataTypes.DATE
  }, {});
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.User, {
      foriegnKey: {
	allowNull: false
      }
    });
    // associations can be defined here
  };
  return Transaction;
};
