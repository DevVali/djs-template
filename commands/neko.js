const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('neko')
        .setDescription('Request random neko image'),
    async execute(interaction) {
        await interaction.deferReply();
        const result = await request('https://nekos.best/api/v2/neko');
        const json = await result.body.json();
        const { url, artist_name, artist_href } = json.results[0];

        const embed = new EmbedBuilder()
            .setColor(0xe91e63)
            .setAuthor({ name: artist_name, url: artist_href })
            .setImage(url)
            .setFooter({
                text: `Requested by ${interaction.user.username}#${interaction.user.discriminator}`,
            })
            .setTimestamp();

        interaction.editReply({ embeds: [embed] });
    },
};
