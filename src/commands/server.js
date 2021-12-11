const Command = require('../structures/command.js');

module.exports = new Command({
    name: "server",
    description: "Info sur le server",
    async run(message, args, client){
        
        await message.reply(`ping: ${client.ws.ping} ms.`);

    }   
})