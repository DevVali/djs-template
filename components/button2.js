const wait = require('node:timers/promises').setTimeout;

module.exports = {
    name: 'button2',
    async execute(interaction) {
        await interaction.reply('Thank you for clicking this second button! ');
        await wait(2000);
        await interaction.followUp({
            content: 'Click the link as well! <3',
            ephemeral: true,
        });
    },
};
