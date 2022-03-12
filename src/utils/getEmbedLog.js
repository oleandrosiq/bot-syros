const { MessageEmbed } = require('discord.js');

async function getEmbedLog({ description, message }) {
  const iconGuild = message.guild.iconURL();

  const name = message.member.user.username;
  const avatar = message.member.user.avatarURL();

  const exampleEmbed = new MessageEmbed()
  .setColor('#E70000')
  .setTitle('Log')
  .setAuthor({ name, iconURL: avatar, url: avatar})
  .setDescription(description)
  .setThumbnail(iconGuild)
  .setImage(message.guild.banner)
  .setTimestamp()
  .setFooter({ text: `Dicord ${message.guild.name}`, iconURL: iconGuild });

  return { embeds: [exampleEmbed] };
}

module.exports = { getEmbedLog };