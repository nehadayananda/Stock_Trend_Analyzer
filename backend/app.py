from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.data_fetching import fetch_stock_data
from utils.technical_indicators import calculate_technical_indicators
from utils.prediction_models import train_price_prediction_model
from utils.sentiment_analysis import analyze_sentiment
from utils.notifications import send_sms
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'Stock Trend Analyzer API is running'})

@app.route('/api/stock/analyze', methods=['POST'])
def analyze_stock():
    try:
        data = request.get_json()
        stock_symbol = data.get('symbol', '').upper()
        
        if not stock_symbol:
            return jsonify({'error': 'Stock symbol is required'}), 400
        
        # Fetch stock data
        stock_data = fetch_stock_data(stock_symbol)
        
        if stock_data.empty or not isinstance(stock_data, pd.DataFrame):
            return jsonify({'error': 'Failed to fetch valid stock data'}), 404
        
        # Calculate technical indicators
        stock_data = calculate_technical_indicators(stock_data)
        
        # Prepare stock data for response
        stock_data_json = stock_data.tail(30).reset_index().to_dict(orient='records')
        for record in stock_data_json:
            if pd.isna(record.get('Moving_Avg')):
                record['Moving_Avg'] = None
            if pd.isna(record.get('RSI')):
                record['RSI'] = None
        
        # Get latest values
        latest_data = {
            'close': float(stock_data['Close'].iloc[-1]),
            'moving_avg': float(stock_data['Moving_Avg'].iloc[-1]) if not pd.isna(stock_data['Moving_Avg'].iloc[-1]) else None,
            'rsi': float(stock_data['RSI'].iloc[-1]) if not pd.isna(stock_data['RSI'].iloc[-1]) else None,
            'volume': float(stock_data['Volume'].iloc[-1])
        }
        
        return jsonify({
            'symbol': stock_symbol,
            'latest': latest_data,
            'historical_data': stock_data_json
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/stock/predict', methods=['POST'])
def predict_stock():
    try:
        data = request.get_json()
        stock_symbol = data.get('symbol', '').upper()
        
        if not stock_symbol:
            return jsonify({'error': 'Stock symbol is required'}), 400
        
        # Fetch and prepare data
        stock_data = fetch_stock_data(stock_symbol)
        stock_data = calculate_technical_indicators(stock_data)
        
        # Train model and get predictions
        model, predictions = train_price_prediction_model(stock_data)
        
        predictions_json = predictions.reset_index().to_dict(orient='records')
        
        return jsonify({
            'symbol': stock_symbol,
            'predictions': predictions_json
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/stock/sentiment', methods=['POST'])
def get_sentiment():
    try:
        data = request.get_json()
        stock_symbol = data.get('symbol', '').upper()
        
        if not stock_symbol:
            return jsonify({'error': 'Stock symbol is required'}), 400
        
        sentiment_score = analyze_sentiment(stock_symbol)
        
        return jsonify({
            'symbol': stock_symbol,
            'sentiment': sentiment_score
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/notifications/sms', methods=['POST'])
def send_sms_notification():
    try:
        data = request.get_json()
        phone_number = data.get('phone_number')
        stock_symbol = data.get('symbol', '').upper()
        
        if not phone_number or not stock_symbol:
            return jsonify({'error': 'Phone number and stock symbol are required'}), 400
        
        # Validate phone number
        if not phone_number.startswith('+') or len(phone_number) < 10:
            return jsonify({'error': 'Invalid phone number format'}), 400
        
        # Fetch stock data
        stock_data = fetch_stock_data(stock_symbol)
        stock_data = calculate_technical_indicators(stock_data)
        
        # Send SMS
        sms_status = send_sms(phone_number, stock_data, stock_symbol)
        
        return jsonify({
            'success': True,
            'message': sms_status
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
