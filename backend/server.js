const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet')
const fetch = require('node-fetch');

const app = express();

//server usage of cors and body-parser
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//implement helmet for security
app.use(helmet());


//when server receives a POST request, we take the data from the body and let the server fetch data based on the users data
//then immediately after the data is fetched we send it back to the server
app.post('/', (req, res, next)=>{
    //console.log("hii", req.body.search)
    fetch(`https://itunes.apple.com/search?term=${req.body.search}&entity=${req.body.mediaType}&limit=8`).then(
        (response)=> response.json()
    ).then(
        (data)=>{
           console.log(data)
           res.json(data)
        }
    )
})

/*we want to catch all errors, with the requests made to the server.
used the wildcard(*) to make sure that we catch all requests made to the server.
*/
app.get('*', (req, res, next)=>{
    let err = new Error('There was an error in accessing the page you wanted');
    err.statusCode = 404;
    next(err);
})

app.use((err, req, res, next)=>{
    console.log(err.message)
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})


let PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log("app listened")
})

/*
   .then((response)=> response.json())
    .then((data)=>{ console.log(data) })
*/