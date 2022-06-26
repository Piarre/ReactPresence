#!/bin/sh
start powershell npm run script:build-react
sleep 10
start powershell npm run script:serve
start powershell npm run bscript:electron