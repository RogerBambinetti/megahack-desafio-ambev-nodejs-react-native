const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const ClientController = require('./controllers/ClientController');
const EstablishmentController = require('./controllers/EstablishmentController');
const NearEstablishmentController = require('./controllers/NearEstablishmentController');
const SessionController = require('./controllers/SessionController');
const ClientTrophiesController = require('./controllers/ClientTrophiesController');
const ScanController = require('./controllers/ScanController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/upload', upload.single('thumbnail'),(req,res)=>{res.json({message:"ok"})});


routes.post('/session', SessionController.create);

routes.post('/scans/:client_id', ScanController.create);

routes.post('/establishments', EstablishmentController.create);
routes.get('/establishments', EstablishmentController.index);

routes.get('/nearestablishments', NearEstablishmentController.index);

routes.post('/clients', ClientController.create);
routes.get('/clients/:client_id', ClientController.show);
routes.get('/trophies/:client_id', ClientTrophiesController.index);


module.exports = routes;