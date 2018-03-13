'use strict';
const { createServer } = require('http');
const fs = require('fs');

const server = createServer();

server.on('request', (req, res) => {
  console.log('Request received for:', req.url)
  let read = fs.createReadStream('index.html');
  read.pipe(res);

});

server.listen(8080, () => {
  console.log("listening on port 8080");
});



