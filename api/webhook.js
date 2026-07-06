const { Telegraf } = require('telegraf');
const bot = new Telegraf('8840523796:AAEAFM5-MBd5Eq2DFBv3WQPjTjXT5V-XOOI');

bot.start((ctx) => ctx.reply('أهلاً بك! البوت يعمل الآن.'));

module.exports = async (req, res) => {
    try {
        await bot.handleUpdate(req.body);
        res.status(200).send('OK');
    } catch (err) {
        res.status(500).send('Error');
    }
};
