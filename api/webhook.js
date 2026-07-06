const { Telegraf } = require('telegraf');

// ضع التوكن الجديد هنا بين العلامتين
const bot = new Telegraf('8840523796:AAEAFM5-MBd5Eq2DFBv3WQPjTjXT5V-XOOI');

// الأوامر الخاصة بالبوت
bot.start((ctx) => {
    ctx.reply('أهلاً بك! أنا أعمل الآن بنجاح على Vercel.');
});

bot.on('message', (ctx) => {
    ctx.reply('لقد استلمت رسالتك!');
});

// هذا الجزء هو المسؤول عن الربط مع Vercel
module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            return res.status(200).send('OK');
        } else {
            return res.status(200).send('البوت يعمل فقط عبر Webhook');
        }
    } catch (err) {
        console.error('حدث خطأ في معالجة الرسالة:', err);
        return res.status(500).send('Error');
    }
};
