/** You only need to run node deploy-commands.js once. You should only run it again if you add or edit existing commands. */
const fs = require('fs');
require('dotenv').config({ path: "./config/config.env"});
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


const clientId = process.env.CLIENTID; //clientId du bot récupérable sur l'interface développeur dans 0Auth2/general
const guildId = process.env.GUILDID;//l'id du serveur discord
const token = process.env.TOKEN;
//définir les commandes sur le serveur 
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);