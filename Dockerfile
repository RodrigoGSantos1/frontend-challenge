FROM node:18 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:18
WORKDIR /app
ENV PORT 3000
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]