const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const PORT = config.get('ServerPort');

const start  = async () =>{
    try{
        const url = config.get('dbUrl');
        console.log(url);
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

        app.listen(PORT, () =>{
            console.log('Server started on port ', PORT);
        })
    }catch (e){
        console.log(e);
    }
}
start();