const { SlashCommandBuilder } = require("discord.js");

module.exports = { //exportando o comando
    data: new SlashCommandBuilder()
    .setName("ping") //nome do comando
    .setDescription("Responde com Pong!"), //Descrição de comando

    async execute(interaction) {
        await interaction.reply("Pong!")
    }
}
