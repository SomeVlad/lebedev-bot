const { Telegraf } = require('telegraf')
const { last, sortBy } = require('lodash')
const fetch = require('node-fetch').default
const { BOT_TOKEN } = process.env
const { parseString } = require('xml2js')

const MS_PER_DAY = 1000 * 60 * 60 * 24

function dateDiffInDays(a, b) {
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())

    return Math.floor((utc2 - utc1) / MS_PER_DAY)
}


const bot = new Telegraf(BOT_TOKEN)

const handler = ({ reply }) => {
    const url = encodeURI(
        `https://news.google.com/rss/search?cf=all&hl=ru&pz=1&q=умер&gl=RU&ceid=RU:ru&scoring=n`
    )

    fetch(url)
        .then(response => response.text())
        .then(str => parseString(str, (err, res) => {
            const now = new Date()
            const itemList = res.rss.channel[0].item
            const filteredList = itemList
                .map(item => {
                    const oldtitle = item.title[0]
                    return ({
                        ...item,
                        title: oldtitle.substr(0, oldtitle.indexOf(' - ')),
                        date: new Date(item.pubDate[0])
                    })
                })
                .filter(item => {
                    const {date} = item

                    return dateDiffInDays(date, now) <= 1
                })
            const sortedList = sortBy(filteredList, ({ date }) => date)
            const { title } = last(sortedList)
            return title ? reply(`${title}.\n\nНу умер и умер.`) : null
        }))
}

bot.start(({ reply }) => {
    handler({ reply })
    setInterval(() => handler({ reply }), MS_PER_DAY)
})

bot.launch()
