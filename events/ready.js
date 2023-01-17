const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        client.user.setPresence({
            activities: [
                {
                    name: `${client.guilds.cache.size} guilds ❄`,
                    type: ActivityType.Watching,
                },
            ],
            status: 'online',
        });
        console.log(`Ready! Logged in as ${client.user.tag}\n`);
    },
};
