const { Sequelize, Model } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            points: Sequelize.INTEGER,
            price: Sequelize.DOUBLE,
            description: Sequelize.STRING,
        }, {
            sequelize
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
        this.belongsTo(models.Establishment, { foreignKey: 'establishment_id', as: 'establishment' });
        this.belongsTo(models.Brand, { foreignKey: 'brand_id', as: 'brand' });
    }

}

module.exports = Product;