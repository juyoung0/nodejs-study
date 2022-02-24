// hellonode1.js

var server = require('http');
var fs = require('fs');

fs.readFile('./hello.txt', encoding = 'utf-8', function(err, data){
    if(err) {
        console.log(err);
    }
    let text = data + " Node.js!"
    console.log('비동기적 읽기 ' + text);
    server.createServer(function(req, res){
        res.writeHead(200, { 'Content-Type' : 'text/plain' });
        res.end(text);
    }).listen(3000, 'localhost');
    console.log('Server is running at http://localhost:3000/');

})

// 동기적 읽기
var text = fs.readFileSync('bye.txt', 'utf8');
console.log('동기적 읽기 !' + text);

// 파일 읽기(동기적)
try {
    var data = fs.readFileSync('bye.txt', 'utf8'); // 파일이 없는데 읽으려 함
    console.log(data);
} catch (err) {
    console.log(err);
}
