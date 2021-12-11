const Event = require('../structures/event');
const Discord = require('discord.js');
const configuration = require('../data/configuration.json');

module.exports = new Event("guildMemberAdd", member =>{
    
    // console.log(member);
    const channel = member.guild.channels.cache.find(c=> c.name == configuration.welcomQuitChannel);

    if(!channel) return;
        
    const embed = new Discord.MessageEmbed()
        .setTitle("Ho ! Un nouveau membre !")
        .setColor("GREEN")
        .setDescription('test')
        .setAuthor(member.user.tag)
        .setThumbnail(member.user.avatarURL({dynamic: true}))
        .setFields({
            name: "User Join",
            value: member.joinedAt.toUTCString(),
            inline: true
        })
        .setTimestamp(member.joinedTimestamp);
        
    channel.send({embeds : [embed]})
})