const Command = require("../structures/command.js");
const Discord = require('discord.js');

module.exports = new Command({
    name: "embed",
    description: "embed show",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Embed de test")
            .setURL('https://www.google.com/')
            .setAuthor(
                message.author.username,
                message.author.avatarURL({
                    dynamic: true
                }),
                "https://www.google.com/"
            )
            .setDescription(
                "Ceci est un embed de test, \nLien de test: [lien de test](https://www.google.com/)"
            )
            .setColor("DARK_AQUA")
            .setThumbnail(message.author.avatarURL({
                dynamic: true
            }))
            .setTimestamp(message.createdTimestamp - 3600000) //enleve 1h
            .setImage("https://upload.wikimedia.org/wikipedia/fr/thumb/1/1a/Logo_One_piece.svg/1200px-Logo_One_piece.svg.png")
            .addFields({
                name: "One piece ep",
                value: "1003",
                inline: true
            }, {
                name: "Version du bot",
                value: "1.0.0",
                inline: true
            }, {
                name: "Bot name",
                value: client.user.username,
                inline: true
            })
        message.reply({
            embeds: [embed]
        });
    }
})