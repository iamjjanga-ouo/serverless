const http = require('http');

// REST API를 호출하고 결과 JSON을 읽어서 화면에 출력하는 예제
module.exports = {
  getUsersByHttp: () => new Promise((resolve, reject) => {
    const options = {
      host: 'jsonplaceholder.typicode.com',
      port: 80,
      path: '/users',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const request = http.request(options, function(response) {
      let body = '';
      response.on('data', function(data) {
        body += data;
      })
      response.on('end', function() {
        resolve(JSON.parse(body));
      });
      response.on('error', function(err) {
        console.log("http-error:",err);
      }); 
    });
    request.end();
  })
}