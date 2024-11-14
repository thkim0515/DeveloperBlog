#!/bin/bash

# 프론트엔드와 백엔드 배포 경로 설정
FRONTEND_REPOSITORY=/home/ubuntu/deploy-fe
BACKEND_REPOSITORY=/home/ubuntu/deploy-be

# 프론트엔드 배포
cd $FRONTEND_REPOSITORY
sudo chown -R ubuntu:ubuntu $FRONTEND_REPOSITORY
sudo chmod -R 755 $FRONTEND_REPOSITORY

# nginx 재시작
sudo systemctl restart nginx

# 백엔드 배포
cd $BACKEND_REPOSITORY
sudo chown -R ubuntu:ubuntu $BACKEND_REPOSITORY
sudo chmod -R 755 $BACKEND_REPOSITORY
pm2 restart all 

