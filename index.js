require('dotenv').config()
const http = require('http')
const axios = require('axios')
const { compose, prop } = require('ramda')
const { json, logger, methods, mount, parseJson, routes } = require('paperplane')

const geocode = req => {
  return axios({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    params: {
      key: process.env.GEO_KEY,
      address: req.params.address
    }
  })
  .then(prop('data'))
  .then(json)
}

const endpoints = routes({
  '/geocode/:address': methods({
    GET: geocode
  })
})

const app = compose(endpoints, parseJson)
const opts = { errLogger: logger, logger }
const port = process.env.PORT || 3000
const listening = err => err ? console.error(err) : console.info(`Listening on port: ${port}`)

http.createServer(mount(app, opts)).listen(port, listening)
