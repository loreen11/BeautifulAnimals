const express = require('express');
const app = express();
const port = 8000;

// const login = require('./modules/pages/LogIn/LogIn-controller');
const home = require('./modules/pages/Home/Home-controller.js');
// const aboutus = require('./modules/pages/aboutUs/AboutUScontroller');
// const contactus = require('./modules/pages/contactUs/ContacttUscontroller');
const test = require('./db')

// GET method route
app.get('/home', home.HomePage)
// app.get('/about(us)?', aboutus.AboutusPage)
// app.get('/contact(us)?', contactus.ContactusPage)
//app.get('/login', login.LoginPage)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
