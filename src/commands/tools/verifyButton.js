const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Returns a verify button!')
        .setDefaultMemberPermissions(0),
    execute: async (interaction, client) => {
        const button = new ButtonBuilder()
            .setCustomId(`verify`)
            .setLabel(`Verify!`)
            .setStyle(ButtonStyle.Success)

        await interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Verify*')
                    .setDescription(`Click to access the rest of the server!`)
                    .setColor('BLURPLE')
            ],
            components: [new ActionRowBuilder().addComponents(button)]
        })
    },
    helpHidden: true
}