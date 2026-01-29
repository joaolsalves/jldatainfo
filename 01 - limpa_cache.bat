@echo off

taskkill /IM chrome.exe /F

rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Cache"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Code Cache"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\GPUCache"

start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "http://joaolsalves.github.io/dsantanaliutaio/"

echo Cache limpo e site aberto no Chrome.
