const config = require('../config');
const axios = require('axios');


const getProfile = async () => {
    return new Promise (async(resolve, reject) => {
        const respons = await axios.get(`${config.simNet.url}/v1/user/profile`,{ 
            headers: { 'Authorization': 'Bearer ' + config.simNet.apiKey}
        });
        resolve(respons.data);
    })        
}





const buyNumber = async () => {
    return new Promise (async(resolve,reject) =>{

        const countries = config.simNet.country;
        let randIndex = Math.round(Math.random() * countries.length);
        const respons = await axios.get(`${config.simNet.url}/v1/user/buy/activation/any/any/telegram`,{
            headers: { 'Authorization': 'Bearer' + config.simNet.apiKey,
            'Accept' : 'application/json'}
        });
        resolve(respons.data);
    })

}









module.exports = {
   getProfile ,
   buyNumber
}