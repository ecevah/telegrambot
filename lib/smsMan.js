const config = require('../config');
const axios = require('axios');

const getProfile = async () => {
    return new Promise (async(resolve, reject) => {
        const respons = await axios.get(`${config.smsMan.url}/v1/user/profile`,{ 
            headers: { 'Authorization': 'Bearer ' + config.smsMan.apiKey}
        });
        resolve(respons.data);
    })        
}