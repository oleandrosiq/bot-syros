const { suspiciousWords } = require('../../../datas.json');
const { getEmbedLogSuspiciousWords } = require('../../utils/getEmbedLogSuspiciousWords');

async function vefirySuspiciousWords(message, client) {
  if (message.author.id !== client.user.id) {
    const words = message.content.split(' ');
    const isSuspiciousWord = words.some(word => suspiciousWords.includes(word));

    if (isSuspiciousWord) {
      // Alterar para pegar alguma role com permissão de apagar mensagens
      const role = message.guild.roles.cache.find(role => role.name === '🤝 | Moderador Discord');

      if (role) {
        if (role.permissions.has('MANAGE_MESSAGES')) {
          message.guild.channels.cache.forEach(async (channel) => {
            if (channel.name === 'log-syros') {
              const embed = getEmbedLogSuspiciousWords(message);
              channel.send({ 
                embeds: [embed], 
                content: `${await role.setMentionable()} **Mensagem suspeita detectada!**`,
                allowedMentions: { roles: [role.id] }
              });
            }
          });
        }
      }
    }
  }
}

module.exports = { vefirySuspiciousWords };