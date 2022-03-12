const { MessageEmbed } = require('discord.js');

async function getEmbedInvite(type, action) {
  if (type === 'message') {
    const iconGuild = action.guild.iconURL();

    const name = action.member.user.username;
    const avatar = action.member.user.avatarURL();

    const response = await action.guild.invites.create(action.channelId);
    const invite = `https://discord.gg/${response.code}`;

    const exampleEmbed = new MessageEmbed()
    .setColor('#FFD700')
    .setTitle('Convite do discord.')
    .setAuthor({ name, iconURL: avatar, url: avatar})
    .setDescription(invite)
    .setThumbnail(iconGuild)
    .setImage(action.guild.banner)
    .setTimestamp()
    .setFooter({ text: `Dicord ${action.guild.name}`, iconURL: iconGuild });

    return { embeds: [exampleEmbed] };
  } else if (type === 'interaction') {
    const iconGuild = interaction.guild.iconURL();

		const name = interaction.user.username;
		const avatar = interaction.user.avatarURL();

    const response = await interaction.guild.invites.create(interaction.channelId);
    const invite = `https://discord.gg/${response.code}`;

		const exampleEmbed = new MessageEmbed()
		.setColor('#FFD700')
		.setTitle('Convite do discord.')
		.setAuthor({ name, iconURL: avatar, url: avatar})
		.setDescription(invite)
		.setThumbnail(iconGuild)
		.setImage(interaction.guild.banner)
		.setTimestamp()
		.setFooter({ text: `Dicord ${interaction.guild.name}`, iconURL: iconGuild });

    return { embeds: [exampleEmbed] };
  }
}

module.exports = { getEmbedInvite };