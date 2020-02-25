import { startAction } from './start-action.js'
import * as Telegraf from 'telegraf'

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

bot.start(startAction)
