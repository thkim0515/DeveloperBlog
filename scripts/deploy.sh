#!/bin/bash
REPOSITORY=/home/ubuntu/deploy-fe

cd $REPOSITORY

sudo chown -R ubuntu:ubuntu /home/ubuntu/deploy-fe
sudo chmod -R 755 /home/ubuntu/deploy-fe

# 이전 의존성 삭제 후 재설치( 서버 용량 확보 )
# sudo rm -rf node_modules/
# sudo npm install --legacy-peer-deps

# 빌드
# sudo npm run build

# pm2 재부팅
pm2 restart all

# nginx 재부팅
sudo systemctl restart nginx

# 서버 상태 체크 
systemctl status nginx
