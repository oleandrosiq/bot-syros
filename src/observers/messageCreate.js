const { goodMorningMessages, goodNightMessages } = require('../../datas.json');
const { vefirySuspiciousWords } = require('./utils/vefirySuspiciousWords');

async function messageCreate(message, client) {
  vefirySuspiciousWords(message, client);

  if (message.author.id !== client.user.id) {
    goodMorningMessages.forEach(msg => {
      if (message.content.toLocaleLowerCase().includes(msg.toLocaleLowerCase()) && message.content.length < 15) {
        message.channel.send('๐ Bom diaaa ' + message.author.toString());
      }
    });

    goodNightMessages.forEach(msg => {
      if (message.content.toLocaleLowerCase().includes(msg.toLocaleLowerCase()) && message.content.length < 15) {
        message.channel.send('๐ Boa Noiteee ' + message.author.toString());
      }
    });
  }

  if (message.content.toLocaleLowerCase().includes('leandro' || 'l e a n d r o' || 'lรชandro')) {
		message.react('๐ฅ');
		message.react('๐');
	}
}

module.exports = { messageCreate };