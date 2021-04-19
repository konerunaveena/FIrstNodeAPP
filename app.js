const express = require('express')
const bodyParser =  require('body-parser')
const app = express();

//app.use(bodyParser.urlencoded({extended :false}))  
app.use(express.urlencoded({extended: true})) // if we are using express version above 4.16 use this else use above one 

app.use('/add-product',(req,res,next) => {
  res.send("<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>");
});

app.post('/product',(req,res,next)=> {
  console.log(req.body)
  res.redirect("/");
})

app.use('/',(req,res,next) => {
  res.send("<h1>Hello from expressjs");
});

app.listen(3001);