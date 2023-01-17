const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Greets the world')
        .addBooleanOption((option) =>
            option
                .setName('messageid')
                .setDescription('Whether or not message id is returned')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('text')
                .setDescription('Any extra text for the bot to echo it')
        )
        .addNumberOption((option) =>
            option
                .setName('wait')
                .setDescription(
                    'Time to wait in milliseconds until the message id is sent (if `messageid` set to true)'
                )
        ),
    async execute(interaction) {
        const messageid = interaction.options.getBoolean('messageid') ?? false;
        const text = interaction.options.getString('text') ?? '';
        const timeToWait = interaction.options.getNumber('wait') ?? 1000;

        await interaction.reply(`Hello, world. ${text}`);
        const message = await interaction.fetchReply();
        await wait(timeToWait);
        if (messageid) {
            await interaction.followUp({
                content: `Message ID: ${message.id}`,
                ephemeral: true,
            });
        }
    },
};
