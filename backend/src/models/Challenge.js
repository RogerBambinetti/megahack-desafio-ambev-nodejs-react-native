const Sequelize, { Model } = require('sequelize');

class Challenge extends Model {
    static init(sequelize) {
        super.init({
            description: Sequelize.STRING,
            points: Sequelize.INTEGER,
        }, {
            sequelize
        });
        return this;
    }
    static associate(models){
        this.belongsTo(models.Client, {foreignKey: 'client_id', as: 'client'});
        this.belongsTo(models.Establishment, {foreignKey: 'establishment_id', as: 'establishment'});
    }
}

module.exports = Challenge;