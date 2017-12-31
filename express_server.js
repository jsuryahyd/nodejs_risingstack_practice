const express = require('express');

const app= express();

//middleware 1
app.use((req,res,next)=>{
    //lets read the request
    console.log(req.headers);
    next();
})

app.use((req,res,next)=>{
    //lets even modify them i.e write
req.chance = Math.random();
next();
})

app.get('/',(req,res)=>{
    // res.write('hello world from express site.');
    // res.end();
    // res.send('hello world from express site.');
    res.json({
        random:req.chance
    });
})

app.listen(3000);