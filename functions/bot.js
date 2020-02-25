const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN)

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'hey there')
})
