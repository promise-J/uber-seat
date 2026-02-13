# build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

COPY apps ./apps
COPY libs ./libs

RUN npm install
RUN npm run build auth-service


# production state
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# CMD [ "node", "dist/apps/auth-service/main.js" ]
CMD ["npm", "run", "dev:auth"]


