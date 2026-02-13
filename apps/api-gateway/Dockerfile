# build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

COPY apps ./apps
COPY libs ./libs

RUN npm install
RUN npm run build api-gateway


# production state
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# CMD [ "node", "dist/apps/api-gateway/main.js" ]
CMD ["npm", "run", "dev:api-gateway"]



