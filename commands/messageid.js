const {
    ContextMenuCommandBuilder,
    ApplicationCommandType,
} = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Message ID')
        .setType(ApplicationCommandType.Message),
    async execute(interaction) {
        await interaction.reply({
            content: interaction.targetId,
            ephemeral: true,
        });
    },
};
