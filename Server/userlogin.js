var express = require('express');
var cors = require('cors');
var mongoClient = require('mongodb').MongoClient;


var ConStr = "mongodb://127.0.0.1:27017/";
var app = express();

app.use(cors());
app.use(express.urlencoded({
    extended : true
}));


app.get('/', (request, response)=>{
    response.send('Api Home')
});

app.get('/userlogindetails', (req, res)=>{
    mongoClient.connect(ConStr)
    .then((obj)=>{
        var database = obj.db("VideoTutorial");
        database.collection("userlogin").find({}).toArray().then(document =>{
            res.send(document);
            res.end();
        })
    })
    .catch((error)=>{
        console.log(error)
    })
});

app.post('/registeruser',(req, res)=>{
    var user = {
        username : req.body.username,
        email : req.body.email,
        phonenumber : req.body.phonenumber,
        password : req.body.password,
        reenterpassword : req.body.reenterpassword
    };
    mongoClient.connect(ConStr)
    .then(obj =>{
        var database = obj.db("VideoTutorial");
        database.collection('userlogin').insertOne(user)
        .then(()=>{
            console.log(`Register User ...`);
            res.redirect("/userlogindetails");
        })
    })
});

app.get("*", (request, response)=>{
    response.send('Error 404 :Request path is not Found')
});




app.listen(5006);
console.log(`Server is Started : http://127.0.0.1:5006`)