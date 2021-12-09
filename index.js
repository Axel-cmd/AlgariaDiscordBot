//un système de fichier natif
const fs = require('fs');
//importer des fonctions du package discord.js
const { Client, Intents, Collection } = require('discord.js');
//récupérer la configuration qui contient les variables d'environnement
require('dotenv').config({ path: "./config/config.env"});
//récupérer le tokken dans les variables d'environement 
const TOKEN = process.env.TOKEN;

//créer une nouvelle instance du client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

//attaché une propriété .commands à l'instance client pour qu'on puisse accéder au commandes des atre fichier
client.commands = new Collection();
//cette méthode permet de récupérer dans un tableau les noms de tout les fichier dans le dossier /commands en appliquant un filtre pour récupérer uniquement les fichiers finissant par .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    //importer un fichier
    const command = require(`./commands/${file}`);

    //rajouter un nouvelle item dans la collectin avec comme clé le nom et l'élément exporter en valeur 
    client.commands.set(command.data.name, command);
}

//quand le client est pret on effectue le code (se lance une seul fois)
client.once('ready', ()=>{
    console.log('Bot is ready !');
})


/*****Ajouter les commandes  *****/

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