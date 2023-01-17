const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'today',
    async execute(interaction) {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('yesterday')
                .setLabel('6.1.')
                .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
                .setCustomId('today')
                .setLabel('7.1.')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('tomorrow')
                .setLabel('8.1.')
                .setStyle(ButtonStyle.Danger)
        );

        await interaction.deferReply();
        await interaction.editReply({
            content: `This day is today, ${interaction.user.username}!`,
            components: [row],
        });
    },
};
