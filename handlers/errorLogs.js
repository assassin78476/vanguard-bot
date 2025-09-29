// handlers/errorLogs.js
// Usage: require('./handlers/errorLogs')(client)
const { WebhookClient, EmbedBuilder } = require('discord.js');

module.exports = (client) => {
  const webhookUrl = process.env.WEBHOOK_URL_ERRORS;
  const webhook = webhookUrl ? new WebhookClient({ url: webhookUrl }) : null;

  if (!webhook) {
    console.warn('[errorLogs.js] WEBHOOK_URL_ERRORS not set.');
    return;
  }

  async function sendLog(title, description, color = 0xED4245) {
    try {
      const embed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description?.slice(0, 4000) || 'No details')
        .setColor(color)
        .setTimestamp();

      await webhook.send({ embeds: [embed] });
    } catch (err) {
      console.error('[errorLogs.js] Failed to send log:', err);
    }
  }

  client.on('error', (err) => {
    sendLog('⚠️ Client Error', `\`\`\`${err?.stack || err?.message || err}\`\`\``);
    console.error('[errorLogs] Client Error:', err);
  });

  process.on('unhandledRejection', (reason, promise) => {
    sendLog('🔥 Unhandled Rejection', `**Reason:**\n\`\`\`${reason}\`\`\`\n**Promise:** ${promise}`);
    console.error('[errorLogs] Unhandled Rejection:', reason);
  });

  process.on('uncaughtException', (err) => {
    sendLog('💥 Uncaught Exception', `\`\`\`${err?.stack || err}\`\`\``);
    console.error('[errorLogs] Uncaught Exception:', err);
  });

  console.log('[errorLogs.js] Error logging registered.');
};
