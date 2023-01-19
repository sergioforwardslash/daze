const fs = require('fs')

module.exports = (client) => {
    let welcomeChannels = JSON.parse(fs.readFileSync('./src/welcomeChannels.json', 'utf8'))

    client.storeWelcomeChannel = async (guildId, channelId) => {
        welcomeChannels[guildId] = channelId

        fs.writeFileSync('./src/welcomeChannels.json',
            JSON.stringify(welcomeChannels))
    }
}