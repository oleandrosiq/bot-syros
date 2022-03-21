const actionInvite = require('./invite');
const actionKick = require('./kick');
const actionTimeout = require('./timeout');
const actionLock = require('./lock');
const actionMsgto = require('./msgto');

const allCommands = ['invite', 'kick', 'timeout', 'msgto'];

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
    'lock': {
      name: 'lock',
      description: 'Trava um canal do servidor!',
      action: actionLock,
    },
    'msgto': {
      name: 'msgto',
      description: 'Envia uma mensagem para um usuário!',
      action: actionMsgto,
    },
  };

  return allCommands[command];
}

module.exports = { commands, allCommands };