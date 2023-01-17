const fs = require('node:fs');
const path = require('node:path');
const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        console.log(`${new Date().toISOString()} - Handling interaction`);
        if (
            interaction.isChatInputCommand() ||
            interaction.isContextMenuCommand()
        ) {
            const command = interaction.client.commands.get(
                interaction.commandName
            );

            if (!command) {
                console.error(
                    `No command matching ${interaction.commandName} was found.`
                );
                return;
            }

            try {
                console.log(
                    `${new Date().toISOString()} - Started executing command at`
                );
                await command.execute(interaction);
            } catch (error) {
                console.error(
                    `Error executing command ${interaction.commandName}`
                );
                console.error(error);
            }
        } else if (
            interaction.isButton() ||
            interaction.isStringSelectMenu() ||
            interaction.isModalSubmit()
        ) {
            const componentsPath = path.join(__dirname, '..', 'components');
            const componentFiles = fs
                .readdirSync(componentsPath)
                .filter((file) => file.endsWith('.js'));

            for (const file of componentFiles) {
                const filePath = path.join(componentsPath, file);
                const component = require(filePath);
                if (interaction.customId === component.name) {
                    try {
                        console.log(
                            `${new Date().toISOString()} - Started executing component at`
                        );
                        await component.execute(interaction);
                    } catch (error) {
                        console.error(
                            `Error executing component ${interaction.customId}`
                        );
                        console.error(error);
                    }
                }
            }
        } else {
            return;
        }
    },
};
