const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playfirst')
        .setDescription('Use a youtube or spotify link with this or type the name of a song')
        .addStringOption(song =>
            song.setName('input')
                .setDescription('The link or name to search')),
    inVoiceChannel: true,
    execute: async (interaction, client) => {
        const url = interaction.options.getString('input')
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

        if (!url) return interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`Please enter a link or query to search!`)
                    .setColor('BLURPLE')
            ]
        })
        try {
            await client.distube.play(interaction.member.voice.channel, url, {
                member: interaction.member,
                textChannel: interaction.channel,
                interaction,
                position: 1
            })
            const queue = client.distube.getQueue(interaction)
            const song = queue.songs[1]
            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setTitle('*Daze Player*')
                        .setDescription(`Got it, playing **${song.name}** next, as requested by ${song.user}!`)
                        .setColor('BLURPLE')
                ]
            })
        } catch (e) {
            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setTitle('*Daze Player*')
                        .setDescription(`I just died trying to run that. Try again?`)
                        .setColor('BLURPLE')
                ]
            })
            console.log(e)
        }
    },
    music: true
}