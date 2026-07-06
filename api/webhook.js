const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('8840523796:AAEAFM5-MBd5Eq2DFBv3WQPjTjXT5V-XOOI');

bot.start((ctx) => {
    ctx.reply('أهلاً بك في دعم Ustern! كيف يمكنني مساعدتك اليوم؟', Markup.inlineKeyboard([
        [Markup.button.callback('تتبع الطلب', 'track_order')],
        [Markup.button.callback('تواصل مع الدعم', 'contact_support')]
    ]));
});

bot.action('track_order', (ctx) => ctx.reply('من فضلك أرسل رقم الطلب الخاص بك.'));
bot.action('contact_support', (ctx) => ctx.reply('سيتم تحويلك لموظف الدعم الآن.'));

module.exports = async (req, res) => {
    await bot.handleUpdate(req.body);
    return res.status(200).send('OK');
};
