const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3dhcGRlc2FpIiwiYSI6ImNrbmNqaXgxeDIwYWsydnFuY2lsYXdnMWsifQ.h5kOtpxwpAtVAvA7XzVn9Q&limit=1'
  
  request({url, json: true}, (error, response, body) => {
    if (error) {
      callback('Error calling location service!')
    } else if (body.features.length === 0) {
      callback('Unable to find location!')
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
