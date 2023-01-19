const { execute } = require("../client/interactionCreate")

module.exports = {
    name: 'addList',
    async execute(queue, playlist) {
        queue.textChannel.send(
            `${client.emotes.success} | Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`)
    }
}