const { suspiciousWords } = require('../../../datas.json');

async function vefirySuspiciousWords(message, client) {
  if (message.author.id !== client.user.id) {
    const words = message.content.split(' ');
    const isSuspiciousWord = words.some(word => suspiciousWords.includes(word));

    if (isSuspiciousWord) {
      const role = message.guild.roles.cache.find(role => role.name === '🤝 | Moderador Discord');

      if (role) {
        if (role.permissions.has('MANAGE_MESSAGES')) {
          message.channel.send({
            content: `${await role.setMentionable()} Mensagem suspeita de ${message.author} detectada no canal ${message.channel}.`,
            allowedMentions: {
              roles: [role.id],
            }
          });
        }
      }
    }
  }
}

module.exports = { vefirySuspiciousWords };