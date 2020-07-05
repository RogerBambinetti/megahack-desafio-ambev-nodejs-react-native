const  { Sequelize,Model } = require('sequelize');

class Discount extends Model {
    static init(sequelize) {
        super.init({
            description: Sequelize.STRING,
            price: Sequelize.DOUBLE,
        }, {
            sequelize
        });
        return this;
    }

}

module.exports = Discount;