const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var jsonparser = bodyParser.json();
app.listen(port,()=>{
    console.log("Node sample programming running");
});
mongoose.connect("mongodb://localhost/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
      console.log("Mongodb connected successfully");
    }).catch((err)=>{
      console.log("error",err);
      process.exit();  
    });
app.get('/',(req,res)=>{ 
    res.send("Hello World");
});

app.get('/test',(req,res)=>{
    res.send("Better World");
});

app.post('/test/test1',jsonparser,(req,res)=>{
    console.log(req.body);
    let obj = req.body;
    obj.city = "Hyderabad";
    res.send(obj);
});


app.get('/paramtest/:name',(req,res)=>{
    console.log(req.params);
    res.send("Tested");
});

app.get('/querytest',(req,res)=>{
    console.log(req.query);
    res.send("Query Tested");
})
