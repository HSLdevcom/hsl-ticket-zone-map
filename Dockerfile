FROM node:alpine

ENV WORK /opt/ticketzones

# Create app directory
RUN mkdir -p ${WORK}
WORKDIR ${WORK}

# Install app dependencies
COPY package.json ${WORK}
COPY yarn.lock ${WORK}
RUN yarn install

# Bundle app source
COPY . ${WORK}

EXPOSE 3000

CMD yarn start
