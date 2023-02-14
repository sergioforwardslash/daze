const fs = require("fs");

module.exports = {
    data: {
        name: `verify`
    },
    execute: async (interaction, client) => {
        const accessRoles = JSON.parse(fs.readFileSync('./src/accessRoles.json'))
        let roleId = accessRoles[interaction.guild.id]

        if (interaction.isButton()) {
            const buttonId = interaction.customId;
            if (buttonId === 'verify') {
                if (interaction.member.roles.cache.has(roleId)) {
                    interaction.member.roles.remove(roleId)
                    return interaction.reply({
                        content: `Successfully removed <@${roleId}>`,
                        ephemeral: true
                    })
                } else {
                    try {
                        interaction.member.roles.add(roleId)
                    } catch (e) {
                        console.log(`Couldn't verify user in ${interaction.guild.name}`)
                        interaction.reply({
                            content: 'Sorry, couldn\'t verify you. Try again?',
                            ephemeral: true
                        })
                    }

                    interaction.reply({
                        content: 'Thanks for verifying!',
                        ephemeral: true
                    })
                }
            }
        }
    }
}