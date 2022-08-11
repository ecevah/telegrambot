const express = require('express');

const app = express();
 app.listen(5858);

 app.get("/",(req,res)=>{
    res.send("Merhaba Dünya");  
 });
