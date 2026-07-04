from telegram import InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo, Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# შენი ბოტის ტოკენი BotFather-იდან
TOKEN = "აქ_ჩასვი_შენი_ტოკენი"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # აქ უნდა ჩაწერო შენი თამაშის მისამართი (ლინკი)
    # თუ ჯერ არ გაქვს ლინკი, ჩასვი დროებით: https://google.com
    game_url = "https://შენი-საიტის-ლინკი.com" 
    
    keyboard = [
        [InlineKeyboardButton("თამაშის დაწყება", web_app=WebAppInfo(url=game_url))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("გამარჯობა! დააჭირე ღილაკს:", reply_markup=reply_markup)

if _name_ == '_main_':
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.run_polling()
