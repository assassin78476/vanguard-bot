const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    // Main bot command
    botDescription: "Bot related commands.",
    
    // Subcommand descriptions for SlashCommandBuilder
    botPingDescription: "Check bot latency and response time",
    botInviteDescription: "Get invitation link to add bot to your server", 
    botSupportDescription: "Join our support server for help and updates",
    botStatsDescription: "View comprehensive bot statistics",
    botUptimeDescription: "Check how long the bot has been running",
    botVersionDescription: "Display bot and environment version information",
    botStatusDescription: "Check current operational status",
    botChangelogDescription: "View latest updates and changes",
    botFeedbackDescription: "Learn how to send feedback and suggestions",
    botPrivacyDescription: "View privacy policy and data handling",
    botReportDescription: "Report bugs or issues",
  
    // Ping command
    botPingTitle: "🚀 **PING ANALYSIS**",
    botPingEmbedDescription: `\`\`\`\n🔥 CONNECTION STATUS ANALYSIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\``,
    botPingBotLatencyField: "⚡ **Bot Latency**",
    botPingApiLatencyField: "🌐 **API Latency**", 
    botPingStatusField: "📊 **Status**",
    botPingStatusValue: "`ONLINE`\n🟢 Operational",
    botPingExcellent: "🟢 Excellent",
    botPingGood: "🟡 Good", 
    botPingPoor: "🔴 Poor",
    botPingFooter: "⏱️ Response time: ",
  
    // Invite command
    botInviteTitle: "🎉 **INVITE TO YOUR SERVER**",
    botInviteEmbedDescription: `\`\`\`\n🎉 INVITATION PORTAL\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\`\n\n🔗 **[Click here to invite the bot!]({inviteURL})**\n\n\`\`\`yaml\nFeatures Included:\n  ✨ Advanced Commands\n  🛡️ Moderation Tools\n  🎵 Music & Entertainment\n  📊 Statistics & Analytics\n  🔧 Customization Options\n\`\`\``,
    botInviteFooter: "🚀 Join thousands of servers already using this bot!",
  
    // Support command  
    botSupportTitle: "🆘 **SUPPORT HUB**",
    botSupportEmbedDescription: `\`\`\`\n🆘 SUPPORT NETWORK\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\`\n\n🏠 **[Join Support Server](https://discord.gg/xQF9f9yUEM)**\n*Get instant help from our community and staff*\n\n\`\`\`yaml\nConnect With Us:\n  🐙 GitHub: https://github.com/GlaceYT\n  💻 Replit: https://replit.com/@GlaceYT\n  📺 YouTube: https://www.youtube.com/@GlaceYT\n  📧 Support: Available 24/7\n\`\`\`\n\n> 💡 **Pro Tip:** Use reaction roles in support server for faster assistance!`,
    botSupportFooter: "🤝 We're here to help you succeed!",
  
    // Stats command
    botStatsTitle: "📊 **SYSTEM ANALYTICS**", 
    botStatsEmbedDescription: `\`\`\`\n📊 PERFORMANCE METRICS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\``,
    botStatsMemoryField: "🧠 **Memory Usage**",
    botStatsUptimeField: "⏱️ **Uptime**",
    botStatsServersField: "🏰 **Servers**", 
    botStatsUsersField: "👥 **Users**",
    botStatsChannelsField: "📡 **Channels**",
    botStatsEnvironmentField: "🔧 **Environment**",
    botStatsOptimal: "🟢 Optimal",
    botStatsModerate: "🟡 Moderate",
    botStatsStable: "🟢 Stable",
    botStatsGrowing: "📈 Growing", 
    botStatsActive: "🌐 Active",
    botStatsConnected: "🔗 Connected",
    botStatsFooter: "🖥️ Running on ",
  
    // Uptime command
    botUptimeTitle: "⏰ **SYSTEM UPTIME**",
    botUptimeEmbedDescription: `\`\`\`\n⏰ UPTIME TRACKER\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\`\n\n🚀 **Active Duration:** \`{uptime}\`\n📅 **Started:** {startTime}\n🟢 **Status:** Online & Operational\n\n\`\`\`yaml\nReliability Stats:\n  🔄 Restarts: Minimal\n  📊 Availability: 99.9%\n  ⚡ Performance: Optimized\n\`\`\``,
    botUptimeFooter: "🌟 Consistent performance since launch",
  
    // Version command
    botVersionTitle: "🔬 **VERSION INFORMATION**",
    botVersionEmbedDescription: `\`\`\`\n🔬 SYSTEM VERSIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\``,
    botVersionBotField: "🤖 **Bot Version**",
    botVersionBotValue: "`v2.0.0`\n🆕 Latest",
    botVersionDiscordField: "📦 **Discord.js**", 
    botVersionDiscordValue: "`v14.14.1`\n✅ Stable",
    botVersionNodeField: "⚙️ **Node.js**",
    botVersionNodeStatus: "🟢 Current",
    botVersionBuildField: "🏗️ **Build**",
    botVersionBuildValue: "`Production`\n🔥 Optimized",
    botVersionUpdateField: "📅 **Last Update**",
    botVersionUpdateStatus: "📈 Recent", 
    botVersionDependenciesField: "🔧 **Dependencies**",
    botVersionDependenciesValue: "`All Updated`\n✨ Fresh",
    botVersionFooter: "🚀 Always up-to-date with latest features",
  
    // Status command
    botStatusTitle: "🔍 **SYSTEM STATUS**",
    botStatusEmbedDescription: `\`\`\`\n🔍 STATUS MONITOR\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\`\n\n{statusEmoji} **Current Status:** \`{status}\`\n\n\`\`\`yaml\nSystem Health:\n  🔋 Power: Stable\n  🌐 Network: Connected\n  💾 Database: Operational\n  🔄 APIs: Responsive\n  🛡️ Security: Active\n\`\`\`\n\n> 📊 **All systems operational** - Ready to serve!`,
    botStatusFooter: "🔄 Status updates every 30 seconds",
  
    // Changelog command
    botChangelogTitle: "📋 **CHANGELOG**",
    botChangelogEmbedDescription: `\`\`\`\n📋 LATEST UPDATES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\`\n\n\`\`\`diff\n+ Added futuristic embed designs\n+ Implemented prefix command support\n+ Enhanced performance optimizations\n+ New command analytics system\n+ Improved error handling\n+ Added system health monitoring\n\`\`\`\n\n**🆕 Version 2.0.0 Features:**\n• 🎨 Redesigned all command interfaces\n• ⚡ 40% faster response times\n• 🔒 Enhanced security protocols\n• 📊 Advanced statistics tracking\n• 🌐 Multi-language support prep`,
    botChangelogFooter: "🔄 Check back regularly for updates!",
  
    // Feedback command
    botFeedbackTitle: "💬 **FEEDBACK CENTER**", 
    botFeedbackEmbedDescription: `\`\`\`\n💬 FEEDBACK PORTAL\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\`\n\n🎯 **We value your input!** Share your thoughts and suggestions:\n\n🏠 **[Join Support Server](https://discord.gg/xQF9f9yUEM)**\n*Use the #feedback channel for suggestions*\n\n\`\`\`yaml\nFeedback Types:\n  💡 Feature Requests\n  🐛 Bug Reports\n  🌟 General Suggestions\n  📈 Performance Issues\n  🎨 UI/UX Improvements\n\`\`\`\n\n> 🚀 **Your feedback shapes our future updates!**`,
    botFeedbackFooter: "💝 Thank you for helping us improve!",
  
    // Privacy command
    botPrivacyTitle: "🔒 **PRIVACY POLICY**",
    botPrivacyEmbedDescription: `\`\`\`\n🔒 PRIVACY & SECURITY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\`\n\n🛡️ **Your privacy is our priority**\n\n\`\`\`yaml\nData Handling:\n  📊 No personal data stored\n  🔄 Runtime cache only\n  🗑️ Auto-cleanup on restart\n  🔒 Encrypted connections\n  👥 Anonymous analytics only\n\`\`\`\n\n**📋 What we collect:**\n• Command usage statistics (anonymous)\n• Error logs (no personal info)\n• Performance metrics\n\n**🚫 What we DON'T collect:**\n• Messages content\n• User personal information\n• Private server data\n\n📖 **[View Full Policy](https://github.com/GlaceYT)** | 🛡️ **GDPR Compliant**`,
    botPrivacyFooter: "🔐 Your data, your control",
  
    // Report command
    botReportTitle: "🐛 **BUG REPORT CENTER**", 
    botReportEmbedDescription: `\`\`\`\n🐛 BUG TRACKER\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\`\n\n🔍 **Found a bug?** Help us fix it quickly!\n\n🐙 **[Open GitHub Issue](https://github.com/GlaceYT)**\n*Detailed reports help us resolve issues faster*\n\n\`\`\`yaml\nInclude in your report:\n  📝 Detailed description\n  🔄 Steps to reproduce\n  📱 Device/OS information\n  📸 Screenshots if applicable\n  ⚠️ Error messages\n\`\`\`\n\n**🚨 Priority Issues:**\n• 🔴 Critical bugs (immediate)\n• 🟡 Feature breaks (24-48h)\n• 🟢 Minor issues (1-2 weeks)\n\n> 🏆 **Bug hunters get special recognition!**`,
    botReportFooter: "🛠️ Together we make it better!",
  
    // Help command
    botHelpTitle: "🤖 **BOT COMMANDS HELP**",
    botHelpEmbedDescription: `\`\`\`\n🤖 COMMAND CENTER\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\`\`\`\n\n**Available Commands:**\n\`\`\`yaml\nping      - Check bot latency\ninvite    - Get bot invite link\nsupport   - Join support server\nstats     - View bot statistics\nuptime    - Check bot uptime\nversion   - Version information\nstatus    - Current bot status\nchangelog - Latest updates\nfeedback  - Send feedback\nprivacy   - Privacy policy\nreport    - Report bugs\n\`\`\`\n\n**Usage Examples:**\n• \`!bot ping\` or \`/bot ping\`\n• \`!bot stats\` or \`/bot stats\``,
    botHelpFooter: "💡 Use slash commands (/) for better experience!",
}  