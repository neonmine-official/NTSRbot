from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# აქ ჩასვით თქვენი ტოკენი ბრჭყალებში
TOKEN = "8503829547:AAHwP4kbfH0MQ22kIoyHrcNfQ5ulsbe2yzY"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # აქ ჩასვით თქვენი საიტის მისამართი (მაგალითად: https://yourusername.github.io/NTSRbot/)
    game_url = "https://შენი-საიტის-ლინკი.com"
    
    welcome_text = (
        "🚀 *მოგესალმებით Neon Mine-ში!* 🚀\n\n"
        "მზად ხართ გახდეთ ყველაზე მდიდარი მოთამაშე? 💰\n"
        "დააჭირეთ ქვემოთ მოცემულ ღილაკს და დაიწყეთ თავგადასავალი!"
    )
    
    keyboard = [
        [InlineKeyboardButton("🎮 თამაშის დაწყება", web_app=WebAppInfo(url=game_url))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(welcome_text, reply_markup=reply_markup, parse_mode='Markdown')

if _name_ == '_main_':
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    print("ბოტი გაშვებულია...")
    app.run_polling()
