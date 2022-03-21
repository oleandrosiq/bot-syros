// const { getEmbedInvite } = require("../utils/getEmbedInvite");

async function action(message) {
  const messageCopy = message;
  const firstMention = messageCopy.mentions.users.first();
  firstMention.send(message.content.slice(message.content.indexOf('msgto') + 5));
  message.delete();
}

module.exports = action;