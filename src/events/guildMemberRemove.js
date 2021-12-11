const Event = require('../structures/event.js');
const Discord = require("discord.js");
const configuration = require('../data/configuration.json');

module.exports = new Event("guildMemberRemove",  member => {
    //récupérer le channel à l'aide du nom 
    console.log(member.guild)
    const channel = member.guild.channels.cache.find(c=> c.name == configuration.welcomQuitChannel);

    if(!channel) return;

    const embed = new Discord.MessageEmbed()
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

    channel.send({embeds: [embed]});

})