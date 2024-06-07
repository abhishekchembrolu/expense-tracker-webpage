var express=require('express');
var bodyPparse=require('body-parser');
var mongoose=require('mongoose');

const app=express()

app.use(bodyPparse.json())
app.use(express.static('public'))
app.use(bodyPparse.urlencoded({
    extended:true
}))


mongoose.connect('mongodb://0.0.0.0:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;

db.on('error',()=>console.log('error in connection'));
db.once('open',()=>console.log('connected to database'))

app.get('/',(req,res)=>{
    return res.redirect("login.html");
}).listen(3000);