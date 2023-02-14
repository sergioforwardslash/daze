const fs = require('fs')

module.exports = (client) => {
    let accessRoles = JSON.parse(fs.readFileSync('./src/accessRoles.json', 'utf8'))

    client.storeAccessRole = async (guildId, roleId) => {
        accessRoles[guildId] = roleId

        fs.writeFileSync('./src/accessRoles.json',
            JSON.stringify(accessRoles))
    }
}