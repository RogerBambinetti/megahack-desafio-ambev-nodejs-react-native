const  { Sequelize,Model } = require('sequelize');

class ClientTrophies extends Model {
    static init(sequelize) {
        super.init({
            achievement: Sequelize.BOOLEAN,
        }, {
            sequelize
        });
        return this;
    }

}

module.exports = ClientTrophies;