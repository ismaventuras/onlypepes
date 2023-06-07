import { Bot, GrammyError, HttpError } from "grammy";
import { run , sequentialize} from "@grammyjs/runner";
import {getRandomizedPepes} from 'database'

const pepes = await getRandomizedPepes()

const bot = new Bot(process.env.BOT_TOKEN || "");

bot.api.setMyCommands([
    {command:'pepe', description: 'get a random pepe'},
]);
bot.use(sequentialize(ctx => ctx.chat?.id.toString()));

bot.command("pepe", async ctx => {
    try {
        const randomIndex = Math.floor(Math.random() * pepes.length);
        const pepe = pepes[randomIndex];
        await ctx.replyWithPhoto(pepe.image);
    } catch (error) {
        console.error("error on command /pepe", error)
    }
})

bot.catch(err => {
    const ctx = err.ctx;    
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
      console.error("Could not contact Telegram:", e);
    } else {
      console.error("Unknown error:", e);
    }
})

const runner = run(bot);
// Stopping the bot when the Node process
// is about to be terminated
const stopRunner = () => runner.isRunning() && runner.stop();
process.once("SIGINT", stopRunner);
process.once("SIGTERM", stopRunner);