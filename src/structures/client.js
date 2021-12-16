const Discord = require('discord.js');
const Command = require('./command.js');
const Event = require('./event.js');

const configuration = require('../data/configuration.json');
//un système de fichier natif
const fs = require('fs');
//permet de s'abonner à des groupes d'évenement sur la websocket 
const intents = new Discord.Intents(32767);

//classe client qui override la classe de base 
class Client extends Discord.Client {
    constructor() {
        super({
            intents,
            allowedMentions: {
                repliedUser: false
            }
        }); //repliedUser permet d'activer ou désactiver le ping bot lors d'une commande 

        /**
         * attaché une propriété .commands à l'instance client pour qu'on puisse accéder au commandes des autres fichiers
         * @type {Discord.Collection<string, Command>}
         */
        this.commandsCollection = new Discord.Collection();

        //prefix récupérer dans la configuration 
        this.commandPrefix = configuration.prefix;
    }

    /**
     * @param {string} token 
     */
    start(token) {
        //utiliser fs pour récupérer un tableau des fichiers dans le fichier commands 
        //en appliquant un filtre a la fin du nom de fichier 
        fs.readdirSync('./src/commands')
            .filter(file => file.endsWith('.js'))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const command = require(`../commands/${file}`);
                // console.log(`La commande ${command.name} est bien chargé`);
                //ajouter l'élément dans la collection
                this.commandsCollection.set(command.name, command);
            });

        //récupérer tous les fichiers evenements dans le dossier events 
        fs.readdirSync('./src/events')
            .filter(file => file.endsWith('.js'))
            .forEach(file => {
                /**
                 * @type {Event}
                 */
                const event = require(`../events/${file}`);
                // console.log(`L'event ${event.event} est bien chargé`)
                //créer l'évenement avec le nom de l'évenement et sa fonction run à laquelle on passe this pour qu'elle puisse garder son contexte 
                this.on(event.event, event.run.bind(null, this));
            });

        //se connecter à discord avec le tokken
        this.login(token);
    }


}

module.exports = Client;