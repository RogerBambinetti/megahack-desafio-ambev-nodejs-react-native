const Establishment = require('../models/Establishment');
const {getDistance} = require('geolib');

class NearEstablishmentController {
    async index(req, res) {
        const { latitude, longitude } = req.body;

        const establishments = await Establishment.findAll();

        const nearEstablishmentsVerification = establishments.map(establishment => {
            const distance = getDistance(
                { latidude: establishment.dataValues.latitude, longitude: establishment.dataValues.longitude },
                {latitude,longitude}
            );

            if(distance <= 500) {
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