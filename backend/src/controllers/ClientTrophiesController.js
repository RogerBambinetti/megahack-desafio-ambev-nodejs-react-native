const ClientTrophies = require('../models/ClientTrophies');
const Trophy = require('../models/Trophy');

class ClientTrophiesController{
    async index(req,res){
        const {client_id} = req.params;
        
        const clientTrophies = await ClientTrophies.findAll({
            where:{
                client_id,
            },
            include: [
                {
                    model: Trophy,
                    as: 'trophies',
                }
            ],
        });

        return res.json(clientTrophies);
    }
}

module.exports = new ClientTrophiesController();