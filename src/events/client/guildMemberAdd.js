const Discord = require('discord.js')
const fs = require("fs");

module.exports = {
    name: 'guildMemberAdd',
    execute: async (client) => {
        let welcomeChannels = JSON.parse(fs.readFileSync('./src/welcomeChannels.json'))

        let channelId = welcomeChannels[client.guild.id]
        if (channelId) {
            fs.readdir('./gifs/welcome', (e, files) => {
                if (e) console.error(e);

                const gifs = files.filter(f => f.endsWith('.gif'));
                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

                const embed = new Discord.EmbedBuilder()
                    .setTitle(`Welcome to **${client.guild.name}** !`)
                    .setDescription(`Hope you have a nice time here <@${client.user.id}> !`)
                    .setImage(`attachment://${randomGif}`)
                    .setColor('#ba67f5')
                try {
                client.guild.channels.cache.get(channelId).send({ embeds: [embed], files: [`./gifs/welcome/${randomGif}`] });
                } catch (e) {
                    console.log(`Unable to send Welcome in ${client.guild.name}`)
                    console.log(e)
                }
            })
        }
    }
}
