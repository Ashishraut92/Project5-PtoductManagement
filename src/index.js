
const express = require('express')
const multer = require('multer')
const route = require('./routes/routes')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended:true } ))
app.use(multer().any())

mongoose
    .connect(
        'mongodb+srv://ashish123:Zq1Ts3r54Eazp00t@cluster0.frqge.mongodb.net/Project5-DB?authSource=admin&replicaSet=atlas-whi53q-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
        {
            useNewUrlParser : true
        }
    )
    .then(() => console.log("MongoDb is Ready To Rock..."))
    .catch((err) => console.log(err));

    
app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app up and running on port " + (process.env.PORT || 3000));
});
