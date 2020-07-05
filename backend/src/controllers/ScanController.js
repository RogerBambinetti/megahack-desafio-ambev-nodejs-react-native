const Establishment = require('../models/Establishment');
const Product = require('../models/Product');
const Scan = require('../models/Scan');
const Score = require('../models/Score');
const Distance = require('geo-distance');

class ScanController {
    async create(req, res) {
        const { scanCode, latitude, longitude } = req.body;
        const { client_id } = req.params;

        const clientLocation = {
            lat: latitude,
            lon: longitude,
        }

        const codeArray = scanCode.split(':');

        const product_id = codeArray(0);
        const code = codeArray(1);

        const establishments = await Establishment.findAll();

        let nearEstablishmentDistance = 99999999;
        let nearEstablishment = null;
        establishments.forEach(establishment => {
            const establishmentLocation = {
                lat: establishment.dataValues.latitude,
                lon: establishment.dataValues.longitude
            }

            let distanceCount = Distance.between(clientLocation, establishmentLocation);
            let distance = distanceCount.human_readable().distance;
            if (distanceCount.human_readable().unit === 'km') {
                distance *= 1000;
                if (distance <= nearEstablishmentDistance) {
                    nearEstablishmentDistance = distance;
                    nearEstablishment = establishment;
                }
            }

            if (distance <= nearEstablishmentDistance) {
                nearEstablishmentDistance = distance;
                nearEstablishment = establishment;
            }
        });

        if (nearEstablishmentDistance > 100) {
            return res.json({ error: 'Você não está próximo de nenhum estabelecimento cadastrado' });
        }

        const checkCode = await Scan.findOne({
            where: {
                code,
            }
        });

        if (checkCode) {
            return res.json({ error: 'Código já utilizado.' });
        }

        const scan = await Scan.create({
            product_id,
            client_id,
            code
        });

        const [score, created] = await Score.findOrCreate({
            where: client_id,
            establishment_id: nearEstablishment.establishment_id,
            default: {
                score: 0,
                client_id,
                establishment_id: nearEstablishment.establishment_id,
            }
        });

        const product = await Product.findOne({
            where: {
                id: product_id
            }
        })

        await score.update({
            score: score + product.points,
        });

        return res.json({ message: `Você ganhou ${product.points} pontos` });


    }
}

module.exports = new ScanController();