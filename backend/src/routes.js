const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const ClientController = require('./controllers/ClientController');
const EstablishmentController = require('./controllers/EstablishmentController');
const NearEstablishmentController = require('./controllers/NearEstablishmentController');
const SessionController = require('./controllers/SessionController');
const ClientTrophiesController = require('./controllers/ClientTrophiesController');
const ChallengeController = require('./controllers/ChallengeController');
const EmployeeController = require('./controllers/EmployeeController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/upload', upload.single('thumbnail'),(req,res)=>{res.json({message:"ok"})});


routes.post('/session', SessionController.create);

routes.post('/establishments', EstablishmentController.create);
routes.get('/establishments', EstablishmentController.index);

routes.get('/nearestablishments', NearEstablishmentController.index);

routes.post('/challenges', ChallengeController.create);

routes.post('/employees', EmployeeController.create);
routes.get('/employees', EmployeeController.index);

routes.post('/clients', ClientController.create);
routes.get('/clients/:client_id', ClientController.show);
routes.get('/trophies/:client_id', ClientTrophiesController.index);


module.exports = routes;