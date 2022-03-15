const { getEmbedInvite } = require("../utils/getEmbedInvite");

async function action(message) {
  const embedInvite = await getEmbedInvite('message', message);
  message.channel.send(embedInvite);
}

module.exports = action;