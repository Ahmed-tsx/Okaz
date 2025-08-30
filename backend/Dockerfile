ARG NODE_VERSION=22.17.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /app

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm" ,"start"] 
