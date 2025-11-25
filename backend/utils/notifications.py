from twilio.rest import Client
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Function to send SMS
def send_sms(phonenumber, stock_data, stock_symbol):
    # Twilio credentials from environment variables
    twilio_sid = os.getenv('TWILIO_ACCOUNT_SID', '')
    auth_token = os.getenv('TWILIO_AUTH_TOKEN', '')
    from_phone_number = os.getenv('TWILIO_PHONE_NUMBER', '')

    message = f"Stock Report for {stock_symbol}:\n"
    message += f"Latest Closing Price: {stock_data['Close'].iloc[-1]}\n"
    message += f"Moving Average: {stock_data['Moving_Avg'].iloc[-1]}\n"
    message += f"RSI: {stock_data['RSI'].iloc[-1]}\n"

    client = Client(twilio_sid, auth_token)

    try:
        sms = client.messages.create(
            body=message,
            from_=from_phone_number,
            to=phonenumber
        )
        return f"SMS sent successfully! SID: {sms.sid}"
    except Exception as e:
        raise Exception(f"Failed to send SMS: {str(e)}")
