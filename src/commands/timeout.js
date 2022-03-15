const { api } = require('../api');
const { prefix } = require('../../config.json');
const { getEmbedLog } = require('../utils/getEmbedLog');

async function action(message) {
  const command = message.content.slice(prefix.length).split(/ +/);

  if (message.member.permissions.has('ADMINISTRATOR')) {
    const time = command[1];

    if (!time) {
      message.delete();
      message.channel.send('**Você precisa informar um tempo!**');
      return;
    };

    const user = message.mentions.users.first();
    if (!user) return message.channel.send('**Você precisa informar um usuário!**');
    const milliseconds = time * 1000;

    if (!milliseconds || milliseconds < 10000 || milliseconds > 2419200000) {
      return message.channel.send(`**Você precisa informar um tempo válido!, entre **10s** e **28d!** **`);
    }

    const iosTime = new Date(Date.now() + milliseconds).toISOString();

    try {
      await api.patch(`guilds/${message.guild.id}/members/${user.id}`, {
        mute_reason: 'Timeout',
        deaf_reason: 'Timeout',
        guild_id: message.guild.id,
        communication_disabled_until: iosTime
      });

      message.channel.send(`**${user} foi silenciado por ${time}ms!**`);
    } catch (error) {}
  } else {
    const embedLog = await getEmbedLog({ description: `**${message.author} tentou executar um comando que não tem permissão! - (command: ${command[0]})**`, message });
    message.guild.channels.cache.get(channelLogId).send(embedLog);

    message.delete();
    message.channel.send({ 
      content: `**<@${message.author.id}> Você não tem permissão para executar esse comando!**`,
      allowedMentions: { users: [message.author.id] }
    });
  }
}

module.exports = action;