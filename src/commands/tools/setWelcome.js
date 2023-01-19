const Discord = require('discord.js')
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setchannel')
        .setDescription('setting channels')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption( welcome =>
            welcome.setName('welcome')
                    .setDescription('Set the welcome channel using the ID')),
    execute: async (interaction, client) => {
        const guildId = interaction.guild.id
        const welcomeChannel = interaction.options.getString('welcome')
        client.storeWelcomeChannel(guildId, welcomeChannel)
        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Welcome Message*')
                    .setDescription(`Got it, set <#${welcomeChannel}> as the welcome channel for **${interaction.guild.name}**`)
                    .setColor('BLURPLE')
            ]
        })
    }
}