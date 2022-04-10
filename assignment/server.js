const express=require('express');
const path = require('path');
const app=express();

app.use(express.static('public'));
app.get('/countries',function(req, res){
    res.sendFile(path.join(__dirname,'/a.html'));
})
app.get('/regions',function(req, res){
    res.sendFile(path.join(__dirname,'/ac.html'));
})

app.get('*',function(req,res){
res.send('Page Error 404')
})


app.listen(5500);//port



