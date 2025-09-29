const fs = require('fs');
const path = require('path');
const { REST, Routes } = require('discord.js');

module.exports = async (client, config, colors) => {
    const commandsPath = path.join(__dirname, '../commands');
    const commandFolders = fs.readdirSync(commandsPath);
    const enabledCommandFolders = commandFolders.filter(folder => config.categories[folder]);

    const commands = [];

    // ✅ Chargement des commandes
    for (const folder of enabledCommandFolders) {
        const commandFiles = fs.readdirSync(path.join(commandsPath, folder)).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(path.join(commandsPath, folder, file));
            if (!command.data || !command.execute) {
                console.log(`${colors.red}[ WARNING ]${colors.reset} Command file ${file} is missing "data" or "execute".`);
                continue;
            }
            client.commands.set(command.data.name, command);
            commands.push(command.data.toJSON());
        }
    }

    // ✅ REST setup
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN || config.token);

    // Fonction pour enregistrer les commandes dans une guild
    async function registerCommands(guild) {
        try {
            await rest.put(
                Routes.applicationGuildCommands(client.user.id, guild.id),
                { body: commands }
            );
            console.log(`${colors.green}[ LOADER ]${colors.reset} Registered ${commands.length} slash commands on ${guild.name} (${guild.id}).`);
        } catch (error) {
            console.error(`${colors.red}[ ERROR ]${colors.reset} Failed to register on guild ${guild.id}:`, error);
        }
    }

    // ✅ Initial loader (tous les serveurs déjà rejoints)
    try {
        console.log('\n' + '─'.repeat(40));
        console.log(`${colors.yellow}${colors.bright}⚡ SLASH COMMANDS${colors.reset}`);
        console.log('─'.repeat(40));

        for (const guild of client.guilds.cache.values()) {
            await registerCommands(guild);
        }

        console.log(`${colors.green}[ SUCCESS ]${colors.reset} Slash commands successfully registered on all guilds.`);
    } catch (error) {
        console.error(`${colors.red}[ ERROR ]${colors.reset} While registering slash commands:`, error);
    }

    // ✅ Event quand le bot rejoint un nouveau serveur
    client.on('guildCreate', async guild => {
        console.log(`${colors.yellow}[ INFO ]${colors.reset} Joined new guild: ${guild.name} (${guild.id})`);
        await registerCommands(guild);
    });

    // ✅ Confirmation en console que le système est actif
    console.log(`${colors.cyan}[ SYSTEM ]${colors.reset} Auto-registration of slash commands on new guilds is ${colors.green}ENABLED${colors.reset}.`);
};
