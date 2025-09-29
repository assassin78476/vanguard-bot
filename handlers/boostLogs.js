require('dotenv').config();
const { WebhookClient, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = async (client) => {
    const boostWebhook = new WebhookClient({ url: process.env.BOOST_WEBHOOK });

    // Fichier JSON pour l'historique des boosts
    const boostDataPath = path.join(__dirname, '../data/boostHistory.json');
    let boostHistory = {};

    // Charger l'historique si le fichier existe
    if (fs.existsSync(boostDataPath)) {
        boostHistory = JSON.parse(fs.readFileSync(boostDataPath, 'utf8'));
    }

    // Log que le système est actif
    console.log('[BOOST SYSTEM] Boost logs system is now ACTIVE.');

    // Événement : membre boost ou retire le boost
    client.on('guildMemberUpdate', async (oldMember, newMember) => {
        try {
            const user = newMember.user;
            const server = newMember.guild;

            // ----- Nouveau boost -----
            if (!oldMember.premiumSince && newMember.premiumSince) {
                const boostTime = newMember.premiumSince;

                // Mettre à jour l'historique
                if (!boostHistory[user.id]) boostHistory[user.id] = { total: 0 };
                boostHistory[user.id].total += 1;
                fs.writeFileSync(boostDataPath, JSON.stringify(boostHistory, null, 4));

                const embed = new EmbedBuilder()
                    .setColor('#FFD700')
                    .setTitle('✨ New Server Boost!')
                    .setDescription(`${user.tag} boosted the server!`)
                    .addFields(
                        { name: 'User', value: `${user.tag} (${user.id})`, inline: true },
                        { name: 'Boost Time', value: `<t:${Math.floor(boostTime.getTime()/1000)}:F>`, inline: true },
                        { name: 'Server', value: `${server.name} (${server.id})`, inline: true },
                        { name: 'Total Boosts', value: `${boostHistory[user.id].total}`, inline: true }
                    )
                    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setFooter({ text: 'Boost Logs', iconURL: client.user.displayAvatarURL() });

                await boostWebhook.send({ embeds: [embed] });
                console.log(`[BOOST] ${user.tag} boosted ${server.name} (total boosts: ${boostHistory[user.id].total})`);

                // Ajouter rôle booster
                const boosterRole = server.roles.cache.find(r => r.name.toLowerCase() === 'booster');
                if (boosterRole) newMember.roles.add(boosterRole).catch(console.error);
            }

            // ----- Boost retiré -----
            if (oldMember.premiumSince && !newMember.premiumSince) {
                const embed = new EmbedBuilder()
                    .setColor('#FF0000')
                    .setTitle('⚠️ Server Boost Removed')
                    .setDescription(`${user.tag} removed their boost.`)
                    .addFields(
                        { name: 'User', value: `${user.tag} (${user.id})`, inline: true },
                        { name: 'Server', value: `${server.name} (${server.id})`, inline: true },
                        { name: 'Total Boosts', value: `${boostHistory[user.id] ? boostHistory[user.id].total : 0}`, inline: true }
                    )
                    .setTimestamp()
                    .setFooter({ text: 'Boost Logs', iconURL: client.user.displayAvatarURL() });

                await boostWebhook.send({ embeds: [embed] });
                console.log(`[BOOST REMOVED] ${user.tag} removed boost from ${server.name}`);

                // Retirer rôle booster
                const boosterRole = server.roles.cache.find(r => r.name.toLowerCase() === 'booster');
                if (boosterRole) newMember.roles.remove(boosterRole).catch(console.error);
            }
        } catch (err) {
            console.error('[BOOST LOG ERROR]', err);
        }
    });

    // ----- Alerte si un booster quitte le serveur -----
    client.on('guildMemberRemove', async (member) => {
        try {
            if (boostHistory[member.id]) {
                const embed = new EmbedBuilder()
                    .setColor('#FF4500')
                    .setTitle('⚠️ Booster Left Server')
                    .setDescription(`${member.user.tag} has left the server.`)
                    .addFields(
                        { name: 'Total Boosts', value: `${boostHistory[member.id].total}`, inline: true },
                        { name: 'User ID', value: `${member.id}`, inline: true }
                    )
                    .setTimestamp()
                    .setFooter({ text: 'Boost Logs', iconURL: member.client.user.displayAvatarURL() });

                await boostWebhook.send({ embeds: [embed] });
                console.log(`[BOOST ALERT] ${member.user.tag} left the server (total boosts: ${boostHistory[member.id].total})`);
            }
        } catch (err) {
            console.error('[BOOST LOG ERROR]', err);
        }
    });
};
