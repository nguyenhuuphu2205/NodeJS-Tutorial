var express=require('express');
var app= new express();
app.engine('ejs', require('ejs').renderFile);
app.set("view engine","ejs");
app.set("views","./views");
app.get('/khoapham',function(req,res){
	res.render('khoapham');
});
var server=app.listen(8000,function(){
	var address=server.address().address;
	var port=server.address().port;
	console.log("Server listen "+address+" "+port);
});
app.get('/',function(req,res){
	res.send("Hello World");
});
