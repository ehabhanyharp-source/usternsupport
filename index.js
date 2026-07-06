const { Telegraf } = require('telegraf');

// التوكن الخاص بك
const bot = new Telegraf('8892358205:AAGH4t_I2Mk7eBANZ0_z8fTkmKj4xqxTs6c');

// معالجة الرسائل
bot.start((ctx) => ctx.reply('البوت يعمل الآن من ملف index.js!'));
bot.on('message', (ctx) => ctx.reply('وصلت رسالتك.'));

// الدالة الأساسية لاستقبال التحديثات من تليجرام
module.exports = async (req, res) => {
    try {
        await bot.handleUpdate(req.body);
        return res.status(200).send('OK');
    } catch (err) {
        return res.status(500).send('Error');
    }
};
