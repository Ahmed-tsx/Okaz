
ARG NODE_VERSION=22.17.0

FROM node:${NODE_VERSION}-alpine


WORKDIR /app

RUN npm i --only=production

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]