const Command = require('../structures/command.js');
 
module.exports = new Command({
    name: "kick",
    description:  "Command to kick someone",
    permission: "KICK_MEMBERS",
    async run(message, args, client){
        //récupérer le premier utilisateur mentionner dans le message 
        const firstPingMember = message.mentions.users.first();

        if(!firstPingMember) return message.reply(`La personne ne fais pas partis du serveur!`);

        const memberToKick = message.guild.members.cache.get(firstPingMember.id);
        
        if(!memberToKick.kickable) return message.channel.send('Tu ne peux pas kick cette personne');
        memberToKick.kick();

        await message.channel.send(`L'utilisateur a été kicker !`);
    }
})