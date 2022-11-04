const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card, Result }) {
      this.hasMany(Card, { foreignKey: 'topicId' });
      this.hasMany(Result, { foreignKey: 'topicId' });
    }
  }
  Topic.init({
    name: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
