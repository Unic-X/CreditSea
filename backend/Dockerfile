
FROM node:lts as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

FROM node:lts-slim

ENV NODE_ENV production

USER node

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --production

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 8080

CMD [ "node", "dist/index.js" ]

