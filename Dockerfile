FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .
RUN yarn install --production

COPY dist/ .
EXPOSE 8080

ENTRYPOINT [ "yarn" ]
CMD [ "prod:run" ]





