import Telegraf from 'telegraf'
import { startAction } from './start-action.js'

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

bot.start(startAction)
