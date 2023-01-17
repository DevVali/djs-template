const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('thread')
        .setDescription('Manage threads in your guild')
        .addStringOption((option) =>
            option
                .setName('name')
                .setDescription('Thread name')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('action')
                .setDescription('Action to take on the thread')
                .setRequired(true)
                .addChoices(
                    { name: 'Create', value: 'create' },
                    { name: 'Delete', value: 'delete' },
                    { name: 'Archive', value: 'archive' },
                    { name: 'Unarchive', value: 'unarchive' },
                    { name: 'Lock', value: 'lock' },
                    { name: 'Unlock', value: 'unlock' }
                )
        )
        .setDMPermission(false),
    async execute(interaction) {
        try {
            const name = interaction.options.getString('name');
            const action = interaction.options.getString('action');

            if (action === 'create') {
                const thread = await interaction.channel.threads.create({
                    name: name,
                    autoArchiveDuration: 60,
                    reason: `Thread created with ${interaction.client.username} bot by ${interaction.user.username}#${interaction.user.discriminator}`,
                });
                const embed = new EmbedBuilder()
                    .setColor(0x68adad)
                    .setTitle('Thread action')
                    .setAuthor({ name: 'Thread created' })
                    .setDescription(`Created thread: <#${thread.id}>`)
                    .setTimestamp();

                await interaction.reply({ embeds: [embed] });
            } else if (action === 'delete') {
                const thread = interaction.channel.threads.cache.find(
                    (x) => x.name === name
                );
                const embed = new EmbedBuilder()
                    .setColor(0x68adad)
                    .setTitle('Thread action')
                    .setAuthor({ name: 'Thread deleted' })
                    .setDescription('Successfully deleted.')
                    .setTimestamp();

                await thread.delete();
                await interaction.reply({ embeds: [embed] });
            } else if (action === 'archive') {
                const thread = interaction.channel.threads.cache.find(
                    (x) => x.name === name
                );
                const embed = new EmbedBuilder()
                    .setColor(0x68adad)
                    .setTitle('Thread action')
                    .setAuthor({ name: 'Thread archived' })
                    .setDescription('Successfully archived.')
                    .setTimestamp();

                await thread.setArchived(true);
                await interaction.reply({ embeds: [embed] });
            } else if (action === 'unarchive') {
                const thread = interaction.channel.threads.cache.find(
                    (x) => x.name === name
                );
                const embed = new EmbedBuilder()
                    .setColor(0x68adad)
                    .setTitle('Thread action')
                    .setAuthor({ name: 'Thread unarchived' })
                    .setDescription('Successfully unarchived.')
                    .setTimestamp();

                await thread.setArchived(false);
                await interaction.reply({ embeds: [embed] });
            } else if (action === 'lock') {
                const thread = interaction.channel.threads.cache.find(
                    (x) => x.name === name
                );
                const embed = new EmbedBuilder()
                    .setColor(0x68adad)
                    .setTitle('Thread action')
                    .setAuthor({ name: 'Thread locked' })
                    .setDescription('Successfully locked.')
                    .setTimestamp();

                await thread.setLocked(true);
                await interaction.reply({ embeds: [embed] });
            } else if (action === 'unlock') {
                const thread = interaction.channel.threads.cache.find(
                    (x) => x.name === name
                );
                const embed = new EmbedBuilder()
                    .setColor(0x68adad)
                    .setTitle('Thread action')
                    .setAuthor({ name: 'Thread unlocked' })
                    .setDescription('Successfully unlocked.')
                    .setTimestamp();

                await thread.setLocked(false);
                await interaction.reply({ embeds: [embed] });
            }
        } catch (error) {
            interaction.reply(
                'An error occurred while executing this command.'
            );
        }
    },
};
