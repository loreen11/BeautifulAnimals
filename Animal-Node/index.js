const express = require('express')
const app = express();
const port = 8000;

// GET method route

app.get('/', function (req, res) {
  res.send('home')
})
app.get('/AboutUscontroller', function (req, res) {
  res.send('AboutUs')
})
app.get('/ContactUscontroller', function (req, res) {
  res.send('ContactUs')
})
app.get('/AnimalsEquipmantcontroller', function (req, res) {
  res.send('AnimalsEquipmant')
})
app.get('/CatsForAdoptioncontroller', function (req, res) {
  res.send('CatsForAdoption')
})
app.get('/Consultingcontroller', function (req, res) {
  res.send('Consulting')
})
app.get('/GuidanceForAdoptioncontroller', function (req, res) {
  res.send('GuidanceForAdoption')
})
app.get('/LogIncontroller', function (req, res) {
  res.send('LogIn')
})
app.get('/LogOutcontroller', function (req, res) {
  res.send('LogOut')
})
app.get('/psychologistscontroller', function (req, res) {
  res.send('psychologists')
})
app.get('/Veterinarianscontroller', function (req, res) {
  res.send('Veterinarians')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
