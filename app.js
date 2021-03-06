const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views/');

//app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false })) // if we are using express version above 4.16 use this else use above one 
app.use(express.json());
app.use(express.static('public'));

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404)

app.listen(3002);