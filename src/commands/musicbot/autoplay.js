const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autoplay')
        .setDescription('Turn On or Off'),
    inVoiceChannel: true,

    execute: async (interaction, client) => {
        const queue = client.distube.getQueue(interaction)

        if (!queue) return interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`There is nothing in the queue right now!`)
                    .setColor('BLURPLE')
            ]
        })

        const autoplay = queue.toggleAutoplay()

        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`AutoPlay: \`${autoplay ? 'On' : 'Off'}\``)
                    .setColor('BLURPLE')
            ]
        })
    },
    music: true
}
