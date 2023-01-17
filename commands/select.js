const {
    SlashCommandBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('select')
        .setDescription('Select what you prefer'),
    async execute(interaction) {
        const row = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('preference')
                .setPlaceholder('Select your preference...')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions(
                    {
                        label: 'Dog',
                        description: 'You love dogs',
                        value: 'dog',
                    },
                    {
                        label: 'Cat',
                        description: 'You love cats',
                        value: 'cat',
                    }
                )
        );

        await interaction.reply({
            content: 'Make a selection in the menu below!',
            components: [row],
        });
    },
};
