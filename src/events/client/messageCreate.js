const greetings = [
    'hii <:sg_cute:1059630615978315777>',
    'dttm <:sg_die:1052835672643350558>',
    'wsg shawty',
    'heyyyyy :3',
    'hello gamer',
    'who are u',
    'hello world'
];

function getRandomGreeting() {
    return greetings[Math.floor(Math.random() * greetings.length)];
}

function isSeparateWord(message, greeting) {
    const pattern = new RegExp(`\\b${greeting}\\b`, 'i');
    return pattern.test(message);
}

module.exports = {
    name: 'messageCreate',
    execute: async (message, client) => {
        switch (true) {
            case message.guild.id == '1063666687561441441':
                break;
            case message.author.id == '191637171713605632' && message.content.includes('gamer'):
                message.reply('someone say GAMER???\nhttps://tenor.com/view/mrw-reaction-old-gamer-nerd-moms-basement-gif-4994401');
                break;
            case message.author.id != client.user.id && isSeparateWord(message.content, 'hi'):
            case message.author.id != client.user.id && isSeparateWord(message.content, 'hey'):
            case message.author.id != client.user.id && isSeparateWord(message.content, 'wsg'):
            case message.author.id != client.user.id && isSeparateWord(message.content, 'hello'):
            case message.author.id != client.user.id && isSeparateWord(message.content, 'whats up'):
            case message.author.id != client.user.id && isSeparateWord(message.content, 'what\'s up'):
            case message.author.id != client.user.id && isSeparateWord(message.content, 'morning'):
            case message.author.id != client.user.id && isSeparateWord(message.content, 'afternoon'):
            case message.author.id != client.user.id && isSeparateWord(message.content, 'evening'):
                const greeting = getRandomGreeting();
                try {
                message.reply(greeting);
                break;
                } catch (e) {
                    console.log(`Couldn't reply to a greeting. Error:\n${e}`)
                }
            default:
                break;
        }
    }
}