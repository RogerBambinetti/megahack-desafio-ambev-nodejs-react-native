const { Sequelize, Model } = require('sequelize');

class Brand extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
        }, {
            sequelize
        });
        return this;
    }

}

module.exports = Brand;