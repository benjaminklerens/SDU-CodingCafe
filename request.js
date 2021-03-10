const http = require('http')

const options_root = {
    host: 'localhost',
    port: 8000,
    path: '/',
    method: 'GET',
    headers: {}
}

const options_benjamin = {
    host: 'localhost',
    port: 8000,
    path: '/benjamin',
    method: 'GET',
    headers: {}
}

const options_sarah = {
    host: 'localhost',
    port: 8000,
    path: '/sarah',
    method: 'GET',
    headers: {}
}


callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });
  
    response.on('end', function () {
      console.log(str);
    });
  }
  
  var req = http.request(options_benjamin, callback);
  
  req.write('')
  req.end();


