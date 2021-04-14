const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=50d54cb0cefff9028ff4549934631e6b&query=' + latitude + ',' + longitude
  
  request({url, json: true}, (error, response, body) => {
    if (error) {
      callback('Error calling forecast service!')
    } else if (body.error) {
      callback('Unable to find location!')
    } else {
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out')
    }
  })
}

module.exports = forecast
