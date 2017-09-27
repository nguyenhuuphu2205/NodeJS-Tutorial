var express=require('express');
var multer=require('multer');
var upload=new multer({ dest: 'upload/'});
var app=new express();
var server=app.listen(8000,function(){
	var address=server.address().address;
	var port=server.address().port;
	console.log("Listenning %s %s",address,port);
});
app.set('views','./views');
app.set('view engine','ejs');
app.get('/khoapham',function(req,res){
	res.render('khoapham');
});
app.get('/chitiet',function(req,res){
	res.render('chitiet',{'ten':'Nguyen Huu Phu'});
});
app.get('/namsinh',function(req,res){
	res.render('namsinh',{'namsinh':[1987,1988,1989,1990]});
});
app.get('/upload',function(req,res){
	res.render('upload');
});
app.post('/upload',upload.single('avatar'),function(req,res,next){
	
	res.end('Thanh Cong');
});