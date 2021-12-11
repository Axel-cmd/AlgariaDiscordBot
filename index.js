//un système de fichier natif
const fs = require('fs');
//importer des fonctions du package discord.js
const { Client, Intents, Collection } = require('discord.js');
// const msgCommand = require('./data/messageCommand.js');
//récupérer la configuration qui contient les variables d'environnement
require('dotenv').config({ path: "./data/config.env"});
//récupérer le tokken dans les variables d'environement 
const TOKEN = process.env.TOKEN;

//créer une nouvelle instance du client
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS//important pour détecter l'arrivé de nouveaux membres
] })

//attaché une propriété .commands à l'instance client pour qu'on puisse accéder au commandes des autres fichiers
client.commands = new Collection();
client.messageCommands = new Collection();

//cette méthode permet de récupérer dans un tableau les noms de tout les fichier dans le dossier /commands en appliquant un filtre pour récupérer uniquement les fichiers finissant par .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync(`./events`).filter(file => file.endsWith('.js'));
// const messageCommandFiles = fs.readdirSync('./messageCommands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    //importer un fichier
    const command = require(`./commands/${file}`);

    //rajouter un nouvelle item dans la collectin avec comme clé le nom et l'élément exporter en valeur 
    client.commands.set(command.data.name, command);
}

for(const file of eventFiles){
    const event = require(`./events/${file}`);
    if(event.once){
        client.once(event.name, (...args) => event.execute(...args));
    }else{
        client.on(event.name, (...args) => event.execute(...args));
    }
}



client.on('interactionCreate', async interaction=>{
    //vérifier si l'interaction est bien une commande avec la fonction isCommand()
    if(!interaction.isCommand()) return;

    //on cherche la commande demandé dans la collection
    const command = client.commands.get(interaction.commandName);

    //si elle n'existe pas on sort
    if(!command) return;

    //si elle existe on lance execute en passant la variable interaction
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({content: "Il y a une erreur lors de l'execution de cette commande!", ephemeral: true});
    }
});


//se connecter à discord avec le tokken
client.login(TOKEN);