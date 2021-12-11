const Event = require('../structures/event');

module.exports = new Event("messageCreate", (client, message) => {
    if(message.author.bot) return;
    //vérifié que le message commence bien par le préfix sinon on fait rien
    if(!message.content.startsWith(client.prefix)) return;

    const args = message.content.substring(client.prefix.length).split(/ +/);
    //trouver dans la collection la commande qui correspond à celle demander 
    const command = client.commands.find(cmd => cmd.name == args[0])
    if(!command) return;//si la commande n'existe pas on sort
    //lancer la commande
    command.run(message, args, client);
});