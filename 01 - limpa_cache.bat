@echo off

taskkill /IM chrome.exe /F

echo Kill Chrome processes

rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Cache"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Code Cache"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\GPUCache"

echo Clear Chrome cache

start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "jldatainfo.com.br"

echo Chrome restarted and opened jldatainfo.com.br
