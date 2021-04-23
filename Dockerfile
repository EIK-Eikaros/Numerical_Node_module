FROM node:14.15

RUN mkdir /usr/src/app
WORKDIR /usr/src/app/numer-node
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app/numer-node
RUN npm install

EXPOSE 8080
CMD [ "npm", "run" ,"dev" ]
# docker run -it --rm -d -p 8080:8080 ingcharat/numer-node:lastest
# build
# docker build . -t ingcharat/numer-node:lastest