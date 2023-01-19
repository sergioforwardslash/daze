const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('Bye bye !'),
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
        
        try {
        client.distube.voices.leave(interaction)
        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('*Daze Player*')
                    .setDescription(`Thank you for using my music functions! Have a nice day :3`)
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
        }
    },
    music: true
}