const http = require ('http');
//const { sensitiveHeaders } = require('http2');
http.createServer((req,res)=>{

    console.log(req);

    //res.writeHead(200,{'content-Type': 'text/plain'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200,{'Content-Type': 'application/csv'});

    

    res.write('Hola Mundo'); 
  
    res.end();


})
.listen(8080);

console.log('Escuchando en el puerto', 8080);