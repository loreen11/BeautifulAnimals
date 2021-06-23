const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// const login = require('./modules/pages/LogIn/LogIn-controller');
const home = require('./modules/pages/Home/Home-controller.js');
const services = require('./modules/pages/Services/Services-controller.js');
// const guidance_for_adoptation = require('./modules/pages/Guidance-For-Adoption/Guidance-For-Adoption-controller.js');
// const aboutus = require('./modules/pages/aboutUs/AboutUScontroller');
const contactusRoutes = require('./modules/pages/Contact-us/ContactUs-route.js');
const test = require('./db')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// GET method route
app.get('/home', home.HomePage);
app.get('/Services', services.ServicesPage);
app.use('/contact(us)?', contactusRoutes.Router)
// app.get('/Guidance-For-Adoption', guidance_for_adoptation.GuidanceForAdoptionPage)

// app.get('/about(us)?', aboutus.AboutusPage)
// app.get('/contact(us)?', contactus.ContactusPage)
//app.get('/login', login.LoginPage)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
