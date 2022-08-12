const express = require('express');
const axios = require('axios');
const config = require('./config');
const simNet = require('./lib/simnet');

const app = express();
 app.listen(5858);

 const init= async() => {
   const simNetGetProfile = await simNet.getProfile();
   console.log(simNetGetProfile);
   try {
    const country = await simNet.buyNumber();
    console.log(country);
   } catch (error) {
    console.log(error);
   }

};

init();