const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true}))

//cannot call app.listen(port, callbackfunction) twice, cut this and paste into function below.
/*
require('./app/routes')(app, {});
app.listen(port, () => {
    console.log("We are live on " + port);
})
*/

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) =>{
    if (err) return console.log(err)
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log("We are live on " + port);
    })
})