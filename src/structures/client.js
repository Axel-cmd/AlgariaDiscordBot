//attaché une propriété .commands à l'instance client pour qu'on puisse accéder au commandes des autres fichiers
// client.commands = new Discord.Collection();
const Discord = require('discord.js');
const Command = require('./command.js');
//permet de s'abonner à des groupes d'évenement sur la websocket 
const intents = new Discord.Intents(32767);

//classe client qui override la classe de base 
class Client extends Discord.Client{
    constructor(options){
        super({ intents });

        /**
         * 
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();
    }
}

module.exports = Client;