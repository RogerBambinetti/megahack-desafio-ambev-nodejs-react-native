const Score = require('../models/Score');

class ScoreController {
    async show(req, res) {
        const {establishment_id, client_id} = req.params;

        const score = await Score.findOne({
            where: { 
                establishment_id,
                client_id  
            }
        });

        return res.json(score);
    }
}

module.exports = new ScoreController();