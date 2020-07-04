const Challenge = require('../models/Challenge');

class ChallengeController{
    async create(req,res){
        const {description, points, establishment_id, client_id} = req.body;

        const challenge = await Challenge.create({
            description,
            points,
            establishment_id,
            client_id
        })

        return res.json(challenge);
    }
}

module.exports = new ChallengeController();