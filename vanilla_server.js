const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":'text/html'});
    res.write('Namasthe World/n');
    res.end( 'response served.');
});


//server config
const port = 3000;
const host = 'localhost';

server.listen(port,host,function(err){
 if(err){
    console.log(err);
 }
 console.log(`server running at ${host}:${port}`)

})
