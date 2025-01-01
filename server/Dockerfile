FROM node:20

WORKDIR /app

COPY . .
RUN rm -rf node_modules
RUN npm i 
RUN npm run build 

CMD ["node", "dist/server.js"]

EXPOSE 3333