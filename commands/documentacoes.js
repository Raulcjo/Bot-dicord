const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nem uma linguagem foi selecionada")
            .addOptions({
                label: "javascript",
                description: "Veja a documentação do javascript",
                value: "javascript"
            },
            {
                label: "c#",
                description: "Veja a documentação do C#",
                value: "csharp"
            },
            {
                label: "discord.js",
                description: "Veja a documentação do discord.js",
                value: "discord.js"
            },
            )
    )

module.exports = { //exportando o comando
    data: new SlashCommandBuilder()
    .setName("docs") //nome do comando
    .setDescription("Acesse a documentação da tecnologia que quiser"), //Descrição de comando

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das tecnologias abaixo: ", components: [row]})
    }
}