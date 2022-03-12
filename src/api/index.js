const axios = require('axios');
const { token } = require('../../config.json');

const api = axios.create({
  baseURL: 'https://discord.com/api/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bot ${token}`,
  },
});

module.exports = { api };
