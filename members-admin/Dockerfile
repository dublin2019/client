FROM node:6

# from node:6-onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

ARG host=api.dublin2019.com:4433
ARG title=Members
ENV NODE_ENV=production API_HOST="${host}" TITLE="${title}"
ENTRYPOINT ["./node_modules/.bin/webpack"]
CMD ["-p"]
