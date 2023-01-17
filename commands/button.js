const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    StringSelectMenuBuilder,
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Replies with button'),
    async execute(interaction) {
        const buttons = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('button')
                .setLabel('Click here!')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('button2')
                .setLabel('Or here!')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setLabel('SimLife\'s website')
                .setStyle(ButtonStyle.Link)
                .setURL('https://siml.ejvali.eu')
        );

        const selects = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('button-style')
                .setPlaceholder('Choose button style...')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions(
                    {
                        label: 'Primary',
                        description: 'Primary button style',
                        value: 'primary',
                    },
                    {
                        label: 'Secondary',
                        description: 'Secondary button style',
                        value: 'secondary',
                    },
                    {
                        label: 'Success',
                        description: 'Success button style',
                        value: 'success',
                    },
                    {
                        label: 'Danger',
                        description: 'Danger button style',
                        value: 'danger',
                    }
                )
        );

        await interaction.reply({
            content: 'Click the button below for a sweet surpirse.',
            components: [buttons, selects],
        });
    },
};
