const { MessageEmbed } = require('discord.js')


module.exports = {
	name: 'guildMemberRemove',
	execute(member) {
        // console.log(`Bot is ready ! ${client.user.tag}`);
        // const welcomeEmbed = new 
        const channel = member.guild.channels.cache.find(c => c.name == "welcome-and-goodbye");

        if(!channel) return;

        const embed = new MessageEmbed()
            .setTitle("L'utilisateur nous a quitté !")
            .setColor("RED")
            .setAuthor(member.user.tag)
            .setThumbnail(member.user.avatarURL({dynamic: true}))
            .setFields({
                name: "User Join",
                value: member.joinedAt.toUTCString(),
                inline: true
            })
            .setTimestamp();
        
        channel.send({embeds : [embed]})
        
	},
};