// const { getEmbedInvite } = require("../utils/getEmbedInvite");

async function action(message) {
  const firstMention = message.mentions.users.first();
  firstMention.send(message.content.slice(message.content.indexOf('msgto') + 5));
}

module.exports = action;