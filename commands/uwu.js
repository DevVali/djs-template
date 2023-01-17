const { SlashCommandBuilder } = require('discord.js');
const { keyv } = require('../dbInit.keyv.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uwu')
        .setDescription('No description provided'),
    async execute(interaction) {
        // You can replace the role with whatever role name you want
        if (
            !interaction.member.roles.cache.some(
                (role) => role.name === 'The real Vali'
            )
        )
            return;
        const message = await interaction.reply({
            content: 'uwu',
            fetchReply: true,
        });
        const webhook = await interaction.channel.createWebhook({
            name: 'Captain Gluo',
            avatar: null,
        });

        await wait(1000);
        await message.react('💅');

        await webhook.send({
            content:
                '[AD] Gluo is the social media platform of the future.\n\n[Sing up now](<https://www.gluo.xyz>)',
        });

        // keyv
        let views = (await keyv.get('view')) ?? 0;

        views++;
        await keyv.set('view', views);

        console.info(`${views} - Total number of views`);
    },
};
