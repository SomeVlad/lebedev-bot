process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api')

export const handler = () => {
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true })

    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, 'hey there')
    })
}
