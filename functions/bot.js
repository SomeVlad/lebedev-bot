import { startAction } from './start-action.js'
const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

bot.start(startAction)
