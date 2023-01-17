const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('calendar')
        .setDescription('Shows the basic calendar'),
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

        await interaction.reply({
            content:
                'Happy winter! :snowflake:\nHere\'s the calendar.',
            components: [row],
        });
    },
};
