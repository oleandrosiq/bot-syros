const { MessageEmbed } = require('discord.js');

function getEmbedLogSuspiciousWords(message) {
  const avatar = message.author.avatarURL();
	const content = message.content;
	const userId = message.author.id;
	const userTag = message.author.tag;

	const embed = new MessageEmbed()
	.setColor('#E70000')
	.setTitle('Mensagem suspeita.')
	.setAuthor({ name: userTag, iconURL: avatar, url: avatar })
	.setDescription(`${content}`)
	.setThumbnail(message.guild.iconURL())
	.addFields(
		{ name: 'Usuario', value: `<@${userId}>`, inline: true },
		{ name: 'Canal', value: `${message.channel}`, inline: true },
	)
	.addField('Tag', userTag, true)
	.setTimestamp()
	.setFooter({ text: `userId: ${userId}`, iconURL: avatar });

	return embed;
}

module.exports = { getEmbedLogSuspiciousWords };