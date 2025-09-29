// handlers/guildLogs.js
// Usage: require('./handlers/guildLogs')(client)
const { WebhookClient, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = (client) => {
  const webhookUrl = process.env.WEBHOOK_URL_GUILDS;
  const webhook = webhookUrl ? new WebhookClient({ url: webhookUrl }) : null;

  if (!webhook) {
    console.warn('[guildLogs.js] WEBHOOK_URL_GUILDS not set.');
    return;
  }

  async function sendLog(title, fields, color = 0x5865F2) {
    try {
      const embed = new EmbedBuilder()
        .setTitle(title)
        .addFields(fields)
        .setColor(color)
        .setTimestamp();

      await webhook.send({ embeds: [embed] });
    } catch (err) {
      console.error('[guildLogs.js] Failed to send log:', err);
    }
  }

  // When bot joins a guild
  client.on('guildCreate', async (guild) => {
    let inviteUrl = '❌ Unable to fetch invite (missing perms)';

    try {
      const me = guild.members.me;
      if (me.permissions.has(PermissionFlagsBits.ManageGuild) || me.permissions.has(PermissionFlagsBits.CreateInstantInvite)) {
        const channels = guild.channels.cache.filter(c => c.isTextBased());
        if (channels.size > 0) {
          const firstChannel = channels.first();
          const invite = await firstChannel.createInvite({ maxAge: 0, maxUses: 0, unique: false });
          inviteUrl = invite.url;
        }
      }
    } catch (err) {
      console.error('[guildLogs.js] Failed to create invite:', err);
    }

    const owner = await guild.fetchOwner().catch(() => null);

    sendLog('🤝 Bot Joined Guild', [
      { name: 'Guild', value: `${guild.name} (${guild.id})` },
      { name: 'Owner', value: owner ? `${owner.user.tag} (${owner.id})` : 'Unavailable' },
      { name: 'Members', value: `${guild.memberCount}`, inline: true },
      { name: 'Invite', value: inviteUrl }
    ], 0x57F287);
  });

  // When bot leaves a guild
  client.on('guildDelete', async (guild) => {
    sendLog('👋 Bot Left Guild', [
      { name: 'Guild', value: `${guild.name} (${guild.id})` },
      { name: 'Members (last known)', value: `${guild.memberCount || 'Unknown'}` }
    ], 0xED4245);
  });

  console.log('[guildLogs.js] Guild join/leave logging registered.');
};
