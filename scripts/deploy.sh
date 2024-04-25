#!/bin/bash
REPOSITORY=/home/ubuntu/deploy-fe

cd $REPOSITORY

# Zip 파일의 내용을 압축 해제합니다.
# 이 부분은 AWS CodeDeploy가 자동으로 처리해 주므로 필요하지 않을 수 있습니다.
# unzip build-app.zip

sudo chown -R ubuntu:ubuntu /home/ubuntu/deploy-fe
sudo chmod -R 755 /home/ubuntu/deploy-fe

# 이전에 설치된 node_modules를 삭제하고, clean install을 수행합니다.
# sudo rm -rf node_modules/
# sudo npm install --legacy-peer-deps

# 환경변수 설정 (필요한 경우)
# export 변수명=값

# 프로덕션 환경을 위한 빌드를 실행합니다.
# sudo npm run build

# 서버를 재시작하거나 PM2 등을 사용해 프로세스를 관리합니다 (Node.js 애플리케이션의 경우).
# PM2를 사용하는 경우 예시:
pm2 restart all

# 아래는 Nginx를 사용하는 경우 서버를 재시작
sudo systemctl restart nginx

# 서버 상태를 확인합니다.
systemctl status nginx
