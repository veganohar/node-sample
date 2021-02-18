
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




