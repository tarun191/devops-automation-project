FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN mkdir -p /var/log
CMD ["node", "app.js"]