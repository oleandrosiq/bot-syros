const { Client, Intents, MessageEmbed } = require('discord.js');

const { token, prefix } = require('../config.json');

const { getEmbedLog } = require('./utils/getEmbedLog');
const { getEmbedInvite } = require('./utils/getEmbedInvite');

const { commands, allCommands } = require('./commands');
const { messageCreate } = require('./observers/messageCreate');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const messages = ['claim', 'free', 'nitro'];

client.once('ready', () => {
  console.log('Bot is Started!');
});

client.on('guildMemberRemove', member => {
	console.log(`${member.user.tag} Saiu do servidor!`);
});

client.on('messageDelete', async (message) => {
	message.guild.channels.cache.forEach(async (channel) => {
		if (channel.name === 'log-syros') {
			channel.send(`**Mensagem deletada!**\n Mensagem: ${message.content}\n Autor: ${message.author.tag}\n Canal: ${message.channel} \n apagada por: ${message.author}`);
		}
	});
});

client.on('messageCreate', async (message) => {
	await messageCreate(message, client);

	messages.forEach(msg => {
		if (message.content.toLocaleLowerCase().includes(msg.toLocaleLowerCase())) {
			const hasProtocolHttp = message.content.includes('http') || message.content.includes('https');
			if (hasProtocolHttp) {
				message.guild.channels.cache.forEach(async (channel) => {
					if (channel.name === 'log-syros') {
						const embedLog = await getEmbedLog({ description: `${message.author} Enviou um link no canal ${message.channel}!`, message });
						channel.send(embedLog);
					}
				});
			}
		}
	});

	if (message.content.startsWith(prefix)) {
		const command = message.content.slice(prefix.length).split(/ +/)[0];

		if (allCommands.includes(command)) {
			const cmd = await commands(command, message);
			cmd.action(message);
			
			message.guild.channels.cache.forEach(async (channel) => {
				if (channel.name === 'log-syros') {
					const embedLog = await getEmbedLog({ description: `${message.author} executou o comando - (${command}) no canal ${message.channel}`, message });
					channel.send(embedLog);
				}
			});
		} else {
			message.delete();
			message.channel.send({ 
				content: `<@${message.author.id}> **Comando não encontrado!**`,
				allowedMentions: { users: [message.author.id] }
			});
		}
	}
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

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