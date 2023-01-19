const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('stop the queue'),
    aliases: ['disconnect', 'leave'],
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
            queue.stop()
        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`Stopped the queue :0`)
                    .setColor('BLURPLE')
            ]
        })
        } catch (e) {
            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setTitle('*Daze Player*')
                        .setDescription(`Something went wrong, try again?`)
                        .setColor('BLURPLE')
                ]
            })
            console.log(e)
        }
        
    },
    music: true
}