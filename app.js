const express = require('express')
const bodyParser =  require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes =  require('./routes/shop')
const app = express();

//app.use(bodyParser.urlencoded({extended :false}))  
app.use(express.urlencoded({extended: true})) // if we are using express version above 4.16 use this else use above one 

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3001);