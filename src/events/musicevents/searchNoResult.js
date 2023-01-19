module.exports = {
    name: 'searchNoResult',
    async execute(message, query) {
        message.channel.send(`${client.emotes.error} | Try again bud. Couldn't find \`${query}\`!`)
    }
}