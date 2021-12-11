const { MessageEmbed } = require('discord.js')

// const channelId = "918619745203408916";

module.exports = {
	name: 'guildMemberAdd',
	execute(member) {
        //récupérer le channel dans lequel le message sera envoyé 
        const channel = member.guild.channels.cache.find(c => c.name == "welcome-and-goodbye");

        if(!channel) return;
        
        const embed = new MessageEmbed()
            .setTitle("Bienvenu sur Algaria !")
            .setColor("GREEN")
            .setAuthor(member.user.tag)
            .setThumbnail(member.user.avatarURL({dynamic: true}))
            .setFields({
                name: "User Join",
                value: member.joinedAt.toUTCString(),
                inline: true
            })
            .setTimestamp(member.joinedTimestamp);
        
        channel.send({embeds : [embed]})
        
	},
};