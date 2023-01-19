const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription('What we playing next'),
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

        //buttons :D
        const backId = 'back'
        const forwardId = 'forward'
        // const backButton

        try {
            const q = await queue.songs
                .map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} \`${song.name}\` - \`${song.formattedDuration}\``)
                .join('\n')

            const embed = new Discord.EmbedBuilder()
                .setTitle('*Daze Player*')
                .setDescription(`**Server Queue**\n${q}\n\nAutoPlay: \`${queue.autoplay ? 'On' : 'Off'}\``)
                .setColor('BLURPLE')

            interaction.reply({
                embeds: [embed]
            })
        } catch (e) {
            interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setTitle('*Daze Player*')
                        .setDescription(`**Server Queue**\nSorry, queue is too big to display right now, working on a fix!\n\nAutoPlay: \`${queue.autoplay ? 'On' : 'Off'}\``)
                        .setColor('BLURPLE')
                ]
            })
            console.log(e)
        }
    },
    music: true
}