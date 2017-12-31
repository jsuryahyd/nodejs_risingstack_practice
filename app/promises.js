
const path = require('path');
const fs = require('fs');



function stats(file) {
    return new Promise((resolve,reject)=>{
    fs.stat(file,(err,data)=>{
        if(err){
            return reject(err);
        }else{
            return resolve(data);
        }
    })
})
};
// stats(path.join(__dirname,'../index.js')).then(function(data,err){if(err){console.log(err)}else{console.log(data)}})


fs.readdir(path.join(__dirname,''),function(err,files){
    if(err){console.log(err);return}
    // console.log(__dirname,files);
    Promise.all(files.map((file)=>{return stats(file)})).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});
});

