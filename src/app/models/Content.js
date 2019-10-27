import Sequelize, { Model } from 'sequelize';

class Content extends Model {
  static init(sequelize) {
    super.init(
      {
        topic_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        text: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Topic, { foreignKey: 'topic_id' });
  }
}

export default Content;
