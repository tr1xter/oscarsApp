#!/usr/bin/env bash

apt-get update
apt-get install -y git
apt-get install -y mongodb

apt-get install -y python-software-properties python g++ make
add-apt-repository ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs

npm -g install sails
npm -g install sails-mongo