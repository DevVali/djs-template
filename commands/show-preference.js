const { SlashCommandBuilder } = require('discord.js');
const { Preferences } = require('../dbObjects.sequelize.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('show-preference')
        .setDescription('Display preference(s) you chose '),
    async execute(interaction) {
        await interaction.deferReply();
        const preference = await Preferences.findOne({
            where: { id: interaction.user.id },
        });

        if (preference) {
            return await interaction.editReply(
                `You chose: ${preference.get('item')}`
            );
        }

        return await interaction.editReply(
            'Do `/select` before running this command.'
        );
    },
};
