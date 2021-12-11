/** @format */
console.clear(); // pour nettoyer la console 

//un système de fichier natif
const fs = require('fs');

const Client = require('./structures/client.js');
const Command = require('./structures/command.js')
//récupérer la configuration qui contient les variables globales 
const configuration = require('./data/configuration.json');

//créer une nouvelle instance du client
const client = new Client();


//utiliser fs pour récupérer un tableau des fichiers dans le fichier commands 
//en appliquant un filtre a la fin du nom de fichier 
//puis on les parcours pour effectuer des actions avec chaque fichier
fs.readdirSync('./src/commands')
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        /**
         * @type {Command}
         */
        const command = require(`./commands/${file}`);
        //ajouter l'élément dans la collection
        client.commands.set(command.name, command);
    })  


client.on("ready", ()=>console.log("Bot is online !"));

client.on("messageCreate", message=>{
    //vérifié que le message commence bien par le préfix sinon on fait rien
    if(!message.content.startsWith(configuration.prefix)) return;

    const args = message.content.substring(configuration.prefix.length).split(/ +/);
    //trouver dans la collection la commande qui correspond à celle demander 
    const command = client.commands.find(cmd => cmd.name == args[0])
    if(!command) return;//si la commande n'existe pas on sort
    //lancer la commande
    command.run(message, args, client);

})

//se connecter à discord avec le tokken
client.login(configuration.token);
