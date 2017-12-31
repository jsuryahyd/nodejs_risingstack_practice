const express = require('express');
const hbs = require('express-handlebars');
const rp = require('request-promise')
const path = require('path');
app = express();
app.engine('.hbs',hbs({
defaultLayout:"main",
extname:'.hbs',
layoutsDir:path.join(__dirname,'views/layouts')
}));

app.set('view engine','.hbs');
app.set('views',path.join(__dirname,'views'));

app.get('/:postID',(req,res)=>{
    rp({
    method:'GET',
        //url looks like - https://jsonplaceholder.typicode.com/comments?postid=3
        uri:'https://jsonplaceholder.typicode.com/comments',
        qs:{
            postId:req.params.postID
//,api-key:ioerwu94834090e9e9ismvnfdn
        },json:true
    }).then((data)=>{
        res.render('api',data);
        console.log(data);
    }).catch((err)=>{
        res.status(401).send('Error/n'+err);
    })
})

app.use((err,req,res,next)=>{
if(err){
    res.status(500).send('Error/n'+err);
}
})

app.listen(33,()=>{console.log('listening on port:33')});