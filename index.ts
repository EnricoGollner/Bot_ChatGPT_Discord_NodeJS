// Create a Discord Bot using OpenAI that interacts on the Discord Server
require('dotenv').config()

const comands = ['/chat']

// Prepare to connect to the Discord API:

const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})


// Prepare to connetion to OpenAI API
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

// Check for when a message on discord is sent:
client.on('messageCreate', async function (message) {
    try {
        if (message.content.startsWith('/chat')) {
            const finalMsg = message.content.replace('/chat ', '')
            console.log(finalMsg)

            if (message.author.bot) return

            const gptResponse = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt: `
            ${client.user.username} is a friendly chatbot.
            ChatGPT:
            ${message.author.name}: ${finalMsg}
            ${client.user.username}: Hello, how can I help you?
            ${client.user.username}:
            `,
                max_tokens: 2000,
                stop: ["ChatGPT:", "Test:"],
            })

            message.reply(`${gptResponse.data.choices[0].text}`)
            return
        }
    } catch (err) {
        console.log(err)
    }
})

// Log the bot into Discord:
client.login(process.env.DISCORD_TOKEN)
console.log('ChatGPT Bot is Online on Discord')
