const { goodMorningMessages } = require('../../datas.json');
const { vefirySuspiciousWords } = require('./utils/vefirySuspiciousWords');

async function messageCreate(message, client) {
  vefirySuspiciousWords(message, client);

  if (message.author.id !== client.user.id) {
    goodMorningMessages.forEach(msg => {
      if (message.content.toLocaleLowerCase().includes(msg.toLocaleLowerCase()) && message.content.length < 15) {
        message.channel.send('🌞 Bom diaaa ' + message.author.toString());
      }
    });
  }

  if (message.content.toLocaleLowerCase().includes('leandro' || 'l e a n d r o' || 'lêandro')) {
		message.react('🔥');
		message.react('👀');
	}
}

module.exports = { messageCreate };