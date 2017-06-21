// Make our .env configuration file available
require('dotenv').config()


// Import libraries
const http = require('http')
const axios = require('axios')
const { compose, composeP, curryN, path, prop } = require('ramda')
const { json, logger, methods, mount, parseJson, routes } = require('paperplane')


// Application-specific code
const getGeocode = curryN(2, (key, address) =>
  axios({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    params: { key, address }
  })
  .then(prop('data'))
)

const geocode = compose(
  composeP(
    json,
    getGeocode(process.env.GEO_KEY),
  ),
  path(['params', 'address'])
)

const endpoints = routes({
  '/geocode/:address': methods({
    GET: geocode
  })
})

const app = compose(endpoints, parseJson)


// Server options
const opts = { errLogger: logger, logger }
const port = process.env.PORT || 3000
const listening = err => err ? console.error(err) : console.info(`Listening on port: ${port}`)


// Start the server
http.createServer(mount(app, opts)).listen(port, listening)
