FROM node:latest

WORKDIR /app

COPY package*.json .
COPY tsconfig*.json .

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 5001

CMD ["npm", "start", "--", "--port", "5001"]