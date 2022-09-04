@echo off
if "%*"=="" (
echo Commit message is empty^^!
exit /b
)
py -3 "..\..\bin\scripts\repo_update.py"
git add .
git commit -m "%*"
git push
exit /b