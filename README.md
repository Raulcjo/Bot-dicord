# Bot-discord
Robô de estudos criado para o discord
- As tecnologias usadas foram **javascript** e a **API do discord**
## Infelizmente no momento não consigo subir o bot para o uso, mas caso tenha interesse em testar siga esses passos:
1. Obrigatório ter uma conta no discord, caso não tenha [Discord](https://discord.com/)
2. É necessário possuir a verificação em duas etapas, caso não tenha e não saiba como fazer acesse [Como fazer a verificação em duas etapas](https://support.discord.com/hc/pt-br/articles/219576828-Configurando-a-Verifica%C3%A7%C3%A3o-em-Duas-Etapas)
3. Crie um servior de teste, caso não saiba como acesse: [Como criar um servidor](https://support.discord.com/hc/pt-br/articles/204849977-Como-Criar-um-Servidor-)
4. Abra o [Developer Portal Discord](https://discord.com/developers/applications), crie um team e uma application
   > A application é para o seu bot e o team para ser possível alterar ele mais facilmente
   > Cuidado com as permições que você abilita o seu bot a ter, deixe apenas o que pretende fazer de preferência
5. Abra um editor de código, exmeplo VScode
6. Baixe o arquivo Bot-discord
7. Abra o prompt de comando e entre nos arquivos baixados
8. Para que funcione é necessário a instalação do discord.js, a API do próprio discord através desse comando: **npm install discord.js**
  > Observação: É possível usar outra biblioteca sem ser o npm, para mais informações consulte o site:
  [Discord.js](https://discord.js.org/docs/packages/discord.js/14.14.1)
- Adicione um arquivo nomeado de **.env**, dentro desse arquivo será colocado o TOKEN do bot, o CLIENT_ID e o GUILD_ID
  > Para conseguir o TOKEN e o CLIENT_ID terá que ir no [Disocrd de desenvolvedor](https://discord.com/developers/applications), o TOKEN está na pasta _Bot_ e o CLIENT_ID está na pasta _OAuth2_ -> dentro da subpasta _General_
  > O GUILD_ID só é possível conseguir estar no modo desenvolvedor e pegar o ID do servidor, caso não saiba acesse [Como descobrir meu IDs](https://support.discord.com/hc/pt-br/articles/206346498-Onde-posso-encontrar-minhas-IDs-de-Usu%C3%A1rio-Servidor-Mensagem-)
9. Para ativar o bot escreva no prompt de comando **node index.js**
  > Para verificar se todos os comandos estão funcionando escreva no prompt de comando **node deploy-commands.js**, antes do comando acima
