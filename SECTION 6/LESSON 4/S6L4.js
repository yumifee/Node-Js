const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=48afe36af4854dbd7b095ce374be2d0b&query=39.952583,-75.165222.'
request({ url: url }, (error, response) => {
    console.log(response)
 // Parse the response body from JSON string into JavaScript object
 const data = JSON.parse(response.body)
 // Will print the current temperature to the console
 console.log(data)
})