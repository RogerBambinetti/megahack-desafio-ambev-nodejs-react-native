const  {Sequelize, Model } = require('sequelize');

class Employee extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            cpf: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
        }, {
            sequelize,
            tableName: 'employees',
        });
        return this;
    }

    static associate(models){
        this.belongsTo(models.Establishment, {foreignKey: 'establishment_id', as: 'establishment'});
        
    }

}

module.exports = Employee;