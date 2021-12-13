const Command =require('../structures/command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: "help",
    description: "Display all command",
    permission: "SEND_MESSAGES",
    async run(message, args, client){

        const embed = new Discord.MessageEmbed();
        
        
    }
})