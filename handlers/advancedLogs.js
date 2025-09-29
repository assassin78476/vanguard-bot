// handlers/advancedLogs.js
// Usage: require('./handlers/advancedLogs')(client)
// Requires: discord.js v14
const { WebhookClient, EmbedBuilder } = require('discord.js');

module.exports = (client) => {
  const webhookUrl = process.env.WEBHOOK_URL_LOGS;
  const webhook = webhookUrl ? new WebhookClient({ url: webhookUrl }) : null;

  if (!webhook) {
    console.warn('[advancedLogs.js] WEBHOOK_URL_LOGS not set — advanced logs disabled.');
    return;
  }

  async function sendLog(title, fields, color = 0x2F3136) {
    try {
      const embed = new EmbedBuilder()
        .setTitle(title)
        .addFields(fields)
        .setColor(color)
        .setTimestamp();
      await webhook.send({ embeds: [embed] });
    } catch (err) {
      console.error('[advancedLogs.js] Failed to send log webhook:', err);
    }
  }

  // ----------------- Messages -----------------
  client.on('messageDelete', (msg) => {
    if (!msg.guild || msg.author?.bot) return;
    sendLog('🗑️ Message Deleted', [
      { name: 'Author', value: `${msg.author?.tag || 'Unknown'} (${msg.author?.id || 'N/A'})` },
      { name: 'Channel', value: `${msg.channel}` },
      { name: 'Content', value: msg.content?.slice(0, 1024) || '[embed/attachments only]' }
    ], 0xED4245);
  });

  client.on('messageUpdate', (oldMsg, newMsg) => {
    if (!newMsg.guild || newMsg.author?.bot) return;
    if (oldMsg.content === newMsg.content) return;
    sendLog('✏️ Message Updated', [
      { name: 'Author', value: `${newMsg.author.tag} (${newMsg.author.id})` },
      { name: 'Channel', value: `${newMsg.channel}` },
      { name: 'Old Content', value: oldMsg.content?.slice(0, 1024) || 'N/A' },
      { name: 'New Content', value: newMsg.content?.slice(0, 1024) || 'N/A' }
    ], 0xFEE75C);
  });

  // ----------------- Members -----------------
  client.on('guildMemberAdd', (member) => {
    sendLog('✅ Member Joined', [
      { name: 'User', value: `${member.user.tag} (${member.id})` },
      { name: 'Account Created', value: `<t:${Math.floor(member.user.createdTimestamp/1000)}:R>` }
    ], 0x57F287);
  });

  client.on('guildMemberRemove', (member) => {
    sendLog('❌ Member Left', [
      { name: 'User', value: `${member.user.tag} (${member.id})` }
    ], 0xED4245);
  });

  client.on('guildBanAdd', (ban) => {
    sendLog('🔨 Member Banned', [
      { name: 'User', value: `${ban.user.tag} (${ban.user.id})` },
      { name: 'Reason', value: ban.reason || 'No reason provided' }
    ], 0xED4245);
  });

  client.on('guildBanRemove', (ban) => {
    sendLog('⚖️ Member Unbanned', [
      { name: 'User', value: `${ban.user.tag} (${ban.user.id})` }
    ], 0x57F287);
  });

  client.on('guildMemberUpdate', (oldMember, newMember) => {
    // Nickname changed
    if (oldMember.nickname !== newMember.nickname) {
      sendLog('📝 Nickname Changed', [
        { name: 'User', value: `${newMember.user.tag} (${newMember.id})` },
        { name: 'Old Nickname', value: oldMember.nickname || 'None' },
        { name: 'New Nickname', value: newMember.nickname || 'None' }
      ], 0x5865F2);
    }

    // Role changes
    const addedRoles = newMember.roles.cache.filter(r => !oldMember.roles.cache.has(r.id));
    const removedRoles = oldMember.roles.cache.filter(r => !newMember.roles.cache.has(r.id));

    addedRoles.forEach(role => {
      sendLog('➕ Role Assigned', [
        { name: 'User', value: `${newMember.user.tag} (${newMember.id})` },
        { name: 'Role', value: `${role.name}` }
      ], 0x57F287);
    });

    removedRoles.forEach(role => {
      sendLog('➖ Role Removed', [
        { name: 'User', value: `${newMember.user.tag} (${newMember.id})` },
        { name: 'Role', value: `${role.name}` }
      ], 0xED4245);
    });
  });

  // ----------------- Roles -----------------
  client.on('roleCreate', (role) => {
    sendLog('📌 Role Created', [
      { name: 'Role', value: `${role.name} (${role.id})` },
      { name: 'Color', value: `${role.hexColor}` }
    ], 0x57F287);
  });

  client.on('roleDelete', (role) => {
    sendLog('📌 Role Deleted', [
      { name: 'Role', value: `${role.name} (${role.id})` }
    ], 0xED4245);
  });

  // ----------------- Channels -----------------
  client.on('channelCreate', (channel) => {
    sendLog('📺 Channel Created', [
      { name: 'Channel', value: `${channel.name} (${channel.id})` },
      { name: 'Type', value: `${channel.type}` }
    ], 0x57F287);
  });

  client.on('channelDelete', (channel) => {
    sendLog('📺 Channel Deleted', [
      { name: 'Channel', value: `${channel.name} (${channel.id})` },
      { name: 'Type', value: `${channel.type}` }
    ], 0xED4245);
  });

  // ----------------- Voice -----------------
  client.on('voiceStateUpdate', (oldState, newState) => {
    if (!oldState.channel && newState.channel) {
      sendLog('🎙️ Voice Channel Joined', [
        { name: 'User', value: `${newState.member.user.tag} (${newState.member.id})` },
        { name: 'Channel', value: `${newState.channel.name}` }
      ], 0x57F287);
    } else if (oldState.channel && !newState.channel) {
      sendLog('🎙️ Voice Channel Left', [
        { name: 'User', value: `${oldState.member.user.tag} (${oldState.member.id})` },
        { name: 'Channel', value: `${oldState.channel.name}` }
      ], 0xED4245);
    }
  });

  console.log('[advancedLogs.js] All advanced log handlers registered.');
};
