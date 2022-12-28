FROM alpine
RUN apk update && apk add --update bash && apk add --update curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
RUN mkdir /projects
RUN chmod 777 /projects
COPY ./ /projects/
EXPOSE 8081