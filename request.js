const http = require('http')
var current_endpoint = ''
const options = {
    host: 'sdu-codecafe.herokuapp.com',
    path: '/' + current_endpoint,
    method: 'GET',
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
  
  var req = http.request(options, callback);
  req.write('')
  req.end();


