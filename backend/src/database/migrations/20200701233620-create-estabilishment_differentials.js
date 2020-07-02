'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('establishment_differentials', {
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
      differential_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'differentials',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    return queryInterface.dropTable('establishment_differentials');
  }
};
