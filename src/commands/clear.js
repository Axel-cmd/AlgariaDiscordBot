const Command = require('../structures/command.js');

const maxAmount = 100;

module.exports = new Command({
    name: "clear",
    description: 'Supprimer un certain de nombre de message',
    permission: "MANAGE_MESSAGES",
    async run(message, args, client) {

        const enteredAmount = args[1];
        if (!enteredAmount || isNaN(enteredAmount)) return message.reply(`${enteredAmount === undefined? 'rien' : enteredAmount} n'est pas un nombre !`);

        const amountParsed = parseInt(enteredAmount);

        if (amountParsed > maxAmount) return message.reply(`Vous ne pouvez pas supprimer plus de ${maxAmount} message à la fois !`);

        message.channel.bulkDelete(amountParsed);

        const msg = await message.channel.send(`${amountParsed} messages supprimés !`);

        setTimeout(() => msg.delete(), 5000);
    }
})