'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.hasMany(models.ReviewImage, { foreignKey: 'reviewId' })
      Review.belongsTo(models.User, { foreignKey: 'userId' })
      Review.belongsTo(models.spotId, {
        foreignKey: 'spotId'
      })
    }
  }
  Review.init({
    review: {
      type: DataTypes.STRING

    },
    stars: {
      type: DataTypes.INTEGER
    },
    spotId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Spots'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};