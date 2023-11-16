var express=require('express');
const app=express();
const path = require('path');
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));

app.post('/fetch', async(req,res)=>{
    
    console.log(req.body);
})
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'test.html'));
  });

app.listen(8080, function() {
    console.log("Server started on port 8080");
  });
  