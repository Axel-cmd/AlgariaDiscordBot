//importer des fonctions du package discord.js
const { Client, Intents } = require('discord.js');
//récupérer la configuration qui contient les variables d'environnement
require('dotenv').config({ path: "./config/config.env"});
//récupérer le tokken dans les variables d'environement 
const TOKKEN = process.env.TOKKEN;

//créer une nouvelle instance du client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

//quand le client est pret on effectue le code (se lance une seul fois)
client.once('ready', ()=>{
    console.log('Bot is ready !');
})

//se connecter à discord avec le tokken
client.login(TOKKEN);