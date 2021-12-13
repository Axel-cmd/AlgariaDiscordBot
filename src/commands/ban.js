const Command = require('../structures/command.js');

module.exports = new Command({
    name: "ban",
    description:  "Command to kick someone",
    permission: "BAN_MEMBERS",
    async run(message, args, client){
        //récupérer le premier utilisateur mentionner dans le message 
        const member = message.mentions.users.first();

        if(!member) return message.reply(`La personne ne fais pas partis du serveur!`);

        const memberToBan = message.guild.members.cache.get(member.id);
        
        if(!memberToBan.bannable) return message.channel.send('Tu ne peux pas ban cette personne');

        memberToBan.ban();
        await message.channel.send(`L'utilisateur a été banni !`);
    }
})