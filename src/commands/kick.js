const { getEmbedLog } = require('../utils/getEmbedLog');

async function action(message) {
  if (message.member.permissions.has('KICK_MEMBERS')) {
    const userMention = message.mentions.users.first();

    if (!userMention) {
      message.delete();
      message.channel.send({ 
        content: `<@${message.author.id}> **Mencione um usuário para kickar!**`,
        allowedMentions: { users: [message.author.id] }
      });

      return;
    }

    message.delete();	

    if (message.guild.members.cache.get(userMention.id).permissions.has('KICK_MEMBERS')) {
      message.channel.send(`**Ops! Eu não tenho permissão para kickar esse usuário!**`);
      return;
    }

    message.guild.members.kick(userMention.id);
    message.channel.send(`** ${userMention.username} foi kickado do servidor!**`);

    message.guild.channels.cache.get(channelLogId).send();
  
    message.guild.channels.cache.forEach(async (channel) => {
      if (channel.name === 'log-syros') {
        channel.send(`${userMention.username} foi Kikado do servidor!`);
      }
    });
  } else {
    const embedLog = await getEmbedLog({ description: `${message.author} tentou executar um comando que não tem permissão! - (command: ${command[0]})`, message });
    message.guild.channels.cache.forEach(async (channel) => {
      if (channel.name === 'log-syros') {
        channel.send(embedLog);
      }
    });

    message.delete();
    message.channel.send({ 
      content: `<@${message.author.id}> Você não tem permissão para executar esse comando!`,
      allowedMentions: { users: [message.author.id] }
    });
  }
}

module.exports = action;