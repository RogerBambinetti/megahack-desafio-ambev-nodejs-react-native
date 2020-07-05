const Scan = require('../models/Scan');
const {getDistance} = require('geolib');

class ScanController {
    async create(req, res) {
        const { scanCode, latitude, longitude } = req.body;
        const {client_id} = req.params;

        const codeArray = scanCode.split(':');

        const product_id = codeArray(0);
        const code = codeArray(1);
        

        const nearEstablishmentsVerification = establishments.map(establishment => {
            const distance = getDistance(
                { latidude: establishment.latidude, longitude: establishment.longitude },
                {latidude,longitude}
            );
            if(distance <= 500) {
                return establishment;
            }
            
            return null;
        });
    }
}

module.exports = new ScanController();