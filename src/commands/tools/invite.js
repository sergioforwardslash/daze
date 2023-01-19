const { SlashCommandBuilder } = require('discord.js');
const serverInvite = "https://discord.com/api/oauth2/authorize?client_id=1033996863977832528&permissions=2150681600&scope=bot"

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Invite link for daze!'),
    execute: async (interaction) => {
        const newMessage = `Invite **daze** using: ${serverInvite}`
        
        await interaction.reply({
            content: newMessage
        });
    },
    helpHidden: true
}