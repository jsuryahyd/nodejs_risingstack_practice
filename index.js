const express = require('express');
const hbs= require('express-handlebars');
const path  = require('path');
const app = express();


app.engine('.hbs',hbs({
    defaultLayout:'main.hbs',
    extname:'.hbs',
    layoutsDir:path.join(__dirname,'views/layouts'),
}))

app.set('view engine','.hbs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    res.render('home',{
        name:'Surya'
    })
})

app.listen(1000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server listening at 1000");
    }
});