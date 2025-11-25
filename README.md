# 📈 Stock Trend Analyzer

A modern, full-stack web application for analyzing stock market trends with AI-powered predictions, technical indicators, and real-time data visualization.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Flask](https://img.shields.io/badge/Flask-3.1.2-green)
![Python](https://img.shields.io/badge/Python-3.8+-yellow)
![License](https://img.shields.io/badge/License-MIT-red)

## 🌟 Features

### 📊 Real-Time Stock Analysis
- Fetch live and historical stock data from Alpha Vantage API
- Support for thousands of stock symbols (AAPL, MSFT, GOOGL, etc.)
- Comprehensive data including Open, High, Low, Close prices, and Volume

### 📈 Technical Indicators
- **Moving Average (MA)**: 20-day moving average for trend identification
- **Relative Strength Index (RSI)**: Momentum indicator for overbought/oversold conditions
- Visual indicators with interactive charts

### 🤖 AI-Powered Predictions
- Machine learning price predictions using Linear Regression
- Trained on historical stock data
- Visual comparison of actual vs predicted prices

### 💬 Sentiment Analysis
- NLP-powered market sentiment analysis using Hugging Face Transformers
- Classifies sentiment as positive, negative, or neutral
- Helps gauge market mood around specific stocks

### 📱 SMS Notifications
- Optional SMS alerts via Twilio integration
- Receive stock analysis reports directly on your phone
- Includes latest prices, moving averages, and RSI

### 🎨 Modern UI/UX
- Professional landing page with hero section
- Responsive design (mobile, tablet, desktop)
- Interactive charts with Recharts
- Clean blue and white color scheme
- Smooth animations and transitions

## 🏗️ Architecture

### Frontend (React)
- **Framework**: React 18.2.0
- **Charts**: Recharts 2.10.0
- **HTTP Client**: Axios 1.6.0
- **Styling**: Custom CSS with modern design

### Backend (Flask)
- **Framework**: Flask 3.1.2
- **API**: RESTful architecture
- **CORS**: Flask-CORS for cross-origin requests
- **Data Processing**: Pandas, NumPy
- **ML**: Scikit-learn
- **NLP**: Transformers, PyTorch

### External APIs
- **Alpha Vantage**: Stock market data
- **Twilio**: SMS notifications (optional)

## 📁 Project Structure

```
Stock-Trend-Analyzer/
├── backend/                    # Flask REST API
│   ├── app.py                 # Main Flask application
│   ├── requirements.txt       # Python dependencies
│   ├── .env                   # Environment variables (not in Git)
│   ├── .env.example          # Environment template
│   └── utils/                # Utility modules
│       ├── data_fetching.py  # Alpha Vantage integration
│       ├── technical_indicators.py  # MA & RSI calculations
│       ├── prediction_models.py     # ML predictions
│       ├── sentiment_analysis.py    # NLP sentiment
│       └── notifications.py  # Twilio SMS
│
├── frontend/                  # React Application
│   ├── public/               # Static files
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── LandingPage.js
│   │   │   ├── Header.js
│   │   │   ├── StockAnalyzer.js
│   │   │   ├── StockChart.js
│   │   │   ├── TechnicalIndicators.js
│   │   │   ├── PredictionChart.js
│   │   │   └── SentimentAnalysis.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json          # Node dependencies
│
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

- **Python 3.8+** - [Download](https://www.python.org/downloads/)
- **Node.js 16+** - [Download](https://nodejs.org/)
- **Alpha Vantage API Key** - [Get Free Key](https://www.alphavantage.co/support/#api-key)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/stock-trend-analyzer.git
cd stock-trend-analyzer
```

#### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
copy .env.example .env
# Edit .env and add your API keys
```

#### 3. Frontend Setup

```bash
# Navigate to frontend (in new terminal)
cd frontend

# Install dependencies
npm install
```

### Configuration

#### Required: Alpha Vantage API Key

1. Get your free API key: https://www.alphavantage.co/support/#api-key
2. Open `backend/.env`
3. Add your key:
   ```
   ALPHA_VANTAGE_API_KEY=your_key_here
   ```

#### Optional: Twilio SMS (for notifications)

1. Sign up at: https://www.twilio.com/try-twilio
2. Add to `backend/.env`:
   ```
   TWILIO_ACCOUNT_SID=your_sid
   TWILIO_AUTH_TOKEN=your_token
   TWILIO_PHONE_NUMBER=your_number
   ```

### Running the Application

#### Start Backend

```bash
cd backend
# Activate venv if not already active
python app.py
```

Backend runs on: http://localhost:5000

#### Start Frontend

```bash
cd frontend
npm start
```

Frontend opens automatically at: http://localhost:3000

## 📖 Usage

1. **Landing Page**: View features and information
2. **Click "Start Analyzing"**: Navigate to the analyzer
3. **Enter Stock Symbol**: e.g., AAPL, MSFT, GOOGL
4. **Click "Analyze Stock"**: Get comprehensive analysis
5. **View Results**:
   - Stock price charts
   - Technical indicators (MA, RSI)
   - AI predictions
   - Sentiment analysis
6. **Optional**: Enter phone number and send SMS report

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```

### Analyze Stock
```
POST /api/stock/analyze
Body: { "symbol": "AAPL" }
```

### Get Predictions
```
POST /api/stock/predict
Body: { "symbol": "AAPL" }
```

### Sentiment Analysis
```
POST /api/stock/sentiment
Body: { "symbol": "AAPL" }
```

### Send SMS
```
POST /api/notifications/sms
Body: { "phone_number": "+1234567890", "symbol": "AAPL" }
```

## 🎨 Design

### Color Scheme
- **Primary**: Blue (#1e40af, #3b82f6, #60a5fa)
- **Background**: White (#ffffff, #f8fafc)
- **Text**: Dark slate (#1e293b)
- **Charts**: Blue gradients for data visualization

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

## 🔒 Security

### Environment Variables
- API keys stored in `.env` file
- `.env` excluded from Git via `.gitignore`
- `.env.example` provided as template
- Uses `python-dotenv` for secure loading

### Best Practices
- ✅ No hardcoded credentials
- ✅ CORS configured properly
- ✅ Input validation
- ✅ Error handling
- ✅ Secure API key management

## 🐛 Troubleshooting

### "Failed to Fetch Data"

**Most Common**: API rate limit (5 requests/minute on free tier)
- **Solution**: Wait 60 seconds and try again

**Invalid Symbol**: Wrong stock ticker
- **Solution**: Use valid symbols (AAPL, MSFT, GOOGL)

**Backend Not Running**: Flask server stopped
- **Solution**: Start backend with `python app.py`

### Backend Won't Start

```bash
# Reinstall dependencies
cd backend
pip install -r requirements.txt

# Check Python version
python --version  # Should be 3.8+
```

### Frontend Won't Start

```bash
# Reinstall dependencies
cd frontend
rm -rf node_modules
npm install

# Check Node version
node --version  # Should be 16+
```

### API Key Issues

1. Verify key in `backend/.env`
2. Ensure no spaces around `=`
3. Restart backend after changes
4. Test key at Alpha Vantage website

## 📊 API Limits

### Alpha Vantage Free Tier
- **5 requests per minute**
- **500 requests per day**
- No credit card required

### Recommendations
- Wait 12+ seconds between requests
- Cache results when possible
- Consider premium tier for production

## 🚀 Deployment

### Backend (Heroku Example)

```bash
# Create Procfile
echo "web: python backend/app.py" > Procfile

# Set environment variables
heroku config:set ALPHA_VANTAGE_API_KEY=your_key

# Deploy
git push heroku main
```

### Frontend (Vercel Example)

```bash
# Build
cd frontend
npm run build

# Deploy
vercel deploy
```

## 🛠️ Development

### Adding New Features

1. **Backend**: Add endpoint in `backend/app.py`
2. **Frontend**: Create component in `frontend/src/components/`
3. **Test**: Verify end-to-end functionality

### Code Style

- **Python**: PEP 8
- **JavaScript**: ESLint (React)
- **CSS**: BEM methodology

### Testing

```bash
# Backend
cd backend
pytest

# Frontend
cd frontend
npm test
```

## 📝 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

For issues or questions:
- Open an issue on GitHub
- Check troubleshooting section above
- Review API documentation

## 🙏 Acknowledgments

- **Alpha Vantage** - Stock market data API
- **Twilio** - SMS notification service
- **Hugging Face** - NLP models
- **Recharts** - React charting library

## ⚠️ Disclaimer

This application is for educational and informational purposes only. It should not be considered financial advice. Always conduct your own research and consult with financial professionals before making investment decisions.

## 📈 Popular Stock Symbols

Try these symbols:
- **AAPL** - Apple Inc.
- **MSFT** - Microsoft Corporation
- **GOOGL** - Alphabet Inc. (Google)
- **AMZN** - Amazon.com Inc.
- **TSLA** - Tesla Inc.
- **META** - Meta Platforms Inc.
- **NVDA** - NVIDIA Corporation
- **JPM** - JPMorgan Chase & Co.

## 🔮 Future Enhancements

- [ ] Dark mode
- [ ] Multiple stock comparison
- [ ] Portfolio tracking
- [ ] Advanced ML models (LSTM, Prophet)
- [ ] Real-time WebSocket updates
- [ ] Email notifications
- [ ] Export to PDF
- [ ] Cryptocurrency support
- [ ] User authentication
- [ ] Saved watchlists

---

**Built with ❤️ using React and Flask**

**Star ⭐ this repo if you find it helpful!**
