const { Sequelize, Model } = require('sequelize');

class Scan extends Model {
    static init(sequelize) {
        super.init({
            code: Sequelize.STRING,
        }, {
            sequelize
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'clients' });
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'products' });
    }

}

module.exports = Scan;