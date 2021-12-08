//importer des fonctions du package discord.js
const { Client, Intents } = require('discord.js');
//récupérer la configuration qui contient les variables d'environnement
require('dotenv').config({ path: "./config/config.env"});
//récupérer le tokken dans les variables d'environement 
const TOKEN = process.env.TOKEN;

//créer une nouvelle instance du client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

//quand le client est pret on effectue le code (se lance une seul fois)
client.once('ready', ()=>{
    console.log('Bot is ready !');
})


/*****Ajouter les commandes  *****/

client.on('interactionCreate', async interaction=>{
    //vérifier si l'interaction est bien une commande avec la fonction isCommand()
    if(!interaction.isCommand()) return;

    //récupérer le nom de l'interaction dans la variable
    const { commandName } = interaction;

    if(commandName ==='ping'){
        await interaction.reply('Pong!');
    }else if (commandName === 'server'){
        await interaction.reply('Server info.');
    }else if(commandName === 'user'){
        await interaction.reply('User info.')
    }
});


//se connecter à discord avec le tokken
client.login(TOKEN);