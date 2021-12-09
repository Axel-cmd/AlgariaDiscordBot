const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Info sur le serveur'),
	async execute(interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name}\n\nTotal members: ${interaction.guild.memberCount}\n\nServer Creation: ${interaction.guild.createdAt}\n\nServer verification level: ${interaction.guild.verificationLevel}`);
	},
};