const { Preferences } = require('../dbObjects.sequelize.js');

module.exports = {
    name: 'preference',
    async execute(interaction) {
        const item = interaction.values[0];
        await interaction.deferReply({ ephemeral: true });

        if (item === 'dog') {
            try {
                // eslint-disable-next-line no-unused-vars
                const preference = await Preferences.upsert({
                    id: interaction.user.id,
                    item: item,
                });

                return await interaction.editReply({
                    content:
                        'It\'s time to turn off your computer and go out w/ your dog! :dog:',
                });
            } catch (error) {
                console.error(error);
            }
        } else if (item === 'cat') {
            try {
                // eslint-disable-next-line no-unused-vars
                const preference = await Preferences.upsert({
                    id: interaction.user.id,
                    item: item,
                });

                return await interaction.editReply({
                    content: 'Reminder to feed your cat! :cat:',
                });
            } catch (error) {
                console.error(error);
            }
        }
    },
};
