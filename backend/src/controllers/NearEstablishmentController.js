const Establishment = require('../models/Establishment');
const { getDistance } = require('geolib');

class NearEstablishmentController {
    async index(req, res) {
        const { latidude, longitude } = req.body;

        const establishments = await Establishment.findAll();

        const nearEstablishmentsVerification = establishments.map(establishment => {
            const distance = getDistance(
                { latidude: establishment.latidude, longitude: establishment.longitude },
                { latidude, longitude }
            );
            if (distance <= 500) {
                return establishment;
            }

            return null;
        });

        const nearEstablishments = nearEstablishmentsVerification.filter(establishment => {
            return establishment !== null;
        })

        return res.json(nearEstablishments);
    }
}

module.exports = new NearEstablishmentController();