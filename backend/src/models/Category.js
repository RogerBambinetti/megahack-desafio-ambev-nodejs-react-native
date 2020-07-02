const Sequelize, { Model } = require('sequelize');

class Category extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
        }, {
            sequelize
        });
        return this;
    }

}

module.exports = Category;