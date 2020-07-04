const Establishment = require('../models/Establishment');

class EstablishmentController{
    async index(req,res){
        const establishments = await Establishment.findAll();

        return res.json(establishments);
    }

    async create(req,res){
        const {name,cnpj,latitude,longitude,phone} = req.body;
        const establishments = await Establishment.create({
            name,cnpj,latitude,longitude,phone
        });

        return res.json(establishments);
    }
}

module.exports = new EstablishmentController();