const Client = require('../models/Client');

class ClientController {
    async create(req, res) {
        const { name, email, password, birthday } = req.body;
        const checkEmail = await Client.findOne({
            where: {
                email,
            }
        });

        if(checkEmail){
            return res.status(400).json({ error: 'Email já utilizado'});
        }

        const client = await Client.create({
            name,
            email,
            password,
            birthday
        });

        return res.json(client);
    }

    async show(req,res){
        const {client_id} = req.params;
        
        const client = await Client.findOne({
            where: {
                id: client_id,
            }
        });

        if(!client){
            return res.status(401).json({error: 'Cliente não encontrado'});
        }

        return res.json(client);
    }
}

module.exports = new ClientController();