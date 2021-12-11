/** @format */
console.clear(); // pour nettoyer la console 
const Client = require('./structures/client.js');
//récupérer la configuration qui contient les variables globales 
const configuration = require('./data/configuration.json');
//créer une nouvelle instance du client
const client = new Client();
client.start(configuration.token);

