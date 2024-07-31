FROM node:20-alpine AS angular

WORKDIR /app

COPY . .

RUN npm install


RUN npm run build

FROM httpd:alpine

WORKDIR /usr/local/apache2/htdocs

COPY --from=angular /app/dist/angular-edisys-1 .