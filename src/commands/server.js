const Command = require('../structures/command.js');

module.exports = new Command({
    name: "server",
    description: "Info sur le server",
    async run(message, args, client){
        
        await message.reply(`Server name: ${message.guild.name}\n\nTotal members: ${message.guild.memberCount}\n\nServer Creation: ${message.guild.createdAt}\n\nServer verification level: ${message.guild.verificationLevel}.`);
    }   
})