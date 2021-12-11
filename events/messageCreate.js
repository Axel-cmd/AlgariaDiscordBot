const { MessageEmbed } = require('discord.js');
require('dotenv').config({ path: "./data/config.env"});



module.exports = {
	name: 'messageCreate',
	execute(message) {
        //vérifié que le message ne provienne pas d'un bot
        if(message.author.bot) return;
        if(!message.content.startsWith(process.env.PREFIX)) return;

        const args = message.content.substring(process.env.PREFIX.length).split(/ +/);


        switch (args[0]) {
            case "welcome":
                    const embed =new MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('Bienvenue sur Algaria')
                        
                    message.channel.send({embeds : [embed]});
                break;
        
            default:
                break;
        }


        // if(args == `welcome`){
        //     const embed =new MessageEmbed()
        //         .setColor('#0099ff')
        //         .setTitle('Bienvenue sur Algaria')
            
        //     message.channel.send({embeds : [embed]});

        // }
	},
};