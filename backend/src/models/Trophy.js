const  {Sequelize, Model } = require('sequelize');

class Trophy extends Model {
    static init(sequelize) {
        super.init({
            description: Sequelize.STRING,
            name: Sequelize.STRING,
        }, {
            sequelize
        });
        return this;
    }
    static associate(models) {
        this.belongsToMany(models.Client, { foreignKey: 'trophy_id', through: 'client_trophies', as: 'trophies' });
    }
}

module.exports = Trophy;