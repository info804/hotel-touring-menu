@echo off
REM ============================================================
REM  Double-click this file to push the whole project to GitHub.
REM ============================================================
cd /d "%~dp0"

echo.
echo  Pushing project to GitHub...
echo.

git add -A

REM Commit everything. If there is nothing to commit, just keep going.
git commit -m "Update %date% %time%"

git push origin main

echo.
if %errorlevel%==0 (
  echo  Done! Everything is pushed to GitHub.
) else (
  echo  Something went wrong - check the messages above.
)
echo.
echo  Press any key to close this window.
pause >nul
