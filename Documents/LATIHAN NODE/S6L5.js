const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=48afe36af4854dbd7b095ce374be2d0b&query=39.952583,-75.165222'

request({ url: url, json: true }, (error, response) => {
    console.log
        (' It is currently ' + response.body.current.temperature + 
        ' degress out. There is a ' + response.body.current.precipProbability + '% chance of rain.')
})