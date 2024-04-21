#!/bin/bash
# 서버에 필요한 종속성 설치
sudo yum update -y

sudo yum install -y nginx

# 애플리케이션 빌드 파일을 웹 서버의 루트 디렉토리로 이동
sudo cp -r /var/www/html/build/* /usr/share/nginx/html/

# 웹 서버 재시작
sudo systemctl restart nginx
