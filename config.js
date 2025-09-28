const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '',
  status: {
    rotateDefault: [
      { name: '', type: ActivityType.Watching },
	  { name: '', type: ActivityType.Playing },
      { name: '', type: ActivityType.Streaming, url: 'https://www.twitch.tv/' },
      { name: '', type: ActivityType.Listening },
    ],
    songStatus: true
  },
  spotifyClientId: "",
  spotifyClientSecret: "",
}
