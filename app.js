const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const fs = require('fs');

const app = express();
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false })) // if we are using express version above 4.16 use this else use above one 
app.use(express.json());

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,"views","404.html"));
  //res.status(404).sendFile(path.join(__dirname,"./","views","404.html"));
})

app.listen(3002);