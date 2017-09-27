var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,'application/json');
	var obj={
		"name":"Phu",
		"Ho":"Nguyen Huu"
	};
	res.end(JSON.stringify(obj));
}).listen(8000);
