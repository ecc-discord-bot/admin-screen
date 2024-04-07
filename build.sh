npm run build
rm -r /home/wao/Desktop/iot-bot-back/nginx/statics
mkdir /home/wao/Desktop/iot-bot-back/nginx/statics
cp -RT ./build /home/wao/Desktop/iot-bot-back/nginx/statics
cd /home/wao/Desktop/iot-bot-back
docker compose restart nginx
