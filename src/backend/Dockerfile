FROM ruby:2.6.5-alpine

RUN apk update \
      && apk add --no-cache \
           alpine-sdk \
           postgresql-dev \
           nodejs \
           npm \
           sqlite-dev \
           tzdata
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

WORKDIR /tmp
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install -j8

WORKDIR /app

