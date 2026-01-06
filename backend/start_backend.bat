@echo off
cd /d "%~dp0"
set PYTHONPATH=%~dp0venv\Lib\site-packages
echo Starting Digital Farmer Twin Backend...
echo ======================================
"C:\Users\Mugendraraja R\AppData\Local\Programs\Python\Python313\python.exe" app.py
