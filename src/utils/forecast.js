const request= require('request')

const forecast = (latitude,longitude, callback)=> {
    const url= 'http://api.weatherstack.com/current?access_key=fc9d70dafbeb2690df76f0da97cba160&query=' + latitude + ',' + longitude + '&units=m'
     request({url, json:true}, (error,{body}) =>{
         if(error){
        callback('Unable to connect',undefined)
    } else if(body.error){
        callback('Unable to find location',undefined)
}else {
    callback(undefined, body.current.weather_descriptions + '.It is currently ' + body.current.temperature + ' degrees out and feels like ' + body.current.feelslike + ' degrees') 

        }
    })
}

module.exports= forecast