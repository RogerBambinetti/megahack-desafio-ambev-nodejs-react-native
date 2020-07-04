const Sequelize, { Model } = require('sequelize');

class Client extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            picture: Sequelize.STRING,
            birthday: Sequelize.DATE,
        }, {
            sequelize
        });
        return this;
    }

    static associate(models) {
        this.belongsToMany(models.Trophy, { foreignKey: 'client_id', through: 'client_trophies', as: 'clients' });
    }
}

module.exports = Client;