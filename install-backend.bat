@echo off
echo Installing Backend Dependencies...
cd backend
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt
echo Backend setup complete!
pause
