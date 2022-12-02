const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Board',
      tableName: 'boards',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Board.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' });
  }
};