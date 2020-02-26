process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api')

exports.handler = () => {
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN)

    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, 'hey there')
    })
}
