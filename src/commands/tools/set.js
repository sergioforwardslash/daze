const Discord = require('discord.js')
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('set')
        .setDescription('setting channels')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(welcome =>
            welcome.setName('welcome')
                .setDescription('Set the welcome channel using the ID'))
        .addStringOption(verify =>
            verify.setName('verify')
                .setDescription('Set the Access role')),
    execute: async (interaction, client) => {
        const guildId = interaction.guild.id
        const welcomeChannel = interaction.options.getString('welcome')
        const accessRole = interaction.options.getString('verify')

        if (!welcomeChannel) {
            try {
                client.storeAccessRole(guildId, accessRole)
                interaction.reply({
                    embeds: [
                        new Discord.EmbedBuilder()
                            .setTitle('*Verify Button*')
                            .setDescription(`Got it, set <@${accessRole}> as the button role.`)
                            .setColor('Blurple')
                    ]
                })
            } catch (e) {
                interaction.reply({
                    embeds: [
                        new Discord.EmbedBuilder()
                            .setTitle('*Verify Button*')
                            .setDescription(`Something went wrong, try again?`)
                            .setColor('Blurple')
                    ]
                })
                console.log(`Couldnt assign role in ${interaction.guild.name} due to: ${e}`)
            }


        }

        if (!accessRole) {
            try {
                client.storeWelcomeChannel(guildId, welcomeChannel)
                interaction.reply({
                    embeds: [
                        new Discord.EmbedBuilder()
                            .setTitle('*Welcome Message*')
                            .setDescription(`Got it, set <#${welcomeChannel}> as the welcome channel for **${interaction.guild.name}**`)
                            .setColor('BLURPLE')
                    ]
                })
            } catch (e) {
                interaction.reply({
                    embeds: [
                        new Discord.EmbedBuilder()
                            .setTitle('*Welcome Message*')
                            .setDescription(`Something went wrong, try again?`)
                            .setColor('Blurple')
                    ]
                })
                console.log(`Couldnt assign welcome channel in ${interaction.guild.name} due to: ${e}`)
            }
        }

    }
}