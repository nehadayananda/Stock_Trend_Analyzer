import requests
import pandas as pd
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def fetch_stock_data(stock_symbol):
    API_URL = "https://www.alphavantage.co/query"
    API_KEY = os.getenv('ALPHA_VANTAGE_API_KEY')

    params = {
        "function": "TIME_SERIES_DAILY",
        "symbol": stock_symbol,
        "apikey": API_KEY,
        "outputsize": "compact"
    }

    try:
        response = requests.get(API_URL, params=params, timeout=10)
        data = response.json()

        # Check for API error messages
        if "Error Message" in data:
            raise ValueError(f"Invalid stock symbol: {stock_symbol}")
        
        if "Note" in data:
            raise ValueError("API rate limit reached. Please wait a minute and try again.")
        
        if "Information" in data:
            raise ValueError("API limit reached. Free tier allows 5 requests per minute.")

        # Check if the response contains the expected key
        if "Time Series (Daily)" not in data:
            raise ValueError(f"No data available for symbol: {stock_symbol}. Please check the symbol and try again.")

        time_series = data["Time Series (Daily)"]

        # Convert the data into a pandas DataFrame
        stock_data = pd.DataFrame.from_dict(time_series, orient="index", dtype=float)
        stock_data.index = pd.to_datetime(stock_data.index)  # Convert index to datetime
        stock_data = stock_data.rename(columns={
            "1. open": "Open",
            "2. high": "High",
            "3. low": "Low",
            "4. close": "Close",
            "5. volume": "Volume"
        })
        stock_data = stock_data.sort_index()  # Sort by date

        return stock_data
    
    except requests.exceptions.Timeout:
        raise ValueError("Request timed out. Please try again.")
    except requests.exceptions.RequestException as e:
        raise ValueError(f"Network error: Unable to connect to stock data service.")
