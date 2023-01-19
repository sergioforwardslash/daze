const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nowplaying')
        .setDescription('Check what is currently playing'),
    aliases: ['np'],
    inVoiceChannel: true,
    execute: async (interaction, client) => {
        const queue = client.distube.getQueue(interaction)
        if (!queue) return interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`There is nothing playing right now!`)
                    .setColor('BLURPLE')
            ]
        })
        const song = queue.songs[0]
        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`**Now Playing:**\n**\`${song.name}\`** by ${song.user}`)
                    .setColor('BLURPLE')
            ]
        })
    },
    music: true
}