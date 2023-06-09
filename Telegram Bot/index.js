const axios  = require('axios');
const { Telegraf } = require('telegraf');
const bot = new Telegraf('6137036876:AAEPsG241JoGUFT0DNfqpG_C_QViQ1srzqE');
bot.start((ctx) => ctx.reply("Welcome to new bot by tushar gupta"));
const replyForHi = `hi there,
this is my new bot`;
bot.command('hi',(ctx) => ctx.reply(replyForHi));  // commadn starts with /
bot.on('sticker',(ctx) => ctx.reply('💕'));
bot.command('binarySearch',async function(ctx){
    const res = await axios.get('https://raw.githubusercontent.com/tushargupta123/cpp-practice/master/Searching/searchInSotedRotatedArray.cpp')
    return ctx.reply(res.data);
})
bot.launch();