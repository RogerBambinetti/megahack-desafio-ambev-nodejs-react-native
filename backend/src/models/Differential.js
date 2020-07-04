const  { Sequelize,Model } = require('sequelize');

class Differential extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
        }, {
            sequelize
        });
        return this;
    }
    static associate(models) {
        this.belongsToMany(models.Establishment, { foreignKey: 'establishment_id', through: 'establishment_differentials', as: 'differentials' });
    }
}

module.exports = Differential;