var express=require("express"),
app=express();
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile('gridHtml.html',{root:__dirname});
});

app.listen("3000",function(){
	console.log("App started");
});