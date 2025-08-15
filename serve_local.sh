#!/bin/bash
PORT=8080
echo "Site served at localhost:$PORT"
ruby -run -e httpd . -p $PORT
