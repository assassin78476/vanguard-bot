

<h1 align="center" style="font-family: Arial, sans-serif; color: #FF6F61; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
  ALL IN ONE BOT
</h1>

Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg


  <a href="https://discord.gg/a7r25Cz2UD">
    <img src="https://img.shields.io/badge/Discord-Join-blue?style=flat-square&logo=discord"
      alt="Join Discord" />
  </a>


# Discord All-in-One BOT Installation Guide

## How to Install

### Step 1: Update The Necessary files

1. Open the `config.json` and add your token,mongodb url.
2. Open the `config.js` and add your bot owner ID and add your spotify client id and secret and finally your bot status.
3. Open the `.env` and fill with the necessary variables.


### Step 2: Set Up Hosting Service

1. Go to your preferred hosting service.


### Step 3: Add Build and Start Commands
 Run the following commands to install dependencies and start your bot:

   npm install, 
   node index.js

### Step 4: Get Your Bot Token
Navigate to the Discord Developer Portal.
Find your application, and retrieve the bot token from the "Bot" section.

### Step 5: Set Environment Variable
Create an environment variable with the following details:
TOKEN=
CLIENT_ID=
FORTNITE_API_KEY=
YOUTUBE_API_KEY=
TWITCH_CLIENT_ID=
TWITCH_ACCESS_TOKEN=
MONGODB_URI=
DISCORD_USER_ID=
BOT_API=
GEMINI_API=
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
WEBHOOK_URL_LOGS=
WEBHOOK_URL_GUILDS=

Note: for Bot API go to `https://ssrr.tech` and create your account and after go into your account settings and create an API key and you will need to paste tour discord user id for the dashboard to work properly after go to `https://ssrr.tech/ressources/dashboard` and login with your discord account and you can manages your bot.
Side note: I am not the owner of the website.
### Step 6: Wait and Test
Wait approximately five minutes for your bot to deploy and start up.

Test your bot by sending commands to ensure it is operational.

🎉 Congratulations! Your bot is now up and running. 🥳

### Additional Resources
Common Errors: Consult the errors section for troubleshooting.

### Useful Files

events/ready.js: Bot status configuration.

UI/banners/musicard.js: Change, add, or remove music cards here.

UI/icons/musicicons.js: Change, add, or remove music icons here.
