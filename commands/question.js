const {
    SlashCommandBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('question')
        .setDescription('Answer some random question'),
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('question-modal')
            .setTitle('Answer.');

        const answerInput = new TextInputBuilder()
            .setCustomId('answer')
            .setLabel('What is your political stance on cheese?')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const firstActionArrow = new ActionRowBuilder().addComponents(
            answerInput
        );

        modal.addComponents(firstActionArrow);
        await interaction.showModal(modal);
    },
};
