#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'

git branch -M main
git remote add origin git@github.com:kikihhe/kikihhe.github.io.git

git push -f origin main

cd -