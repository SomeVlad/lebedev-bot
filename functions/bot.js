process.env.NTBA_FIX_319 = 1
const last = require('lodash').last
const TelegramBot = require('node-telegram-bot-api')
const fetch = require('node-fetch').default
const toJson = response => response.json()
const { TELEGRAM_TOKEN, NEWS_TOKEN } = process.env
const minute = 1000 * 60
const day = minute * 60 * 24

exports.handler = async({ body }) => {
    const bot = new TelegramBot(TELEGRAM_TOKEN)

    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, 'hey there')
        setInterval(() => {
            const url = encodeURI(
                `http://newsapi.org/v2/everything?sources=Lenta&qInTitle="+умер"&sortBy=publishedAt&apiKey=${NEWS_TOKEN}`
            )

            fetch(url)
                .then(toJson)
                .then(({ articles }) => {
                    const lastArticle = last(articles)
                    bot.sendMessage(msg.chat.id, lastArticle.title)
                })
        }, minute)
    })
}
