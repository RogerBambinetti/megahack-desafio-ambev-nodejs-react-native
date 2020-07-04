const  { Model,Sequelize } = require('sequelize');

class Establishment extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            cnpj: Sequelize.STRING,
            phone: Sequelize.STRING,
            latitude: Sequelize.DOUBLE,
            longitude: Sequelize.DOUBLE,
        }, {
            sequelize
        });
        return this;
    }
    static associate(models) {
        this.belongsToMany(models.Differential, { foreignKey: 'establishment_id', through: 'establishment_differentials', as: 'establishments' });
    }
}

module.exports = Establishment;