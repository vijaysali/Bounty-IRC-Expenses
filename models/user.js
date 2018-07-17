'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {type: DataTypes.STRING,
	       unique: true},
    src: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    models.User.hasMany(models.Transaction);
  };
  return User;
};
