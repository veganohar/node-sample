const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// parse requests of content-type - application/json
app.use(bodyParser.json({limit:'50mb'}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' }));

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


require("./app/routes/test.routes")(app);