/** @format */

const Command = require('../structures/command.js');

module.exports = new Command({
    name: "ping",
    description: "Montrer les ping du bot",
    async run(message, args, client){
        
        const msg = await message.reply(`ping: ${client.ws.ping} ms.`);
        msg.edit(`Ping: ${client.ws.ping} ms.\nMessage Ping: ${msg.createdTimestamp - message.createdTimestamp} ms.`);
    }   
})