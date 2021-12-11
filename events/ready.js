//fichier event ready lorsque le bot est prêt
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Bot is ready ! ${client.user.tag}`);
	},
};