
const db = require('../models')
const Test = db.test;

exports.getAllData = (req,res)=>{
    Test.find((err,docs)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.send({
            status:200,
            data:docs
        })
    })
}



exports.test = (req,res)=>{
    res.send("Better World");
}

exports.paramtest = (req,res)=>{
    console.log(req.params);
    
    res.send("Tested");
} 

exports.querytest = (req,res)=>{
    console.log(req.query);
    res.send("Query Tested");
}

exports.posttest = (req,res)=>{
    console.log(req.body);
    let obj = req.body;
    obj.city = "Hyderabad";
    res.send(obj);
}




