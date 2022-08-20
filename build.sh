::cmd 
::deploy.bat 
@echo off 
hugo 
:: public 
echo. 
echo cd to public... 
cd public 
echo. 
echo add all files... 
git add . 
echo. 
echo print status of Git Submodle... 
git status 
echo. 
echo commit files... 
git commit -m "update blog" 
echo. 
echo push Submodle to GitHub... 
git push 
:: father repo 
echo. 
echo back to repo... 
cd .. 
echo. 
echo add all files... 
git add . 
echo. 
echo print status of Git repo... 
git status 
echo. 
echo commit files... 
git commit -m "update blog" 
echo. 
echo push repo to GitHub... 
git push 
:: finsh 
echo. 
echo deploy finished. 