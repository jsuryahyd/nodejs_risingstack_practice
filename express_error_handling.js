const express= require('express');

const app = express();

app.get('/',function(req,res){
    throw new Error('oops');
});

app.use((err,req,res,next)=>{
    
    console.log('there was an error - ',err);
    res.status(500).send('Sorry bru!');
    next();
});

app.listen(4000);