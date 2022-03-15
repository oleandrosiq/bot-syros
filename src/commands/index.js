const actionInvite = require('./invite');
const actionKick = require('./kick');
const actionTimeout = require('./timeout');

const allCommands = ['invite', 'kick', 'timeout'];

async function commands(command) {  
  const allCommands = {
    'invite': {
      name: 'invite',
      description: 'Gera um convite do servidor!',
      action: actionInvite,
    },
    'kick': {
      name: 'kick',
      description: 'Kicka um usuário do servidor!',
      action: actionKick,
    },
    'timeout': {
      name: 'timeout',
      description: 'Silencia um usuário do servidor!',
      action: actionTimeout,
    },
  };

  return allCommands[command];
}

module.exports = { commands, allCommands };