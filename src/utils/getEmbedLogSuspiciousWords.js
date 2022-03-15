// // const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// await lib.discord.channels['@0.3.0'].messages.create({
//   "channel_id": `${context.params.event.channel_id}`,
//   "content": `@MODERADOR **Mensagem suspeita detectada! Verifique o mais rapido possivel!**`,
//   "tts": false,
//   "components": [
//     {
//       "type": 1,
//       "components": [
//         {
//           "style": 4,
//           "label": `Banir`,
//           "custom_id": `row_0_button_0`,
//           "disabled": false,
//           "emoji": {
//             "id": null,
//             "name": `❌`
//           },
//           "type": 2
//         },
//         {
//           "style": 1,
//           "label": `Silenciar - 7d`,
//           "custom_id": `row_0_button_1`,
//           "disabled": false,
//           "emoji": {
//             "id": null,
//             "name": `🗣`
//           },
//           "type": 2
//         },
//         {
//           "style": 3,
//           "label": `Verificar`,
//           "custom_id": `row_0_button_2`,
//           "disabled": false,
//           "emoji": {
//             "id": null,
//             "name": `✔`
//           },
//           "type": 2
//         }
//       ]
//     }
//   ],
//   "message_reference": {
//     "message_id": "message_id",
//     "channel_id": "channel_id",
//     "guild_id": "guild_id",
//     "fail_if_not_exists": false
//   },
//   "embeds": [
//     {
//       "type": "rich",
//       "title": "",
//       "description": `Mensagem: ```Putaa````,
//       "color": 0xff0000,
//       "fields": [
//         {
//           "name": `Usuario `,
//           "value": `@Lkzcorno`,
//           "inline": true
//         },
//         {
//           "name": `Canal`,
//           "value": `#chatgeral`,
//           "inline": true
//         },
//         {
//           "name": `Cargos`,
//           "value": `@viewew @ts @aslp `,
//           "inline": true
//         }
//       ],
//       "author": {
//         "name": `Mayk brito #1298`,
//         "url": `https://github.com/maykbrito.png`,
//         "icon_url": `https://github.com/maykbrito.png`,
//         "proxy_icon_url": `https://github.com/maykbrito.png`
//       },
//       "footer": {
//         "text": `User ID: 809541260749701132 • Hoje às 18:03`
//       }
//     }
//   ]
// });