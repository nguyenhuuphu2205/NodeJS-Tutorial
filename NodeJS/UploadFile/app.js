var express=require('express');
var multer=require('multer');
var path=require('path');
var app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('ejs', require('express-ejs-extend'));
app.get('/upload',function (req,res){
	res.render('upload');
});
app.listen(8000,function(){
	console.log('Listening port 8000');
});
//route get upload image
app.get('/upload',function(req,res){
	res.render('upload');
});
var storage=multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,'./upload');
	},
	filename:function(req,file,cb){
		cb(null,file.originalname +'-'+Date.now());
	}
});
// route post file image
app.post('/upload',function(req,res){
	var upload=multer({
		storage:storage,
		fileFilter:function(req,file,cb){
	var ext=path.extname(file.originalname);
	console.log(ext);
	if(ext!='.png' && ext!='.jpg' &&ext!='.jpeg'&&ext!='.gif'){
		return	cb(res.end('Ony images are acceph'),false);
	}else{
		cb(null,true)
	}


},
	}).single('avatar');
	upload(req,res,function(err){
		if(err){
			res.end('Upload error');
		}else{
			res.end('Upload successfully');
		}
	});
});
//route index
app.get('/index',function(req,res){
	res.render('pages/index');
});
//route about
app.get('/about',function(req,res){
	res.render('pages/about');
});