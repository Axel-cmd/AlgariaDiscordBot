const Command =require('../structures/command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: "help",
    description: "Display all command",
    permission: "SEND_MESSAGES",
    async run(message, args, client){

        // TODO qfficher toute les commandes ici 
        // ? peut etre appeler la collection la parcourir et recuperer tout les noms plus descriptions 

        const embed = new Discord.MessageEmbed();
        
    }
})