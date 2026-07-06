const { Telegraf } = require('telegraf');

// استبدل التوكن هنا (تأكد أنه لا توجد مسافات)
const bot = new Telegraf('8840523796:AAEAFM5-MBd5Eq2DFBv3WQPjTjXT5V-XOOI');

// تفعيل أمر البدء
bot.start((ctx) => {
    ctx.reply('مرحباً بك! أنا أعمل الآن بنجاح.');
});

// الرد على أي رسالة نصية أخرى
bot.on('text', (ctx) => {
    ctx.reply(`لقد استلمت رسالتك: ${ctx.message.text}`);
});

// هذا هو الجزء الذي يربط البوت بـ Vercel
module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            return res.status(200).send('OK');
        }
        return res.status(200).send('البوت يعمل!');
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
};
