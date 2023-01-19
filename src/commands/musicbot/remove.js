const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Skip specific song from queue')
        .addIntegerOption(song =>
            song.setName('number')
                .setDescription('song number to skip')),
    aliases: ['ps'],
    inVoiceChannel: true,
    execute: async (interaction, client) => {
        const queue = client.distube.getQueue(interaction)
        const queueNumber = interaction.options.getString('number')
        if (!queueNumber) return interaction.reply(`> Bro forgor the number`)

        try {
            const skippedSong = queue.skip(parseInt(queueNumber))
            interaction.reply(`> Skipped: **${skippedSong.name} <:sg_blushu:1052846426767511572>`)
        } catch (e) {
            interaction.reply('> u broke it dawg')
        }
    }
}
/* getInt() not exist
    find a way to get the integer passed
    wait use the string 
    idk 
*/