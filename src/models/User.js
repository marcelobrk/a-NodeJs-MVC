const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      password: DataTypes.STRING,
      sex: DataTypes.STRING,
      city: DataTypes.STRING,
      uf: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = User;