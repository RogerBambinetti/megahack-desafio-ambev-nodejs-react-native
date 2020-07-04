const Establishment = require('../models/Establishment');
const Employee = require('../models/Employee');

class EmployeeController {
    async create(req, res) {
        const { name, cpf, email, password, establishment_id } = req.body;
        /* const checkEstablishment = await Establishment.findOne({
            where: {
                id: establishment_id,
            }
        }); */
        const employee = await Employee.create({
            name,
            cpf,
            email,
            password,
            establishment_id
        });
        return res.json(employee);
    }
    async index(req, res) {
        const employees = await Employee.findAll();

        return res.json(employees);
    }

}

module.exports = new EmployeeController();