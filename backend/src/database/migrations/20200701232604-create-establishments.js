'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('establishments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      latitude:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      longitude:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      phone:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }

    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('establishments');
  }
};
