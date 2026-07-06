const { Telegraf } = require('telegraf');

// التوكن الجديد الخاص بك موضوع مباشرة هنا
const bot = new Telegraf('8892358205:AAGH4t_I2Mk7eBANZ0_z8fTkmKj4xqxTs6c');

bot.start((ctx) => {
    ctx.reply('مرحباً بك في بوت Ustern الجديد! أنا جاهز للخدمة.');
});

bot.on('text', (ctx) => {
    ctx.reply('لقد استلمت رسالتك بنجاح.');
});

module.exports = async (req, res) => {
    try {
        await bot.handleUpdate(req.body);
        return res.status(200).send('OK');
    } catch (err) {
        console.error('حدث خطأ:', err);
        return res.status(500).send('Error');
    }
};
