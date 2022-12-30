FROM node:16.4.0-alpine
ENV NODE_ENV=production
RUN apk update && apk add --update bash && apk add --update curl
RUN npm i -g expo
RUN mkdir /projects
RUN chmod 777 /projects
COPY ./ /projects/