const Sequelize = require ('sequelize');
const dbconfig = require('../config/database');
const Client = require('../models/Client');
const Trophy = require('../models/Trophy');
const ClientTrophies = require('../models/ClientTrophies');
const Differential = require('../models/Differential');
const Establishment = require('../models/Establishment');
const Employee = require('../models/Employee');
const Challenge = require('../models/Challenge');
const Scan = require('../models/Scan');
const Score = require('../models/Score');
const Product = require('../models/Product');
const Brand = require('../models/Brand');
const Category = require('../models/Category');

const models = [Client,Trophy,Establishment,Differential,Employee,Challenge,Scan,Score,Product,ClientTrophies,Brand,Category];


class Database{
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(dbconfig);
        models.map(model=> model.init(this.connection))
        .map((model) => model.associate && model.associate(this.connection.models));
    }


}

module.exports = new Database();