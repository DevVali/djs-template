const {
    ContextMenuCommandBuilder,
    ApplicationCommandType,
} = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('User ID')
        .setType(ApplicationCommandType.User),
    async execute(interaction) {
        await interaction.reply({
            content: interaction.targetId,
            ephemeral: true,
        });
    },
};
