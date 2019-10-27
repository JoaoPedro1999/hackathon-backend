import Sequelize, { Model } from 'sequelize';

class Topic extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        classification: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Topic;
