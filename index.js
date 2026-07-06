const TelegramBot = require("node-telegram-bot-api");

const token = "8892358205:AAGH4t_I2Mk7eBANZ0_z8fTkmKj4xqxTs6c";

const bot = new TelegramBot(token, { polling: true });

console.log("✅ Bot is running...");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🎉 البوت شغال بنجاح!");
});
