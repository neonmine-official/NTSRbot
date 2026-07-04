async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):welcome text=hello
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# აქ ჩასვით თქვენი ტოკენი ბრჭყალებში
TOKEN = "8503829547:AAHwP4kbfH0MQ22kIoyHrcNfQ5ulsbe2yzY"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):welcome text=hello
    
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    # 3. ეს ტექსტი გამოჩნდება ღილაკთან ერთად
    await update.message.reply_text("დააჭირე ღილაკს:", reply_markup=reply_markup)
    keyboard = [
        [InlineKeyboardButton("🎮 თამაშის დაწყება", web_app=WebAppInfo(url=game_url))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(welcome_text, reply_markup=reply_markup, parse_mode='Markdown')

if _name_ == '_main_':
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("hello", hello))hello
    print("ბოტი გაშვებულია...")
    app.run_polling()
