const Client = require('../models/Client');

class SessionController {
    async create(req, res) {
        const { email, password } = req.body;
        const client = await Client.findOne({
            where: {
                email,
                password
            }
        });


        if (!client) {
            return res.status(400).json({ error: 'Dados inválidos' });
        }

        return res.json(client.id);

    }
}

module.exports = new SessionController();