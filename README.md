# geocoding-proxy
Google Maps API Geocoding Proxy Server

# Setup
1. clone this repository
1. Make it the current working directory: `$ cd geocoding-proxy`
1. Install dependencies: `$ npm i` or `$ yarn`
1. Copy `.env` file: `$ cp .env.example .env`
1. Add your Google Maps API KEY to `.env`: `GEO_KEY=abcdefg`
1. Start the server: `$ node index.js`
1. From another terminal, try it: `$ curl localhost:5050/geocode/Charleston`
