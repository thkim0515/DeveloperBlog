#!/bin/bash

# 프론트엔드와 백엔드 배포 경로 설정
FRONTEND_REPOSITORY=/home/ubuntu/deploy-fe
BACKEND_REPOSITORY=/home/ubuntu/deploy-be

# 프론트엔드 배포
cd $FRONTEND_REPOSITORY
sudo chown -R ubuntu:ubuntu $FRONTEND_REPOSITORY
sudo chmod -R 755 $FRONTEND_REPOSITORY

# Nginx 재시작
sudo systemctl restart nginx

# 백엔드 배포
cd $BACKEND_REPOSITORY
sudo chown -R ubuntu:ubuntu $BACKEND_REPOSITORY
sudo chmod -R 755 $BACKEND_REPOSITORY

# PM2 프로세스 관리
if pm2 list | grep -q "backend"; then
  echo "Restarting PM2 process..."
  pm2 restart backend
else
  echo "Starting new PM2 process..."
  pm2 start index.js --name backend
fi

# PM2 상태 저장
pm2 save
