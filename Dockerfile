
# for image
FROM node:17-alpine

COPY . .

RUN npm install

EXPOSE 6001

# for container
CMD ["npm", "start"]
