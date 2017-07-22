# geocoding-proxy
Google Maps API Geocoding Proxy Server

# Setup
1. clone this repository
1. make it the current working directory: `$ cd geocoding-proxy`
1. install dependencies: `$ npm i` or `$ yarn`
1. get an API key: [https://developers.google.com/maps/documentation/geocoding/start#get-a-key](https://developers.google.com/maps/documentation/geocoding/start#get-a-key)
1. copy `.env` file: `$ cp .env.example .env`
1. add your Google Maps API key to `.env`: `GEO_KEY=abcdefg`
1. start the server: `$ node index.js`
1. from another terminal, try it: `$ curl localhost:5050/geocode/Charleston`
