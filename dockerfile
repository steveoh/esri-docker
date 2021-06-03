FROM node:14 AS build
WORKDIR /app

COPY . .

ARG NODE_ENV=production
ARG NODE_OPTIONS=--max_old_space_size=4096

RUN npm install -g npm
RUN npm install
RUN npm rebuild esbuild
RUN npm run build

FROM nginx AS base
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
