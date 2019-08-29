FROM composer as backend

WORKDIR /app

COPY composer.json composer.lock /app/
COPY /database /app/database
 
RUN composer install  \
    --ignore-platform-reqs \
    --no-ansi \
    --no-dev \
    --no-interaction \
    --no-scripts

FROM node as frontend

WORKDIR /app

COPY package.json package-lock.json webpack.production.js webpack.common.js tailwind.config.js .babelrc /app/
COPY resources/assets /app/resources/assets

RUN npm install
RUN npm run production

# APP STAGE
FROM alpine:3.10 as app

RUN apk --no-cache add php7 php7-fpm php7-json php7-openssl php7-curl \
    php7-zlib php7-xml php7-phar php7-intl php7-dom php7-xmlreader php7-ctype php7-session \
    php7-zip php7-fileinfo php7-mbstring php7-gd nginx supervisor curl php7-tokenizer \
    php7-xmlwriter php7-pdo

COPY docker-config/nginx.conf /etc/nginx/nginx.conf
COPY docker-config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN mkdir -p /var/www/html

WORKDIR /var/www/html

COPY . .

COPY --from=backend /app/vendor /var/www/html/vendor
COPY --from=frontend /app/public /var/www/html/public

RUN php artisan config:cache

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]