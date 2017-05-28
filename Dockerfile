FROM alpine
MAINTAINER sarishinohara

# update alpine linux
RUN apk update && apk upgrade && \ 
    # install nodejs
    apk add nodejs && \
    # install angular-cli
    npm install -g @angular/cli 

# add source code to images
ADD . /loklak-message-publisher

# switch working directory
WORKDIR /loklak-message-publisher

# expose port 4200
EXPOSE 4200 

# run ng serve on localhost
CMD ["ng","serve", "--host", "0.0.0.0"] 
