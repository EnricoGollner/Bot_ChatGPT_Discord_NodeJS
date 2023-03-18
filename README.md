# ChatGPT_Bot_Discord_NodeJS
Um bot do discord que se comunica com a API da OpenAI

### Instalação de todas as dependências:
`npm install` - Que instalará todas as dependências listadas no package.json

### Para rodar o projeto, após as instalações de dependências:
`npm run start-bot`

### Também é necessário a criação de um arquivo `.env` com as variáveis de ambiente:
DISCORD_TOKEN= ** O token do seu bot criado no link: https://discord.com/developers/applications **

OPEN_AI_ORG=  ** Organization ID, que pode ser obtida no link: https://platform.openai.com/account/org-settings **
OPENAI_API_KEY= ** Sua chave de API que pode ser gerada no link: https://platform.openai.com/account/api-keys **

### No Chat do Discord:

Todos os prompts (perguntas do usuário) devem ser iniciados pelo comando "/chat"

Exemplo: "/chat write an article about software engineering"
