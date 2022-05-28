const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

class Review extends Sequelize.Model {
  static associate({Agent}) {
      // define association here
      this.belongsTo(Agent, {foreignKey: 'agentId', as: 'agent' })
    }
}

Review.init(
    {
    //attributes
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    review: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  },
  {
      // timestamps: false,
      modelName: "reviews",
      sequelize
  }
);

sequelize.sync();

module.exports = {
    sequelize,
    Review
  };