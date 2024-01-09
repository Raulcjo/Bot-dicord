const { SlashCommandBuilder } = require("discord.js");

module.exports = { //exportando o comando
    data: new SlashCommandBuilder()
    .setName("playlist") //nome do comando
    .setDescription("Ouça a melhor playlist de estudos"), //Descrição de comando

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/intl-pt/album/1Vzn07Z6VkIG2eReUQ3FgP?si=O3RZTGsOSFGOM6hvwKT_3g")
    }
}
