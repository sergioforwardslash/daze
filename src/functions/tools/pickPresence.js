const { ActivityType } = require('discord.js')

module.exports = (client) => {
    client.pickPresence = async () => {
        const options = [
            {
                type: ActivityType.Watching,
                text: `the matrix collapse`,
                status: 'online'
            },
            {
                type: ActivityType.Listening,
                text: `human music`,
                status: 'idle'
            },
            {
                type: ActivityType.Playing,
                text: `World Domination Simulator`,
                status: 'dnd'
            }
        ]
        const option = Math.floor(Math.random() * options.length)

        client.user.setPresence({
            activities: [{
                name: options[option].text,
                type: options[option].type
            }],
            status: options[option].status
        })
    }
}