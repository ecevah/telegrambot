const express = require('express');
const axios = require('axios');
const config = require('./config');

const app = express();
 app.listen(5858);

 const init= async() => {
   const response = await axios.get(`${config.simNet.url}/v1/user/profile`,{
      headers: {

            "Authorization": `Bearer ${config.simNet.apiKey}`, 
            "Content-Type": "application/json"
      }});
   console.log(response.data);
   



};

init();