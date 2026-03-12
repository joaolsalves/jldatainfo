@echo off
set /p vtexto=Digite algo: 
echo.
echo Voce digitou: %vtexto%
pause

git remote -v

git branch -a

git remote set-url origin https://github.com/joaolsalves/jldatainfo
git add .

git commit -m "%vtexto%"

git push

pause