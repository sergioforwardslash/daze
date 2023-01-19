const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('forward')
        .setDescription('Number of seconds to go forward')
        .addIntegerOption(seconds =>
            seconds.setName('seconds')
                .setDescription('Number of seconds to skip forward')),
    execute: async (interaction, client) => {

        const voiceChannel = interaction.member.voice.channel
        if (!voiceChannel) {
            return interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setTitle('*Daze Player*')
                        .setDescription(`Please join a voice channel first!`)
                        .setColor('BLURPLE')
                ]
            })
        }

        const queue = client.distube.getQueue(interaction)
        if (!queue) return interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`There is nothing in the queue right now!`)
                    .setColor('BLURPLE')
            ]
        })

        const second = interaction.options.getInteger('seconds')
        if (!second) {
            return interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setTitle('*Daze Player*')
                        .setDescription(`Please provide the time (in seconds) to go forward!`)
                        .setColor('BLURPLE')
                ]
            })
        }
        const time = Number(second)
        if (isNaN(time)) return interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`Please enter a valid number!`)
                    .setColor('BLURPLE')
            ]
        })
        queue.seek((queue.currentTime + time))
        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`Forwarded the song for \`${time}\` seconds!`)
                    .setColor('BLURPLE')
            ]
        })
    },
    music: true
}