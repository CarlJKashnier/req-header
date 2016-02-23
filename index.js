var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
//Parse out language
var lang = req.headers["accept-language"].substring(0, req.headers["accept-language"].search(","))
//Parse out IP
var host = req.headers["host"].substring(0, req.headers["host"].search(":"))
//Parse out OS
var agent = req.headers["user-agent"].substring(req.headers["user-agent"].search('\\(') +1, req.headers["user-agent"].search('\\)'))

//send back JSON object
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({"ipaddress": host, "language": lang, "Software": agent}));
    //res.write(testOut);
    res.end();
    return
});

server.listen(process.env.PORT || 8888);
//Copyright Carl J. Kashnier
