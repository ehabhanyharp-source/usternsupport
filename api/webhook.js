const { Telegraf } = require('telegraf');
const bot = new Telegraf('8840523796:AAEAFM5-MBd5Eq2DFBv3WQPjTjXT5V-XOOI');

// إعداد الأوامر هنا
bot.start((ctx) => ctx.reply('يعمل بنجاح!'));

module.exports = async (req, res) => {
    try {
        // استلام البيانات من تليجرام
        const update = req.body;
        
        // محاولة المعالجة
        await bot.handleUpdate(update);
        
        // الرد على تليجرام أننا استلمنا الرسالة
        return res.status(200).send('OK');
    } catch (err) {
        // إذا حدث خطأ، سنعرفه في الـ Logs
        console.error("خطأ في البوت:", err);
        return res.status(500).send('Internal Server Error');
    }
};
