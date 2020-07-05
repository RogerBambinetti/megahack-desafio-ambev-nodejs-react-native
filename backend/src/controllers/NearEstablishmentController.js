const Establishment = require('../models/Establishment');
const { Distance } = require('geo-distance');

class NearEstablishmentController {
    async index(req, res) {
        const { latitude, longitude } = req.body;
        const clientLocation = {
            lat: latitude,
            lon: longitude,
        }
        const establishments = await Establishment.findAll();

        const nearEstablishmentsVerification = establishments.map(establishment => {
            const establishmentLocation = {
                lat: establishment.dataValues.latitude,
                lon: establishment.dataValues.longitude
            }
            const distance = Distance.between(clientLocation,establishmentLocation);

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