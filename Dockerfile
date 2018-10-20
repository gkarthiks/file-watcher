FROM alpine:3.5 AS base
MAINTAINER Karthikeyan Govindaraj "github.gkarthiks@gmail.com"
RUN apk add --no-cache nodejs-current tini
# Setting tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]

# Stage 2 build
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
COPY package.json .
RUN npm install

RUN mkdir src
COPY src src/

CMD ["node", "src/file-watcher.js"]