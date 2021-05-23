const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const fs = require('fs');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views/ejs');

//app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false })) // if we are using express version above 4.16 use this else use above one 
app.use(express.json());
app.use(express.static('public'));

app.use("/admin",adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404',{pageTitle : 'Page Not Found',path : '/404', });
})

app.listen(3002);