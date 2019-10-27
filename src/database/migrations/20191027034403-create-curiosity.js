module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('curiosities', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content_id: {
        type: Sequelize.INTEGER,
        references: { model: 'contents', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('curiosities');
  },
};
