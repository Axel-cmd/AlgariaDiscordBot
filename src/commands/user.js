const Command = require('../structures/command.js');

module.exports = new Command({
    name: "user",
    description: "Info sur l'utilisateur",
    async run(message, args, client){
        
        if(!message.author) return;

        await message.reply(`Ton tag: ${message.author.tag}\nTon id: ${message.author.id}.`);
        
    }
})