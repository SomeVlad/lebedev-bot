process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api')

export const handler = () => {
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN || '1088753306:AAF1gTyidF_llyZ2eSht5uZsDQEqdMQwtV0', { polling: true })

    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, 'hey there')
    })
}
