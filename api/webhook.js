const { Telegraf } = require('telegraf');
const bot = new Telegraf('8840523796:AAEAFM5-MBd5Eq2DFBv3WQPjTjXT5V-XOOI');

// تفعيل أمر البدء
bot.start((ctx) => ctx.reply('البوت يعمل بنجاح!'));

// الرد على أي رسالة
bot.on('message', (ctx) => {
    ctx.reply('وصلتني رسالتك!');
});

module.exports = async (req, res) => {
    try {
        // الرد الفوري لتليجرام لتجنب تعليق الرسالة
        await bot.handleUpdate(req.body);
        return res.status(200).send('OK');
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error');
    }
};
