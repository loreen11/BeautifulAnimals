const contactusdb = require('./Contact-us-db.js')

module.exports.ContactUsPage = async (req, res) => {
   res.json(await contactusdb.ContactUsPageJson());
}

module.exports.CreateTechnicalFailure = async (req, res) => {
  await contactusdb.ContactUsTechnicalFailurePageJson(req.body)
   res.json({ success: true, message: 'your message recevied' });
}
