@echo off
set /p msg = "Commit Message: "
git add .
git pull origin master
git commit -m "%msg% %date% %time%"
git push origin master

