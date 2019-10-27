module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('surveys', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
    return queryInterface.dropTable('surveys');
  },
};
