const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skip current song'),
    inVoiceChannel: true,
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
        try {
            const song = await queue.skip()
            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setTitle('*Daze Player*')
                        .setDescription(`Skipped! Now playing:\n\`${song.name}\``)
                        .setColor('BLURPLE')
                ]
            })
        } catch (e) {
            interaction.reply(`${e}`)
        }
    },
    music: true
}