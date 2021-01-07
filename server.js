const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const cors=require("cors");
app.use(cors());

app.use(bodyParser.json());

const axios=require("axios");








const app_id = "0952c749"
const app_key = "46de65ef4e3210ae6bea9fef797cd699"


app.post('/definition', (req, res) => {
   
    const { e } = req.body;

    language = "en-gb"
    word_id = e
    console.log(e)
    url = "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language + "/" + word_id.toLowerCase();
    axios({url, headers:{"app_id": app_id, "app_key":app_key}}).then((data)=>
        res.send(data.data)).catch(()=>{
           res.send("Error",400)
        })
  
    
    
              
    
});



const PORT = process.env.PORT || 5000;

if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`The Port : ${PORT}`);
    });
}
module.exports = app;