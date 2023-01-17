module.exports = {
    name: 'question-modal',
    async execute(interaction) {
        const answer = interaction.fields.getTextInputValue('answer');

        await interaction.reply({
            content: `Your answer was registred!\n\nAnswer: \`${answer}\``,
        });
    },
};
