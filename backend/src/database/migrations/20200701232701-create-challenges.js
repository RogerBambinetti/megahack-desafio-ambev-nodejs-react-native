'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('challenges', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      establishment_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'establishments',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      client_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
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
    }

    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('challenges');
  }
};
