import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        text: Sequelize.STRING,
        link: Sequelize.STRING,
        content_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Content, { foreignKey: 'content_id' });
  }
}

export default File;
