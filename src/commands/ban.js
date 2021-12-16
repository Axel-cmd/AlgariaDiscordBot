const Command = require('../structures/command.js');

// TODO gerer le ban de plusieurs personne ping 

module.exports = new Command({
    name: "ban",
    description: "Command to kick someone",
    permission: "BAN_MEMBERS",
    async run(message, args, client) {
        //récupérer le premier utilisateur mentionner dans le message 
        const firstPingMember = message.mentions.users.first();

        if (!firstPingMember) return message.reply(`La personne ne fais pas partis du serveur!`);

        const memberToBan = message.guild.members.cache.get(firstPingMember.id);

        if (!memberToBan.bannable) return message.channel.send('Tu ne peux pas ban cette personne');

        memberToBan.ban();
        await message.channel.send(`L'utilisateur a été banni !`);
    }
})