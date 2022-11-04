const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Topic }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Topic, { foreignKey: 'topicId' });
    }
  }
  Result.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    topicId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Topics',
        key: 'id',
      },
    },
    points: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};
