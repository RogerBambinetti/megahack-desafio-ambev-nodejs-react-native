module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'volume', {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('products', 'volume');
  },
};
