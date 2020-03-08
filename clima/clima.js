const axios = require('axios');


const getClima = async(lat, lng) => {


    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=API-KEY`)

    let clima = resp.data.main;

    return clima.temp;
}


module.exports = {
    getClima
}