module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('interests', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      survey_id: {
        type: Sequelize.INTEGER,
        references: { model: 'surveys', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      human: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      exacts: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      biological: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('interests');
  },
};
