// Create web server
// Node.js
// Run: node comments.js
// http://localhost:8080

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/api/comments') {
        fs.readFile('comments.json', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/json', 'Access-Control-Allow-Origin': '*'});
            res.end(data);
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World');
    }
}).listen(8080);

console.log('Server running at http://localhost:8080/');

// To test
// http://localhost:8080/api/comments
// http://localhost:8080/api/comments/1
// http://localhost:8080/api/comments/2
// http://localhost:8080/api/comments/3
// http://localhost:8080/api/comments/4
// http://localhost:8080/api/comments/5
// http://localhost:8080/api/comments/6
// http://localhost:8080/api/comments/7
// http://localhost:8080/api/comments/8
// http://localhost:8080/api/comments/9
// http://localhost:8080/api/comments/10
// http://localhost:8080/api/comments/11
// http://localhost:8080/api/comments/12
// http://localhost:8080/api/comments/13
// http://localhost:8080/api/comments/14
// http://localhost:8080/api/comments/15
// http://localhost:8080/api/comments/16
// http://localhost:8080/api/comments/17
// http://localhost:8080/api/comments/18
// http://localhost:8080/api/comments/19
// http://localhost:8080/api/comments/20
// http://localhost:8080/api/comments/21
// http://localhost:8080/api/comments/22
// http://localhost:8080/api/comments/23
// http://localhost:8080/api/comments/24
// http://localhost:8080/api/comments/25
// http://localhost:8080/api/comments/26
// http://localhost:8080/api/comments/27
// http://localhost:8080/api/comments/28
// http://localhost:808