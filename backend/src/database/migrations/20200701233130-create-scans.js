'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('scans', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      product_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
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
      code:{
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
    return queryInterface.dropTable('scans');
  }
};
