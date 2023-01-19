const Discord = require('discord.js')
const { SlashCommandBuilder } = require('discord.js');
const fs = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Display the commands'),
    execute: async (interaction, client) => {
        const commandFiles = fs
            .readdirSync(`./src/commands/musicbot`)
            .filter((file) => file.endsWith(".js"));

        const { commands, commandArray } = client;
        for (const file of commandFiles) {
            const command = require(`../../commands/musicbot/${file}`);
            commands.set(command.data.name, command);
            commandArray.push(command.data.toJSON());
        }

        const commandInfo = client.commands.filter(command => command.music).map(command => {
            return `**/${command.data.name}** - ${command.data.description}\n\n`;
        });

        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setTitle('Music Commands')
                    .setDescription(commandInfo.join(''))
                    .setColor('BLURPLE')
            ]
        })
    },
    music: true
}