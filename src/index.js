const { Client, Intents } = require('discord.js');
const { token, prefix } = require('../config.json');
const { getEmbedInvite } = require('./utils/getEmbedInvite');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const messages = ['claim', 'free', 'nitro'];

client.once('ready', () => {
  console.log('Bot is Started!');
});

client.on('guildMemberRemove', member => {
	console.log(`${member.user.tag} Saiu do servidor!`);
});

client.on('messageCreate', async (message) => {
	messages.forEach(msg => {
		if (message.content.toLocaleLowerCase().includes(msg.toLocaleLowerCase())) {
			const hasProtocolHttp = message.content.includes('http') || message.content.includes('https');
			if (hasProtocolHttp) {
				message.delete();
				message.author.send('Você enviou um link duvidoso no chat.');
				console.log(`Message from ${message.author.username}: ${message.content}`);
			}
		}
	});

	if (message.content.startsWith(prefix)) {
		const command = message.content.slice(prefix.length).split(/ +/);
		const userMention = message.mentions.users.first();

		if (command[0] === 'kick') {
			if (message.member.permissions.has('KICK_MEMBERS')) {
				message.delete();
				message.guild.members.kick(userMention.id);
				message.channel.send(`${userMention.username} foi kickado do servidor!`);
			} else {
				message.delete();
				message.channel.send({ 
					content: `<@${message.author.id}> Você não tem permissão para executar esse comando!`,
					allowedMentions: { users: [message.author.id] }
				});
			}
		}

		if (command[0] === 'invite') {
			const embedInvite = await getEmbedInvite('message', message);
			message.channel.send(embedInvite);
		}

		if (message.content.toLocaleLowerCase().includes('leandro' || 'l e a n d r o' || 'lêandro')) {
			message.react('🔥');
			message.react('👀');
		}
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

	const { commandName} = interaction;

	if (commandName === 'invite') {
		const embedInvite = await getEmbedInvite('interaction', interaction);
		message.channel.send(embedInvite);
	} else if (commandName === 'server') {
    await interaction.reply(`${interaction.guild.ownerId}`);
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.login(token);