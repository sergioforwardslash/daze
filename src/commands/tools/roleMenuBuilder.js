const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rolemenu')
        .setDescription('Create a reaction role menu')
        .setDefaultMemberPermissions(0),
    execute: async (interaction, client) => {
        interaction.reply('eeeeewewewe')
    }
}